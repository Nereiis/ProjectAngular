const { deleteFile } = require('../../middlewares/delete.file');
const Crucero = require('../models/crucero.model');

const getCruceros = async(req,res) => {
    try {
        const allCruceros = await Crucero.find();
        return res.status(200).json(allCruceros);
    } catch (error) {
        return res.status(500).json(error)
    }
}

const getCruceroById = async(req,res)=>{
    try {
        const {id}=req.params;
        const cruceroById = await Crucero.findById(id);
        return res.status(200).json(cruceroById)
    } catch (error) {
        return res.status(500).json(error);
    }
}


//GET PAGINADO
const getCrucerosByPage = async(req,res) => {
    try {
        //Recoger querys de numero de pagina(page) y limite por pagina(limit)
        let {page, limit} = req.query;
        
        //Contar el numero de elementos en mi coleccion
        const numCruceros = await Crucero.countDocuments();
        
        //Si no está seteado seteo el limite a 10
        limit = limit ? parseInt(limit) || 10 : 10;

        //Comprobar el numero máximo de paginas dependiendo de mi limite
        let numPages = numCruceros%limit > 0 ? numCruceros/limit + 1 : numCruceros/limit;

        //Si no está seteado seteo el numero de pagina a 1
        page = page > numPages ? numPages : page < 1 ? 1 :  parseInt(page) || 1;
        // if(page > numPages){
        //     page = numPages;
        // }else if(page < 1){
        //     page = 1
        // }else{
        //     page = page
        // }

        // Calculo el salto(skip) que tengo que dar a mi find para empezar a partir del elemento que quiero
        const skip = (page - 1) * limit;

        const allCruceros = await Crucero.find().skip(skip).limit(limit);
        const response = {
            info: {
                numCruceros: numCruceros,
                page: page,
                limit: limit,
                nextPage: numPages >= page + 1 ? `/cruceros?page=${page + 1}&limit=${limit}` : null,
                previusPage: page != 1 ? `/cruceros?page=${page - 1}&limit=${limit}` : null
            },
            results: allCruceros
        }
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json(error)
    }
}

const postCruceros = async(req,res) => {
    try {
        console.log(req.file)
        const newCrucero = new Crucero(req.body);
        if(req.file){
            newCrucero.portada = req.file.path;
        }
        const createdCrucero = await newCrucero.save();
        return res.status(201).json(createdCrucero);
    } catch (error) {
        return res.status(500).json(error)
    }

}

const putCruceros = async(req,res) => {
    try {
        const {id} = req.params;
        const putCrucero = new Crucero(req.body);
        putCrucero._id = id;        
        if(req.file){
            putCrucero.portada = req.file.path;
        }
        const updatedCrucero = await Crucero.findByIdAndUpdate(id, putCrucero)
        if(!updatedCrucero){
            return res.status(404).json({message: "El id de este crucero no existe"});
        }
        if(updatedCrucero.portada !== putCrucero.portada){
            deleteFile(updatedCrucero.portada);
        }
        return res.status(200).json(updatedCrucero);
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteCruceros = async(req,res) => {
    try {
        const {id} = req.params;
        const deletedCrucero = await Crucero.findByIdAndDelete(id);
        if(!deletedCrucero){
            return res.status(404).json({message: "El id del crucero no existe"});
        }
        return res.status(200).json(deletedCrucero)
        
    } catch (error) {
        return res.status(500).json(error)
    }

}

module.exports = {getCruceros,getCruceroById, postCruceros, putCruceros, deleteCruceros}
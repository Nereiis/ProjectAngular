const { deleteFile } = require('../../middlewares/delete.file');
const Isla = require('../models/isla.model');

// const getLibros = async(req,res) => {
//     try {
//         const allLibros = await Libro.find();
//         return res.status(200).json(allLibros);
//     } catch (error) {
//         return res.status(500).json(error)
//     }
// }


//GET PAGINADO
const getIslas = async(req,res) => {
    try {
        //Recoger querys de numero de pagina(page) y limite por pagina(limit)
        let {page, limit} = req.query;
        
        //Contar el numero de elementos en mi coleccion
        const numIslas = await Isla.countDocuments();
        
        //Si no está seteado seteo el limite a 10
        limit = limit ? parseInt(limit) || 10 : 10;

        //Comprobar el numero máximo de paginas dependiendo de mi limite
        let numPages = numIslas%limit > 0 ? numIslas/limit + 1 : numIslas/limit;

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

        const allIslas = await Isla.find().skip(skip).limit(limit);
        const response = {
            info: {
                numLibros: numIslas,
                page: page,
                limit: limit,
                nextPage: numPages >= page + 1 ? `/islas?page=${page + 1}&limit=${limit}` : null,
                previusPage: page != 1 ? `/islas?page=${page - 1}&limit=${limit}` : null
            },
            results: allIslas
        }
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json(error)
    }
}

const postIslas = async(req,res) => {
    try {
        console.log(req.file)
        const newIsla = new Isla(req.body);
        if(req.file){
            newIsla.portada = req.file.path;
        }
        const createdIsla = await newIsla.save();
        return res.status(201).json(createdIsla);
    } catch (error) {
        return res.status(500).json(error)
    }

}

const putIslas = async(req,res) => {
    try {
        const {id} = req.params;
        const putIsla = new Isla(req.body);
        putIsla._id = id;        
        if(req.file){
            putIsla.portada = req.file.path;
        }
        const updatedIsla = await Isla.findByIdAndUpdate(id, putIsla)
        if(!updatedIsla){
            return res.status(404).json({message: "El id de esta isla no existe"});
        }
        if(updatedIsla.portada !== putIsla.portada){
            deleteFile(updatedIsla.portada);
        }
        return res.status(200).json(updatedIsla);
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteIslas = async(req,res) => {
    try {
        const {id} = req.params;
        const deletedIsla = await Isla.findByIdAndDelete(id);
        if(!deletedIsla){
            return res.status(404).json({message: "El id de la isla no existe"});
        }
        return res.status(200).json(deletedIsla)
        
    } catch (error) {
        return res.status(500).json(error)
    }

}

module.exports = {getIslas, postIslas, putIslas, deleteIslas}
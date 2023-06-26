const { deleteFile } = require('../../middlewares/delete.file');
const Escapada = require('../models/escapada.model');

const getEscapadas = async(req,res) => {
    try {
        const allEscapadas = await Escapada.find();
        return res.status(200).json(allEscapadas);
    } catch (error) {
        return res.status(500).json(error)
    }
}
const getEscapadaById = async(req,res)=>{
    try {
        const {id}=req.params;
        const escapadaById = await Escapada.findById(id);
        return res.status(200).json(escapadaById)
    } catch (error) {
        return res.status(500).json(error);
    }
}

const postEscapada = async(req,res) => {
    try {
        console.log(req.file)
        const newEscapada = new Escapada(req.body);
        if(req.file){
            newEscapada.portada = req.file.path;
        }
        const createdEscapada = await newEscapada.save();
        return res.status(201).json(createdEscapada);
    } catch (error) {
        return res.status(500).json(error)
    }

}

const putEscapada = async(req,res) => {
    try {
        const {id} = req.params;
        const putEscapada = new Escapada(req.body);
        putEscapada._id = id;        
        if(req.file){
            putEscapada.portada = req.file.path;
        }
        const updatedEscapada = await Escapada.findByIdAndUpdate(id, putEscapada)
        if(!updatedEscapada){
            return res.status(404).json({message: "El id de esta escapada no existe"});
        }
        if(updatedEscapada.portada !== putEscapada.portada){
            deleteFile(updatedEscapada.portada);
        }
        return res.status(200).json(updatedEscapada);
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteEscapada = async(req,res) => {
    try {
        const {id} = req.params;
        const deletedEscapada = await Escapada.findByIdAndDelete(id);
        if(!deletedEscapada){
            return res.status(404).json({message: "El id de la escapada no existe"});
        }
        return res.status(200).json(deletedEscapada)
    } catch (error) {
        return res.status(500).json(error)
    }

}

module.exports = {getEscapadas, postEscapada, putEscapada, deleteEscapada}
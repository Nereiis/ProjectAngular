const { log } = require('console');
const Spa = require('../models/spa.model');

const getSpas = async(req, res) => {
    try{
        const allSpas = await Spa.find();
        return res.status(200).json(allSpas)
    } catch(error) {
        return res.status(500).json(error)
    }
}
const getSpasById = async(req,res)=>{
    try {
        const {id}=req.params;
        const SpasById = await Spa.findById(id);
        return res.status(200).json(SpasById)
    } catch (error) {
        return res.status(500).json(error);
    }
}

const postSpas = async(req, res) => {
    try {
        console.log(req.file);
        const newSpa = new Spa(req.body);
            if(req.file) {
                newSpa.Imagen = req.file.path
            }
        const createdSpa = await newSpa.save()
    } catch (error) {
        return res.status(500).json(error)
    }
}

const putSpas = async(req, res) => {
    try {
        const {id} = req.params;
        const putSpa = new Spa(req.body)
        putSpa._id = id
            if(req.file){
                putSpa.Imagen = req.file.path
            }
        const updatedSpa = await Spa.findByIdAndUpdate(id, putSpa)
            if(!updatedSpa){
                return res.status(404).json({message: "El id de este Spa no existe"});
            }
            if(updatedSpa.Imagen !== putSpa.Imagen){
                deleteFile(updatedSpa.Imagen)
            }
        return res.status(200).json(updatedSpa);
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteSpas = async(req,res) => {
    try {
        const {id} = req.params;
        const deletedSpa = await Spa.findByIdAndDelete(id);
        if(!deletedSpa){
            return res.status(404).json({message: "El id del Spa no existe"});
        }
        return res.status(200).json(deletedSpa)
        
    } catch (error) {
        return res.status(500).json(error)
    }

}

module.exports = {getSpas,getSpasById,  postSpas, putSpas, deleteSpas}
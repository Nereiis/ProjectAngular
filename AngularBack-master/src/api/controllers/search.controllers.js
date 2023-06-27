const Crucero = require('../models/crucero.model');
const Escapada = require('../models/escapada.model');
const Isla = require('../models/isla.model');
const Spa = require('../models/spa.model');




const getByName = async(req,res)=>{
    console.log(req.params)
    let allResults=[];
    try {
       

        const {input}=req.params;
        const allCruceros = await Crucero.find();
        const crucerosByName = allCruceros.filter(crucero=>{
            if(crucero.Ubicacion.toLowerCase().includes(input.toLowerCase())){
                return crucero;
            }
            
        })
        
        allResults=[...allResults,crucerosByName]
     
        const allEscapadas = await Escapada.find();
        const escapadasByName = allEscapadas.filter(escapada=>{
            if(escapada.Ubicacion.toLowerCase().includes(input.toLowerCase())){
                return escapada;
            }
            
        })
        allResults=[...allResults, escapadasByName];
        
        const allIslas = await Isla.find();
        const islasByName = allIslas.filter(isla=>{
            if(isla.Ubicacion.toLowerCase().includes(input.toLowerCase())){
                return isla;
            }
            
        })
        allResults=[...allResults, islasByName]
        const allSpas = await Spa.find();
        const spasByName = allSpas.filter(spa=>{
            if(spa.Ubicacion.toLowerCase().includes(input.toLowerCase())){
                return spa;
            }
            
        })
        allResults=[...allResults, spasByName]




        console.log(allResults)
       
        return res.status(200).json(allResults)
    } catch (error) {
        return res.status(500).json(error);
    }
}




module.exports = {getByName}
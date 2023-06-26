const Spa = require ('../api/models/spa.model')
const mongoose = require('mongoose');

const arraySpas = [
    
    {
        "Nombre": "",
        "Ubicacion": "",
        "Descripcion": "",
        "Caratula": "",
        "Imagen": "",
        "Actividades": { 
            "Itinerario": { 
                "Dia1": "",
                "Dia2": ""
            }}
    }
       
]


mongoose.connect('mongodb+srv://root:root@cluster0.imov6up.mongodb.net/libreria?retryWrites=true&w=majority')
.then(async () => {
    const allSpas = await Spa.find()
    if(allSpas.length > 0){
        await Spa.collection.drop()
        console.log('Spas borrados')
    }
})
.catch(err => console.error('Error borrando',err))
.then(async() => {
    const spasMap = arraySpas.map((Spa) => new Spa(Spa))
    await Spa.insertMany(spasMap)
    console.log('Spas añadidos');
})
.catch(err => console.error('Error insertando',err))
.finally(() => mongoose.disconnect());
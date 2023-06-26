const Isla = require ('../api/models/isla.model')
const mongoose = require('mongoose');

const arrayIslas = [
    
    {
        "Nombre": "",
        "Ubicacion": "",
        "Precio": 0,
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
    const allIslas = await Isla.find()
    if(allIslas.length > 0){
        await Isla.collection.drop()
        console.log('Islas borrados')
    }
})
.catch(err => console.error('Error borrando',err))
.then(async() => {
    const islasMap = arrayIslas.map((Isla) => new Isla(Isla))
    await Isla.insertMany(islasMap)
    console.log('Islas añadidos');
})
.catch(err => console.error('Error insertando',err))
.finally(() => mongoose.disconnect());
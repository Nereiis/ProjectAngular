const Crucero = require ('../api/models/crucero.model');
const mongoose = require('mongoose');

const arrayCruceros = [
    
    {
        "Nombre": "",
        "Ubicacion": "",
        "Precio": "",
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
    const allCruceros = await Crucero.find()
    if(allCruceros.length > 0){
        await Crucero.collection.drop()
        console.log('Cruceros borrados')
    }
})
.catch(err => console.error('Error borrando',err))
.then(async() => {
    const crucerosMap = arrayCruceros.map((Crucero) => new Crucero(Crucero))
    await Crucero.insertMany(crucerosMap)
    console.log('Cruceros añadidos');
})
.catch(err => console.error('Error insertando',err))
.finally(() => mongoose.disconnect());
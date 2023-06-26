const Escapada = require('../api/models/escapada.model');

const mongoose = require('mongoose');

const arrayEscapadas = [
    
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
    const allEscapadas = await Escapada.find()
    if(allEscapadas.length > 0){
        await Escapada.collection.drop()
        console.log('Escapadas borradas')
    }
})
.catch(err => console.error('Error borrando',err))
.then(async() => {
    const escapadasMap = arrayEscapadas.map((escapada) => new Escapada(escapada))
    await Escapada.insertMany(escapadasMap)
    console.log('Escapadas añadidos');
})
.catch(err => console.error('Error insertando',err))
.finally(() => mongoose.disconnect());
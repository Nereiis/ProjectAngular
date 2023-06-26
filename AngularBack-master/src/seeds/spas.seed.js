const Spa = require ('../api/models/spa.model')
const mongoose = require('mongoose');

const arraySpas = [
    
    {
        "Nombre": "ESPA Life at Corinthia",
        "Ubicacion": "Whitehall Pl, London SW1A 2BD, Reino Unido",
        "Precio": 335,
        "Descripcion": "Si solo tienes una tarde para disfrutar de Londres y quieres hacerlo a gran escala, empieza la visita por Westminster. Verás los recargados edificios de las Casas del Parlamento y la Abadía de Westminster, uno al lado del otro, en una esquina de Parliament Square. Un corto paseo por The Mall te conducirá hasta el Palacio de Buckingham. Continuando un poco más, llegarás a Trafalgar Square y la columna de Nelson. Junto a esta fascinante arquitectura, en la zona también destacan las maravillas de la Madre Naturaleza y las exquisitas dotes de los jardineros ingleses, con St. James’ Park (del que se puede decir que es el parque más bonito de Londres), el amplio Green Park o los paseos peatonales bordeados de árboles que discurren al lado del río. Más allá de estos lugares emblemáticos y de los espléndidos espacios naturales, encontrarás una zona residencial con tranquilas plazas y pubs tradicionales que te ofrecerá una experiencia más sosegada de este enclave del poder mundial en el corazón de Londres.",
        "Caratula": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/89/6e/7c/jacuzzi-at-espa-life.jpg?w=1100&h=500&s=1",
        "Imagen": "https://images.squarespace-cdn.com/content/v1/5be5690389c172e68f8593b9/6046c58e-7e75-4e9a-b557-bc873d63f82e/Corinthia_London_Spa_Sauna_Jack_Hardy_2019.jpg?format=1500w",
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
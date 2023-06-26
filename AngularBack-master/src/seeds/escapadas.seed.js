const Escapada = require('../api/models/escapada.model');

const mongoose = require('mongoose');

const arrayEscapadas = [
    
    {
        "Nombre": "Escapada a Oporto",
        "Ubicacion": "Oporto, Portugal",
        "Precio": 355,
        "Descripcion": "Disfruta de una escapada a Oporto y el norte de Portugal y descubre las joyas de la región más poblada de nuestro país vecino.",
        "Caratula": "https://www.viajeselcorteingles.es/imagen/pt/dest/europa/portugal/oporto/img_dest_portugal_oporto_621x167_01.jpg",
        "Imagen": "https://www.viajeselcorteingles.es/imagen/pt/dest/europa/portugal/oporto/img_dest_portugal_oporto_621x167_01.jpg",
        "Actividades": { 
            "Itinerario": { 
                "Dia1": "CIUDAD DE ORIGEN - NORTE DE PORTUGAL",
                "Dia2": "OPORTO / CRUCERO POR EL DOURO",
                "Dia3": "AMARANTE / PENAFIEL",
                "Dia4": "DÍA LIBRE (EXCURSIÓN OPCIONAL A BRAGA Y GUIMARÃES)",
                "Dia5": "AVEIRO / OVAR",
                "Dia6": "NORTE DE PORTUGAL - CIUDAD DE ORIGEN"
            }
        }
    },
    {
        "Nombre": "Puente de octubre en el Sur de Islandia",
        "Ubicacion": "Islandia",
        "Precio": 1748,
        "Descripcion": "Islandia es uno de los países más alucinantes que se pueden visitar en el mundo. Un lugar donde sientes la conexión con la naturaleza. Visitarás la tierra más joven del mundo, la cual se encuentra todavía en formación.",
        "Caratula": "https://www.viajeselcorteingles.es/imagen/pt/dest/europa/islandia/img_dest_islandia_fjadrargljufur_621x167_01.jpg",
        "Imagen": "https://www.viajeselcorteingles.es/imagen/pt/dest/europa/islandia/img_dest_islandia_fjadrargljufur_621x167_01.jpg",
        "Actividades": { 
            "Itinerario": { 
                "Dia1": "España - Keflavik",
                "Dia2": "Keflavik - Costa sur - Hveragerdi",
                "Dia3": "Hveragerdi - Círculo Dorado - Reikjavik",
                "Dia4": "Reikjavik - España"
            }
        }
    },
    {
        "Nombre": "Tu verano en Tenerife sur",
        "Ubicacion": "Tenerife, España",
        "Precio": 997,
        "Descripcion": "Recorre la isla de Tenerife, podrás recorrer la isla de norte a sur desde el impactante Teide, pasea por las calles del Puerto de la cruz, al norte de la isla, hasta la Playa de las Américas o costa Adeje, en el sur, donde se encuentra uno de los mejores parques acuáticos del mundo el Siam Park.",
        "Caratula": "https://www.viajeselcorteingles.es/imagen/pt/dest/europa/espana/canarias/tenerife/adeje/img_dest_espana_tenerife_adeje_621x167.jpg",
        "Imagen": "https://www.viajeselcorteingles.es/imagen/pt/dest/europa/espana/canarias/tenerife/adeje/img_dest_espana_tenerife_adeje_621x167.jpg",
        "Actividades": { 
            "Itinerario": { 
                "Dia1": "CIUDAD DE ORIGEN - TENERIFE",
                "Dia2": "TENERIFE",
                "Dia3": "TENERIFE",
                "Dia4": "TENERIFE",
                "Dia5": "TENERIFE",
                "Dia6": "TENERIFE",
                "Dia7": "TENERIFE",
                "Dia8": "TENERIFE - CIUDAD DE ORIGEN"
            }
        }
    },
    {
        "Nombre": "Tu verano en Gran Canaria",
        "Ubicacion": "Gran Canaria, España",
        "Precio": 815,
        "Descripcion": "Pasa tu verano en Gran Canaria, una tierra con múltiples caras: calas y playas de arena blanca y lava negra, impresionantes acantilados, magníficas montañas, asombrosos cráteres, frondosos barrancos llenos de vegetación y reservas naturales.",
        "Caratula": "https://www.viajeselcorteingles.es/imagen/dest/europa/espana/canarias/gran_canaria/img_dest_espana_gran_canaria_puerto_de_mogan_621x167_01.jpg",
        "Imagen": "https://www.viajeselcorteingles.es/imagen/dest/europa/espana/canarias/gran_canaria/img_dest_espana_gran_canaria_puerto_de_mogan_621x167_01.jpg",
        "Actividades": { 
            "Itinerario": { 
                "Dia1": "CIUDAD DE ORIGEN - GRAN CANARIA",
                "Dia2": "GRAN CANARIA",
                "Dia3": "GRAN CANARIA",
                "Dia4": "GRAN CANARIA",
                "Dia5": "GRAN CANARIA",
                "Dia6": "GRAN CANARIA",
                "Dia7": "GRAN CANARIA",
                "Dia8": "GRAN CANARIA - CIUDAD DE ORIGEN"
            }
        }
    },
    {
        "Nombre": "Preciosa Granada",
        "Ubicacion": "Granada, España",
        "Precio": 189,
        "Descripcion": "Los gobernantes musulmanes de Granada adoraban y adornaban esta capital provincial. La majestuosa Alhambra se cierne contra de Sierra Nevada, más soleadas pistas de esquí de Europa y de la refrescante costa también está cerca. La Alhambra, rojo en árabe, es un monumento islámico de la fama universal de grandeza sin colores, construida sobre una colina cubierta de espléndidos bosques y jardines.",
        "Caratula": "https://cdn5.travelconline.com/unsafe/fit-in/2000x0/filters:quality(75):format(webp)/https%3A%2F%2Fstatic.travelconline.com%2Fimagenes%2FgZhU1mWRnSal-v2yRi8DKiVcGnxR.jpeg",
        "Imagen": "https://cdn5.travelconline.com/unsafe/fit-in/2000x0/filters:quality(75):format(webp)/https%3A%2F%2Fstatic.travelconline.com%2Fimagenes%2FgZhU1mWRnSal-v2yRi8DKiVcGnxR.jpeg",
        "Actividades": { 
            "Itinerario": { 
                "Dia1": "CIUDAD DE ORIGEN - GRANADA",
                "Dia2": "ALHAMBRA AL COMPLETO",
                "Dia3": "GRANADA - CIUDAD DE ORIGEN"
            }
        }
    },
    {
        "Nombre": "La Sagrada Familia, el templo de Gaudí",
        "Ubicacion": "Barcelona, España",
        "Precio": 221,
        "Descripcion": "La capital de Catalunya y la segunda ciudad más grande de España, y que rivaliza con Madrid como la capital cultural de España, Barcelona es la ciudad de Antoni Gaudí –y de su obra más famosa, que aún no se ha completado, la Sagrada Familia; rompiendo estereotipos con su estilo ecléctico y vanguardista, la ciudad es muy carismática. Barcelona seduce con su revoltijo de edificios futuristas y calles medievales, cocina creativa y animada vida nocturna.",
        "Caratula": "https://cdn5.travelconline.com/unsafe/fit-in/2000x0/filters:quality(75):format(webp)/https%3A%2F%2Fstatic.travelconline.com%2Fimagenes%2FMod1vqXHnWoN-AYtNKoQWZBskxWu.jpeg",
        "Imagen": "https://cdn5.travelconline.com/unsafe/fit-in/2000x0/filters:quality(75):format(webp)/https%3A%2F%2Fstatic.travelconline.com%2Fimagenes%2FMod1vqXHnWoN-AYtNKoQWZBskxWu.jpeg",
        "Actividades": { 
            "Itinerario": { 
                "Dia1": "CIUDAD DE ORIGEN - BARCELONA",
                "Dia2": "VISITA LA SAGRADA FAMILIA",
                "Dia3": "BARCELONA - CIUDAD DE ORIGEN"
            }
        }
    },
    {
        "Nombre": "Valencia con Ciudad de las Artes y las Ciencias",
        "Ubicacion": "Valencia, España",
        "Precio": 98,
        "Descripcion": "Valencia luce sus huertas, huertos de árboles frutales cítricos, que florecen a pesar de las condiciones áridas. Aquí los visitantes encontrarán innumerables fuentes y homenajes a la vegetación y a los jardines. Esta capital de provincia, la tercera ciudad más grande de España, también ofrece una gran variedad de museos y monumentos y edificios antiguos, todos con un distintivo sabor morisco y náutico.",
        "Caratula": "https://cdn5.travelconline.com/unsafe/fit-in/2000x0/filters:quality(75):format(webp)/https%3A%2F%2Fstatic.travelconline.com%2Fimagenes%2Fvvc7fND4f2Qe-oCimDwzadooWwOu.jpeg",
        "Imagen": "https://cdn5.travelconline.com/unsafe/fit-in/2000x0/filters:quality(75):format(webp)/https%3A%2F%2Fstatic.travelconline.com%2Fimagenes%2Fvvc7fND4f2Qe-oCimDwzadooWwOu.jpeg",
        "Actividades": { 
            "Itinerario": { 
                "Dia1": "CIUDAD DE ORIGEN - VALENCIA",
                "Dia2": "OCEANOGRÀFIC",
                "Dia3": "VALENCIA - CIUDAD DE ORIGEN"
            }
        }
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
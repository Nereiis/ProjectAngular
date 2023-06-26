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
                "Dia1": "Entusiasmo por la vida: Deje que las tensiones y el estrés de la vida desaparezcan y desbloquee su entusiasmo por la vida.",
                "Dia2": "Serenidad de verano en ESPA Life: Despierta tus sentidos y abraza la maravillosa energía del verano."
            }}
    },{
        "Nombre": "Sámas Spa, Park Hotel Kenmare",
        "Ubicacion": "",
        "Precio": 485,
        "Descripcion": "SAMAS Spa está dedicado a nutrir la mente, el cuerpo y el espíritu. Está construido para abrir una conexión sincera con las maravillas de la naturaleza que nos rodea. Nos complace presentar los productos Bamford en Irlanda. Creados por Carole Bamford, los tratamientos creados individualmente utilizan productos especialmente formulados de las gamas de cuidado para el cuerpo y la piel de Bamford elaborados con ingredientes naturales certificados orgánicamente al más alto nivel. En SAMAS creemos que tomarse un tiempo para relajarse, pensar, desconectar y cuidarse no es un lujo, es una necesidad en el mundo frenético de hoy para cuidarse. ",
        "Caratula": "https://d1m7xnn75ypr6t.cloudfront.net/images/media/7CC59269-E8B4-429D-AD88CFE6E86D1A97/?w=900&h=600",
        "Imagen": "https://www.oppermann.ie/wp-content/uploads/2014/02/Samas-Spa5.jpg",
        "Actividades": { 
            "Itinerario": { 
                "Dia1": " La Suite Termal: Previo a su Tratamiento elegido disfrute de los beneficios terapéuticos del agua y el calor. Sumérjase en nuestras suites exclusivas para hombres y mujeres con sauna/laconium, salas de vapor aromático, fuente de hielo, duchas de lluvia tropical y una piscina de vitalidad climatizada al aire libre impresionante con su borde infinito y vistas a la bahía de Kenmare.",
                "Dia2": "Tratamiento Holístico: En SÁMAS ofrecemos una variedad de Tratamientos y Rituales indulgentes para que usted elija. Puede seleccionar su Tratamiento al momento de la reserva, o puede preferir simplemente reservar Hora y al llegar elegir entre cualquiera de nuestros 8 Tratamientos Corporales “Esencia de SÁMAS” y Faciales Bamford."
            }}
    },{
        "Nombre": "The YEATMAN, Oporto",
        "Ubicacion": "Rua do Choupelo, 4400-088 Vila Nova de Gaia, Portugal",
        "Precio": 485,
        "Descripcion": "El The Yeatman es un hotel vínico exclusivo, con preciosas vistas al río Douro y al centro histórico de la ciudad de Oporto, Patrimonio de la Humanidad. Miembro de la prestigiosa cadena Relais & Châteaux y galardonado con dos estrellas Michelin, el The Yeatman es un distintivo punto de referencia en el panorama mundial de hoteles de lujo.",
        "Caratula": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/94/94/c4/the-yeatman.jpg?w=700&h=-1&s=1",
        "Imagen": "https://www.winetourismportugal.com/fotos/produtos/the_yeatman_hotel1_90429367555a8d3d109391_1.jpg",
        "Actividades": { 
            "Itinerario": { 
                "Dia1": "Durante su estancia en Hotel The Yeatman, los huéspedes pueden visitar Igreja de Santa Marinha (0,3 km) y Convento Corpus Christi (0,5 km), que son algunas de las principales atracciones de Vila Nova de Gaia.",
                "Dia2": "Las habitaciones de The Yeatman ofrecen televisor de pantalla plana, minibar y aire acondicionado, y los huéspedes pueden estar conectados con wifi gratuito. Además, durante la estancia en The Yeatman los huéspedes tienen acceso a conserje, servicio de habitaciones y terraza en la azotea. También puedes disfrutar de piscina y desayuno. ¿Necesitas un sitio donde aparcar? Hay aparcamiento disponible en The Yeatman Hotel. Si buscas unos restaurantes de comida asiática, considera probar Sumo Cais, que no se encuentra lejos de The Yeatman Hotel."
            }}
    }, {
        "Nombre": "Lefay Resort and Spa Lago di Garda",
        "Ubicacion": "Via Angelo Feltrinelli, 136, 25084 Gargnano BS, Italia",
        "Precio": 507,
        "Descripcion": "Un Oasis de paz, Bienestar y Longevidad. El extraordinario encanto de uno de los Leading Hotels del mundo con tan solo 29 suites, radica en el maravilloso paisaje de Merano. Ofrecemos arte culinario para todos los sentidos, tratamientos de bienestar y belleza de excelente calidad y un equipo médico siempre a tu disposición.",
        "Caratula": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/376111781.jpg?k=ced54aa7c154854deb084a0f1c0d2f2e21fc928739a1b4ef1bab6a435639e4af&o=&hp=1",
        "Imagen": "https://lagodigarda.lefayresorts.com/wp-content/uploads/2021/03/offerte-top-high-1-1599x1066.jpg",
        "Actividades": { 
            "Itinerario": { 
                "Dia1": "El concepto VE. Juntos, hacia nuevos horizontes de bienestar y belleza. El viaje hacia una mejor calidad de vida pasa por una estadía fabulosa en Villa Edén. Nuestra misión es garantizar la excelencia desde todos los puntos de vista: queda patente en la eficacia de las rutas de tratamientos de salud y belleza, en los excepcionales servicios ofrecidos y en la cálida acogida en un entorno lujoso y encantador.",
                "Dia2": "Eden's Health - El centro médico de longevidad. Cuerpo. Mente. Armonía. En el Centro Médico de la Longevidad perseguimos la consecución de un equilibrio ideal entre el cuerpo, la mente y el espíritu, respetando la naturaleza que nos rodea para restablecer una relación simbiótica porque la auténtica armonía pasa también por la estrecha conexión con el entorno en el que nos encontramos. vivir."
            }}
    }, {
        "Nombre": "Lauserhof Tegernsee",
        "Ubicacion": "Gut Steinberg 1-4, 83666 Waakirchen, Alemania",
        "Precio": 760,
        "Descripcion": "TU REMANSO DE PAZ EN EL LAGO TEGERNSEE. Naturaleza impresionante combinada con una arquitectura impresionante: eso es Lanserhof Tegernsee. El balneario más moderno de Europa le ofrece tratamientos holísticos para la salud y el bienestar en 21.000 metros cuadrados. En definitiva: el remanso de paz para tu mente y tu cuerpo. ",
        "Caratula": "https://lanserhof.com/wp-content/uploads/2021/04/lanserhof_lans_outdoor_pool_night_alexander_haiden.jpg",
        "Imagen": "https://lanserhof.com/wp-content/uploads/2022/10/unnamed-file-scaled.jpg",
        "Actividades": { 
            "Itinerario": { 
                "Dia1": "FITOTERAPIA. La fitoterapia utiliza medicamentos de eficacia demostrada elaborados a partir de extractos de plantas. En Lanserhof utilizamos plantas enteras o partes de plantas (flores, hojas, frutos, semillas, tallos, cortezas y raíces) en nuestros tés o tinturas, como aditivos para el baño y en ungüentos o cremas.",
                "Dia2": "MEDICINA ENERGÉTICA Y DE LA INFORMACIÓN. En términos de medicina energética, una persona está sana cuando existe un equilibrio entre el cuerpo y la mente. La medicina energética o medicina de la información se basa en los sistemas médicos tradicionales de India y China. Todos estos sistemas están unidos por el supuesto básico de que en una persona sana la energía vital, el “Qi”, fluye en armonía. Sin embargo, especialmente con las crecientes demandas de la vida moderna y acelerada, este equilibrio a menudo se altera."
            }}
    }, {
        "Nombre": "",
        "Ubicacion": "Bad Blumau 100, Bad Blumau 8283 Austria",
        "Precio": 210,
        "Descripcion": "Estamos encantados de darle la bienvenida en Rogner Bad BlumauLa calidad es nuestro activo más importante. Los máximos estándares de higiene y la responsabilidad social con los empleados, el medio ambiente y la sociedad tienen la máxima prioridad en Rogner Bad Blumau en todo momento.",
        "Caratula": "https://static.designboom.com/wp-content/uploads/2015/01/rogner-bad-blumau-spa-hotel-friedensreich-hundertwasser-austria-designboom-X500.jpg",
        "Imagen": "https://reiseschreibe.de/wp-content/uploads/A_Blumau_Rogner-Bad_1_credits_Hilke-Maunder.jpg",
        "Actividades": { 
            "Itinerario": { 
                "Dia1": "Experiencia para sentirse bien. Masaje corporal completo con sellos de hierbas · Masaje facial con aloe vera · Envoltura corporal Bad Blumau con sal, barro y agua curativa Vulkania® · 1 botella de Rogner Bad Blumau SPArkling Edition",
                "Dia2": "Contigo a mi ladopara 2 personas. Masaje antiestrés de cabeza, hombros y cuello · Masaje facial con piedras basálticas Envoltura corporal Bad Blumau con sal, barro y agua curativa Vulkania® · 1 botella de Rogner Bad Blumau SPArkling Edition"
            }}
    }, {
        "Nombre": "Grand Resort Bad Ragaz",
        "Ubicacion": "Bernhard-Simonstrasse 20, 7310 Bad Ragaz, Suiza",
        "Precio": 580,
        "Descripcion": "La verdadera fuente de salud y vitalidad. Desde 1242. Creamos un lugar de santuario donde puedes disfrutar de paz, relajación y una profunda regeneración. Para renovar la fuerza y ​​la vitalidad. Por una vida saludable.",
        "Caratula": "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/406581506.jpg?k=e77df15f02fec10477d7e7153652cf10fbe9a32a5028c2bc100a56e7ffaef08e&o=",
        "Imagen": "https://media.cntraveller.com/photos/611bf056042ccafe9a9ae58e/16:9/w_2992,h_1683,c_limit/180329_tamina_outdoor2-grand.jpg",
        "Actividades": { 
            "Itinerario": { 
                "Dia1": "SUMÉRGETE Y DISFRUTA. Llega y siéntete realmente bien. Con este paquete no tienes que hacer nada fuera de lo común. Bienestar, excelente cocina y actividades: nosotros nos encargamos de todo. Para que puedas sumergirte en un mundo de paz y relajación. Un mundo de naturaleza, disfrute e inspiración. Para renovar la fuerza y ​​la vitalidad.",
                "Dia2": "RELAJACIÓN PURA. Disfrute de dos noches en nuestro resort de lujo y benefíciese de una oferta integral de bienestar, que incluye un masaje aromático relajante mental y un tratamiento facial Swiss Radiance en el spa termal. Ya sea yoga, meditación o simplemente pura relajación en nuestras aguas termales, con este paquete encontrará la verdadera relajación y nuevas fuerzas."
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
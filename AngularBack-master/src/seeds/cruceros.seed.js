const Crucero = require ('../api/models/crucero.model');
const mongoose = require('mongoose');

const arrayCruceros = [
    
    {
        "Nombre": "La música del mar",
        "Ubicacion": "Costa Toscana",
        "Precio": 259,
        "Descripcion": "Descubre el nuevo Costa Toscana, el nuevo buque insignia de Costa Cruceros. Propulsado por gas natural licuado, el combustible fósil más limpio del mundo, lo convierte en un aliado del medio ambiente.Un fabuloso barco, que rinde homenaje a la belleza de Italia y en el que podrás disfrutar de un ambiente español para que te sientas como en casa y sean unas vacaciones hechas a tu medida: espectáculos en español, horarios y sabores de casa, tripulación de habla hispana...Con espectáculos y actuaciones de artistas internacionales, una excelente gastronomía y no menos del 75% de camarotes con balcón, el Costa Toscana no te dejará indiferente.",
        "Caratula": "https://cdn.logitravel.com/wsimgresize/resize/crop/160/165/cdn.logitravel.com/contenidosShared/cruises/ship/968/generic.jpg?jpegQuality=85",
        "Imagen": "https://cdn.logitravel.com/wsimgresize/resize/crop/970/300/cdn.logitravel.com/contenidosShared/cruises/zone/1/generic.jpg?jpegQuality=85",
        "Actividades": { 
            "Itinerario": { 
                "Dia1": "Visita Cagliari (Cerdeña): Fundada por los fenicios, Cagliari es uno de los puertos más importantes de Cerdeña, situado al Sur de la Isla. Un lugar en el que perderse y olvidarse del bullicio de las capitales. Es famosa además por contar con una de las playas urbanas más extensas de Italia, La playa de ll Poetto, de unos 13 km. Te sorprenderá su similitud con España en muchos aspectos tales como las costumbres expresiones e incluso la gastronomía, pues Cerdeña formó parte de España durante 400 años.",
                "Dia2": "Visita Napoles (Pompeya): Es la tercera ciudad más grande de Italia con más de un millón de habitantes. Gran metrópoli con importante tradición artística, cultural e histórica que se percibe recorriendo sus entramadas calles. Muy cerca de la ciudad nos encontramos con la antigua Pompeya, Sepultada por el Vesubio; uno de los pocos volcanes europeos todavía en activo y al que se puede acceder hasta el mismo cráter. En el Golfo de Nápoles a pocas millas se encuentra la isla de Capri, lugar escogido por muchas personalidades para pasar sus vacaciones. "
            }}
    },
    {
        "Nombre": "De la Provenza al Coliseo",
        "Ubicacion": "MSC Magnifica",
        "Precio": 569,
        "Descripcion": "El buque MSC Magnifica tiene capacidad para transportar a 2500 pasajeros y la mayoría pueden disfrutar del lujo de un camarote con vistas al mar y con balcón. Los afortunados pasajeros de MSC Magnifica reciben los cuidados expertos de una tripulación de 1000 efectivos, disfrutando del mejor estilo moderno italiano mientras se embarcan en su viaje elegido.Las opciones recreativas a bordo de MSC Magnifica son infinitas. Toma el sol en el solárium o elige entre 3 piscinas, una con el ingenioso 'Magrodome' - gracias al techo retráctil podrás disfrutar esta piscina durante el invierno. También hay espacios para los aficionados al tenis o al baloncesto, eso por no hablar de quienes disfrutan de salir a correr.MSC Magnifica cuenta con todos los restaurantes y servicios de ocio que puedas esperar de un buque de lujo superior y mucho más. Con una selección de 5 restaurantes, numerosos bares, un cibercafé y salón de puros —sin olvidar el lujoso teatro de 1200 butacas, el cine, el casino y la discoteca— MSC Magnifica hace honor a su nombre italiano - ¡Es magnífico!",
        "Caratula": "https://cdn.logitravel.com/wsimgresize/resize/crop/160/165/cdn.logitravel.com/contenidosShared/cruises/ship/197/generic.jpg?jpegQuality=85",
        "Imagen": "https://cdn.logitravel.com/wsimgresize/resize/crop/970/300/cdn.logitravel.com/contenidosShared/cruises/zone/1/generic.jpg?jpegQuality=85",
        "Actividades": { 
            "Itinerario": { 
                "Dia1": "Vista Roma: Bienvenido a Civitavecchia! El puerto de cruceros y ferries, y la principal conexión marítima del centro de Italia. Desde este puerto podrás visitar la gran ciudad de Roma. Conocida como la 'ciudad eterna' tiene grandes obras escultóricas, arquitectónicas y pictóricas como el Coliseo, monumento más importante de la Antigua Roma, era utilizado para espectáculos públicos. No te puedes perder la Fontana de Trevi y pedir un deseo mientras tiras una moneda. Continúa caminando en dirección al Panteón, uno de los mejores monumentos conservados de la antigüedad, la Piazza Navona y la Ciudad del Vaticano. Da un paseo por la Plaza de España y descansa en las escaleras de Trinita dei Monti antes de dirigirte  a Via Condotti, gran avenida repleta de tiendas.    ",
                "Dia2": "Visita Genova: También conocida como La magnifíca por su atracción misteriosa, está consagrada al mar pero dedicada a la tierra. Al medio de las casas bien cargadas del casco viejo que fecha de la Edad Media y que se extiende entre el puerto, la calle Garibaldi y la plaza De Ferrari, se encuentran numerosos edificios. El símbolo de Génova es la Lanterna, el faro el más antiguo todavía en actividad: según la leyenda, si su luz se apagaba de repente, llevaria 5 años y 5 meses de desgracia a la ciudad. Es prestigiosa la gastronomía de Génova, muy variada, que proviene más de la experiencia de los campesinos que de la vida maritima. Se recomienda visitar los palacios de Piazza de Ferrari: Palacio Dúchale, sede del Dux (primer magistrado del estado genovés) del siglo XIII al siglo XVIII, el prestigioso Teatro Carlo Felice, la catedral de San Lorenzo .... Y el acuario construido bajo el proyecto del arquitecto Renzo Piano, en sus interiores se encuentran millares de especies marinas y tipos de vegetación distintas. Desde Génova también se puede visitar Portofino, un destino muy recomendable."
            }}
    },
    {
        "Nombre": "Historia y belleza natural",
        "Ubicacion": "Costa Diaderma",
        "Precio": 499,
        "Descripcion": "Descubre todo lo mejor de Italia a bordo de la nueva 'Regina del Mediterraneo'.El Costa Diadema ofrece nuevos espacios y una nueva forma de vivir el crucero: desde la gastronomía hasta la hospitalidad, pasando por el diseño y el entretenimiento. En la terraza del puente 5, con sus más de 500 m de longitud y sus numerosos bares y restaurantes, podrás sumergirte en el alegre ambiente veraniego de una típica localidad italiana.En 2023 navegará por el Mediterráneo desde Valencia con auténtico ambiente español a bordo para que sientas como en casa. Espectáculos en Español, horarios y sabores de casa y tripulación de habla hispana.",
        "Caratula": "https://cdn.logitravel.com/wsimgresize/resize/crop/160/165/cdn.logitravel.com/contenidosShared/cruises/ship/660/generic.jpg?jpegQuality=85",
        "Imagen": "https://cdn.logitravel.com/microsites/logicms/filer_public/ec/17/ec17d33e-abad-4d5a-ab77-a4b7b490b603/costa_diadema_ii.jpg?jpegQuality=80",
        "Actividades": { 
            "Itinerario": { 
                "Dia1": "Visita Marsella: Marsella, ciudad de contrastes, de riqueza y de decadencia, de mar y de monte, todo esto y mucho más es Marsella. El emblemático Puerto Viejo, corazón de la ciudad, es el mayor monumento sin duda. La parte alta, las playas y las islas, y las grandes avenidas decimonónicas son otros de los atractivos más destacados. Marsella goza de varias joyas arquitectónicas como son la Catedral, la Abadía de San Víctor de Marsella, el Palais Longchamp (Museo de Bellas Artes), la basílica de Notre-Dame de la Garde o el Castillo de If, lugares que no debemos dejar de visitar.",
                "Dia2": "Visita Corcega: Situada en la Costa Azul, es la capital de Córcega y ciudad en la que nació Napoleón Bonaparte. En Córcega podrás disfrutar de un hábitat especial, porque cuenta con un clima de agradables temperaturas todo el año y una naturaleza virgen, grandes espacios naturales y extensas playas. La Gastronomía exquisita, es fruto de sus recursos naturales."
            }}
    },
    {
        "Nombre": "Un viaje hacia el color azul",
        "Ubicacion": "Costa Esmeralda",
        "Precio": 599,
        "Descripcion": "8 días de crucero a bordo del Costa Smeralda. Salida desde el puerto de Barcelona, visitando Ibiza, Palermo (Sicilia), Civitavecchia (Roma), Savona (Italia), Marsella (Francia) y desembarque en el puerto de Barcelona.",
        "Caratula": "https://cdn.logitravel.com/wsimgresize/resize/crop/160/165/cdn.logitravel.com/contenidosShared/cruises/ship/895/generic.jpg?jpegQuality=85",
        "Imagen": "https://cdn.logitravel.com/microsites/logicms/filer_public/d4/d3/d4d3d3e4-df9a-4c2e-a1a3-e748249df52f/smeralda1_13.jpg?jpegQuality=80",
        "Actividades": { 
            "Itinerario": { 
                "Dia1": "Visita Ibiza: Ibiza es una ciudad extremadamente alegre y tolerante, donde la libertad casi se puede masticar. En sus pintorescas callejuelas encontramos una cantidad extraordinaria de tiendas y puestecillos donde se vende de todo y hasta altas horas de la noche. En sus preciosas y numerosas terrazas se disfrutará de un espectáculo de lo más colorido y variopinto hasta altas horas de la noche. En esta ciudad es fácil disfrutar de la vida, no sólo por la estupenda oferta que se presenta al visitante, sino tambien por el caracter cordial y acogedor de los ibicencos, fantásticos anfitriones que ha sido los que han convertido a Ibiza en aquello por lo que fue famosa durante décadas. Lugares que visitar: El Museo Monográfico del Puig de Molins El mejor museo de Arte Púnico de Europa. El Barrio de la Penya y de la Bomba Este colorido y típico barrio, bajo las murallas de la ciudad, es a su vez escenario de la rutilante vida ibicenca, tanto diurna como nocturna. D'alt Vila El centro histórico de Ibiza, situado en la cumbre de la colina y rodeado por los viejos muros de la ciudad. Presenta una gran cantidad de edificios interesantes por su antigüedad. La Catedral Es de gran interés por su antigüedad. El Museo Arqueológico Expone una colección de piezas que abarcan desde tiempos prehistóricos hasta el s. XV.",
                "Dia2": "Visita Roma: ¡Bienvenido a Civitavecchia! El puerto de cruceros y ferries, y la principal conexión marítima del centro de Italia. Desde este puerto podrás visitar la gran ciudad de Roma. Conocida como la 'ciudad eterna' tiene grandes obras escultóricas, arquitectónicas y pictóricas como el Coliseo, monumento más importante de la Antigua Roma, era utilizado para espectáculos públicos. No te puedes perder la Fontana de Trevi y pedir un deseo mientras tiras una moneda. Continúa caminando en dirección al Panteón, uno de los mejores monumentos conservados de la antigüedad, la Piazza Navona y la Ciudad del Vaticano. Da un paseo por la Plaza de España y descansa en las escaleras de Trinita dei Monti antes de dirigirte  a Via Condotti, gran avenida repleta de tiendas.      "
            }}
    },
    {
        "Nombre": "Culturas y civilizaciones del Mediterraneo",
        "Ubicacion": "MSC Grandiosa",
        "Precio": 629,
        "Descripcion": "8 días de crucero a bordo del MSC Grandiosa. Salida desde el puerto de Barcelona, visitando La Goulette (Túnez), Palermo (Sicilia), Nápoles (Pompeya), Génova (Italia), Marsella (Francia) y desembarque en el puerto de Barcelona.",
        "Caratula": "https://cdn.logitravel.com/wsimgresize/resize/crop/160/165/cdn.logitravel.com/contenidosShared/cruises/ship/870/generic.jpg?jpegQuality=85",
        "Imagen": "https://cdn.logitravel.com/microsites/logicms/filer_public/fb/6e/fb6e2213-892b-4828-97dd-1b40921dc8be/grandiosa_01.jpg?jpegQuality=80",
        "Actividades": { 
            "Itinerario": { 
                "Dia1": "Visita La Goulette: Desde el puerto de La Goulette visitamos el Museo del Bardo, donde comprobaremos la mezcolanza de todas las civilizaciones que han pasado por Túnez y han dejado su legado. Durante nuestra estancia encontraremos típicos pueblos blancos, callejuelas repletas de tiendas y bazares, sin olvidarnos de La Medina, declarada Patrimonio de la Humanidad por la UNESCO. También se puede visitar Sidi Bou Said, un pequeño pueblo que destaca por estar pintado todo en blanco y celeste.",
                "Dia2": "Visita Genova: También conocida como La magnifíca por su atracción misteriosa, está consagrada al mar pero dedicada a la tierra. Al medio de las casas bien cargadas del casco viejo que fecha de la Edad Media y que se extiende entre el puerto, la calle Garibaldi y la plaza De Ferrari, se encuentran numerosos edificios. El símbolo de Génova es la Lanterna, el faro el más antiguo todavía en actividad: según la leyenda, si su luz se apagaba de repente, llevaria 5 años y 5 meses de desgracia a la ciudad. Es prestigiosa la gastronomía de Génova, muy variada, que proviene más de la experiencia de los campesinos que de la vida maritima. Se recomienda visitar los palacios de Piazza de Ferrari: Palacio Dúchale, sede del Dux (primer magistrado del estado genovés) del siglo XIII al siglo XVIII, el prestigioso Teatro Carlo Felice, la catedral de San Lorenzo .... Y el acuario construido bajo el proyecto del arquitecto Renzo Piano, en sus interiores se encuentran millares de especies marinas y tipos de vegetación distintas. Desde Génova también se puede visitar Portofino, un destino muy recomendable."
            }}
    },
    {
        "Nombre": "Egeo Icónico",
        "Ubicacion": "Celestyal Olympia",
        "Precio": 520,
        "Descripcion": "5 días de crucero a bordo del Celestyal Olympia. Salida desde el puerto de Lavrio (Grecia), visitando Mikonos (Grecia), Kusadasi (Turquía), Patmos (Grecia), Rodas (Grecia), Heraklión (Creta), Santorini (Grecia) y desembarque en el puerto de Lavrio (Grecia).",
        "Caratula": "https://cdn.logitravel.com/wsimgresize/resize/crop/160/165/cdn.logitravel.com/contenidosShared/cruises/ship/642/generic.jpg?jpegQuality=85",
        "Imagen": "https://cdn.logitravel.com/microsites/logicms/filer_public/1b/60/1b60dbee-1cfc-4c5d-9611-680916f54174/olympia_22.jpg?jpegQuality=80",
        "Actividades": { 
            "Itinerario": { 
                "Dia1": "Visita Rodas: Rodas es una isla cosmopolita. Fue uno de los puertos más famosos de la antigüedad, conocido sobre todo por el Coloso, la enorme estatua que daba la bienvenida a sus visitantes y que fue considerada como una de las siete maravillas del Mundo Antiguo. Desde allí se accede a Lindos y su famosa Acrópolis a la que se puede acceder a pie o en burro.",
                "Dia2": "Visita Heraklión (Creta): En la costa norte de la Isla de Creta se encuentra Heraklion y a 6 kms, Knossos, el laberíntico palacio minoico más importante, con sus maravillosas pinturas murales, baños, columnatas y la Villa de Ariadna, que nos harán revivir los mitos de Ariadna, Teseo y el Minotauro."
            }}
    },
    {
        "Nombre": "Islandia y Groenlandia",
        "Ubicacion": "Norwegian Star",
        "Precio": 555,
        "Descripcion": "11 días de crucero a bordo del Norwegian Star. Salida desde el puerto de Reykjavik (Islandia), visitando Djupivogur (Islandia), Akureyri (Islandia), Isafjord (Islandia), Nanortalik (Groenlandia), Paamiut - Frederikshab (Groenlandia), Nuuk (Groenlandia) y desembarque en el puerto de Reykjavik (Islandia).",
        "Caratula": "https://cdn.logitravel.com/wsimgresize/resize/crop/160/165/cdn.logitravel.com/contenidosShared/cruises/ship/83/generic.jpg?jpegQuality=85",
        "Imagen": "https://cdn.logitravel.com/wsimgresize/resize/crop/970/300/cdn.logitravel.com/contenidosShared/cruises/zone/3/generic.jpg?jpegQuality=85",
        "Actividades": { 
            "Itinerario": { 
                "Dia1": "Visita Djupivogur: Djúpivogur, una pequeña localidad pesquera. Su nombre significa «bahía profunda». Djúpivogur se asoma a las aguas del fiordo Berufjörður. Al otro lado del fiordo, el pueblo está custodiado por la montaña Búlandstindur, de forma casi piramidal.",
                "Dia2": "Visita Akureyri: Akureyri es una ciudad en el norte de Islandia. Es el cuarto centro urbano del país, tras Reykjavík, Hafnarfjörður y Kópavogur, con una población de 17.253 habitantes en diciembre de 2007. Situada en el lado oeste del fiordo Eyjafjörður, justo en su base, a las orillas del río Glerá. Está rodeada de montañas, la mayor de ellas Súlur a 1.213 metros sobre el nivel del mar, y Hlíðarfjall a 1.116 metros. Establecida en 1602 como punto de comercio con Dinamarca, no obtuvo el estatuto de ciudad hasta 1786.Fue ya en el siglo XIX cuando la ciudad experimentó un gran desarrollo, en gran parte por el fin de las restricciones monopolistas impuestas por la corona. Poco después de 1840 se convirtió en un importante centro industrial, dividiéndose en dos zonas bien diferencias: los comerciantes residían en la zona sur de Akureyri, mientras que las clases trabajadoras lo hacían en la zona norte. En 1900 la ciudad sufrió nuevos cambios con la creación de la compañía Kaupfélag Eyfirðinga og Akureyrar que trajo gran prosperidad a sus habitantes. Hoy en día, y a pesar de seguir dedicándose al sector industrial, la ciudad ha apostado por la implantación de sectores dedicados a las nuevas tecnologías, así como intentar promover el turismo. Es digno de visitar el jardín botánico Lystigardur Akureyrar. "
            }}
    },
    {
        "Nombre": "Playas de ensueño y sabores griegos",
        "Ubicacion": "Costa Deliziosa",
        "Precio": 799,
        "Descripcion": "8 días de crucero a bordo del Costa Deliziosa. Salida desde el puerto de Venecia (Italia), visitando Katákolon (Olimpia), Mikonos (Grecia), Santorini (Grecia), Bari (Alberobello) y desembarque en el puerto de Venecia (Italia).",
        "Caratula": "https://cdn.logitravel.com/wsimgresize/resize/crop/160/165/cdn.logitravel.com/contenidosShared/cruises/ship/258/generic.jpg?jpegQuality=85",
        "Imagen": "https://cdn.logitravel.com/wsimgresize/resize/crop/970/300/cdn.logitravel.com/contenidosShared/cruises/zone/2/generic.jpg?jpegQuality=85",
        "Actividades": { 
            "Itinerario": { 
                "Dia1": "Visita Katákolon:Este pequeño puerto en la parte occidental del Peloponeso sirve de acceso a la legendaria ciudad de Olimpia, Cuna de los juegos Olímpicos desde la antigüedad. Actualmente y cada 4 años aquí tiene lugar el encendido de la llama Olímpica para después viajar por tierra, mar y aire a la sede eventual de los Juegos Olímpicos modernos. En el recinto arqueológico de Olimpia podremos ver el gimnasio, la palestra y por supuesto el estadio Original.",
                "Dia2": "Visita Santorini: Santorini es una de las joyas de las islas Cycladas, diferente a todas las islas del Egeo, de belleza salvaje y única. Su capital es el pueblo de Thira, quizás el pueblo más bello del Egeo, y su principal puerto el de Acinios. Tiene forma de media luna y en su parte interior, donde antiguamente estaba el gran volcán, existen otra serie de islas más pequeñas, pero muy bellas. Al oeste es escarpada y rocosa, destacando su gran precipicio sobre el mar, mientras que al sur va descendiendo lentamente hasta el mar las playas de arena oscura."
            }}
    },
       
]


mongoose.connect('mongodb+srv://root:root@cluster0.8phs6yk.mongodb.net/MyAPI?retryWrites=true&w=majority')
.then(async () => {
    const allCruceros = await Crucero.find()
    if(allCruceros.length > 0){
        await Crucero.collection.drop()
        console.log('Cruceros borrados')
    }
})
.catch(err => console.error('Error borrando',err))
.then(async() => {
    const crucerosMap = arrayCruceros.map((crucero) => new Crucero(crucero))
    await Crucero.insertMany(crucerosMap)
    console.log('Cruceros añadidos');
})
.catch(err => console.error('Error insertando',err))
.finally(() => mongoose.disconnect());
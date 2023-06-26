const Isla = require ('../api/models/isla.model')
const mongoose = require('mongoose');

const arrayIslas = [
    
    {
        "Nombre": "Gotland",
        "Ubicacion": "Suecia",
        "Precio": 1000,
        "Descripcion": "Gotland es una isla de Suecia situada en el mar Báltico, al este de la península Escandinava y al norte de Polonia. Con 2.994 km², es la mayor isla del país, la mayor isla del Báltico. Gotland también es una de las 21 provincias de Suecia en que se divide el pais. Tiene una única municipalidad (Gotland) y es la provincia menos poblada del país (57273 habitantes en 2007), de los que casi todos residen en la isla de Gotland. La municipalidad y la provincia tienen 3151 km² (3185 km² con lagos), porque hay unas islas pequeñas cerca de la isla de Gotland. La principal población y sede del gobierno de la provincia de Gotland está en la isla, Visby, una antigua ciudad hanseática fundada en el siglo X, y que fue declarada Patrimonio de la Humanidad en 1995.",
        "Caratula": "https://i.pinimg.com/originals/75/8d/c2/758dc2448d858ffbadd8017fe0014280.jpg",
        "Imagen": "https://coleccionistasdeislas.com/wp-content/uploads/2021/07/Portadafarovisby.jpg",
        "Actividades": { 
            "Itinerario": { 
                "Dia1": "Visby: ¿Os planteáis cuáles son las cosas que ver en la isla de Gotland? Entre ellas deberéis incluir, sin duda, Visby, la capital de la isla. Es una ciudad medieval declarada Patrimonio de la Humanidad por la UNESCO, con la muralla más antigua y extensa (casi 4 kilómetros) de Suecia. Descubrir su casco antiguo cogidos de la mano por sus calles adoquinadas, antiguas plazas, catedral de Santa María e iglesias, pintorescas casas y su muralla –desde cuyas torres disfrutaréis de envidiables vistas– es, sin duda, un excelente punto de partida de un viaje inolvidable. Después de caminar por el barrio medieval vale la pena asomarse a los talleres de artesanía y probar alguna delicatessen de la gastronomía típica de la isla, como el sensual Saffranspannkaka, delicioso crep de azafrán con crema y frutos rojos. ¿Más cosas? Imprescindible visitar Almedalen, el gran parque de olmos de la ciudad, y el paseo de la playa (Strandpromenaden), un espectacular sendero de 5 kilómetros que recorre la costa norte de Visby.",
                "Dia2": "Gigantes de piedra: Son formaciones geológicas, como grandes gigantes, que escoltan la isla. Se llaman stacks y las encontraréis sobre todo en las zonas de Langhammars, Gamla Hamn y Digerhuvud, que rodean la isla de Fårö. ¿El mejor lugar para observarlas? En Rauk at Langhammar, allí donde termina la carretera asfaltada."
            }}
    },
    {
        "Nombre": "Gran Canaria",
        "Ubicacion": "España",
        "Precio": 500,
        "Descripcion": "Pasa tu verano en Gran Canaria, una tierra con múltiples caras: calas y playas de arena blanca y lava negra, impresionantes acantilados, magníficas montañas, asombrosos cráteres, frondosos barrancos llenos de vegetación y reservas naturales. La isla de Gran Canaria es mucho más que playas y mar: esta isla redondita esconde un interior lleno de sorpresas, desde pueblos blancos hasta inmensas dunas que te trasladarán al desierto. Descubrir pueblos como Arucas declarada de interés histórico artístico con su iglesia de San Juan Bautista que fue esculpida en piedra y como no hacer una visita a la destilería para degustar su Ron Miel más famoso. Visita también el Roque Nublo una gran formación volcánica, un espectáculo único. No te pierdas estas maravillas de Gran Canaria este verano",
        "Caratula": "https://www.barcelo.com/guia-turismo/wp-content/uploads/2019/12/Que-ver-en-Gran-Canaria_1.jpg",
        "Imagen": "https://cdn.getyourguide.com/img/location/5e5f74ebdec94.jpeg/68.jpg",
        "Actividades": { 
            "Itinerario": { 
                "Dia1": "Las Palmas de Gran Canaria: Es una ciudad y municipio español, capital de la isla de Gran Canaria, de la provincia de Las Palmas y de la comunidad autónoma de Canarias (capitalidad compartida con Santa Cruz de Tenerife). Con una población de 381 223 habitantes en 2020​, es la ciudad más poblada de Canarias y la novena de toda España. ",
                "Dia2": "Maspalomas: Es una localidad turística al sur de Gran Canaria, una de las islas del archipiélago Canario español. Es famosa por sus amplias extensiones de dunas en la costa, que rodean la reserva natural de Dunas de Maspalomas, donde conviven varios ecosistemas, como la laguna de la Charca, los palmerales y las dunas, hábitat de una gran variedad de aves como los chorlitejos, las agachadizas y las garzas. Por su parte, el alto y esbelto faro de Maspalomas lleva en funcionamiento desde finales del siglo XIX."
            }}
    },
    {
        "Nombre": "Islandia",
        "Ubicacion": "Islandia",
        "Precio": 1500,
        "Descripcion": "Islandia es un país insular nórdico que se caracteriza por su espectacular paisaje con volcanes, géiseres, termas y campos de lava. Cuenta con enormes glaciares protegidos en los parques nacionales de Vatnajökull y Snæfellsjökull. La mayoría de la población vive en la capital, Reikiavik, que se abastece de energía geotérmica y alberga el Museo Nacional y el Museo de Saga, que recorren la historia vikinga de Islandia.",
        "Caratula": "https://www.guiadeislandia.es/wp-content/uploads/2015/02/auroras-islandia-kirkjufell.jpg",
        "Imagen": "https://www.gancarczyk.com/wp-content/uploads/2021/11/lodowcowa-laguna-04.jpg",
        "Actividades": { 
            "Itinerario": { 
                "Dia1": "Reikiavik: es la capital del país y su ciudad más grande. Cuenta con el Museo Nacional y el Museo de Saga, que recorren la historia vikinga de Islandia. La impresionante iglesia de concreto Hallgrimskirkja y el domo de vidrio giratorio Perlan ofrecen vistas panorámicas del mar y las colinas circundantes. Un ejemplo de la actividad volcánica de la isla es el balneario geotermal de la laguna Azul, cerca de la villa de Grindavik.",
                "Dia2": "Jökulsárlón: es un lago glaciar que linda con el parque nacional de Vatnajökull, en el sudeste de Islandia. Sus aguas azules y tranquilas están salpicadas de icebergs del contiguo glaciar Breiðamerkurjökull, que forma parte del glaciar Vatnajökull (de mayor tamaño). El lago atraviesa una corta vía fluvial hasta desembocar en el océano Atlántico, dejando a su paso pedazos de hielo en una playa de arena negra. En invierno, la gran cantidad de peces que hay en el lago atrae a cientos de focas."
            }}
    },
    {
        "Nombre": "Creta",
        "Ubicacion": "Grecia",
        "Precio": 450,
        "Descripcion": "Creta es la isla más grande de Grecia y la quinta en tamaño del mar Mediterráneo. El archipiélago cretense conforma una de las trece periferias y una de las siete administraciones descentralizadas de Grecia.",
        "Caratula": "https://www.costacruceros.es/content/dam/costa/costa-magazine/articles-magazine/travel/crete-travel/creta_m.jpg.image.694.390.low.jpg",
        "Imagen": "https://www.kayak.es/news/wp-content/uploads/sites/2/2022/08/DEST_GREECE_CRETE_ELAFONISSI_BEACH_GettyImages-1061691450-3.jpg",
        "Actividades": { 
            "Itinerario": { 
                "Dia1": "La Canea: es una ciudad de la costa noroeste de la isla griega de Creta. Es famosa por su puerto veneciano del siglo XIV, sus calles estrechas y sus restaurantes frente al mar. En la entrada del puerto hay un faro del siglo XVI de influencia veneciana, egipcia y otomana. En el Museo Náutico, ubicado justo enfrente, se exponen maquetas de barcos, objetos navales y fotografías. El antiguo monasterio de San Francisco alberga el Museo Arqueológico de Chania.",
                "Dia2": "Heraclion: es una ciudad portuaria y capital de la isla griega de Creta. Es famosa por el Palacio de Cnosos, situado a las afueras de la ciudad. Este enorme yacimiento arqueológico perteneció hace miles de años a la civilización minoica e incluye frescos y baños. La fortaleza de Koules, del siglo XVI, protege el puerto veneciano de la ciudad. El Museo Arqueológico de Heraclión dispone de una gran colección de arte minoico."
            }}
    },
    {
        "Nombre": "Malta",
        "Ubicacion": "Malta",
        "Precio": 300,
        "Descripcion": "Malta es un archipiélago del Mediterráneo central que se ubica entre Sicilia y la costa de África del Norte. Es una nación conocida por sus sitios históricos relacionados con una sucesión de regímenes incluidos romanos, moros, los Caballeros de San Juan, franceses y británicos. Tiene varias fortalezas, templos megalíticos y el Hipogeo de Ħal Saflieni, un complejo subterráneo de salones y cámaras funerarias que datan de alrededor del año 4000 a. C.",
        "Caratula": "https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2021/05/27/60af62f18eaf3.r_d.1069-758-0.jpeg",
        "Imagen": "https://media.vogue.es/photos/5cc74664fdc8228ef71feb53/16:9/pass/malta_blue_lagoon_4139.jpg",
        "Actividades": { 
            "Itinerario": { 
                "Dia1": "La Valeta: es la pequeña capital de la nación isleña de Malta, situada en el Mediterráneo. La ciudad amurallada se construyó en el siglo XVI en una península por la orden católica de los Caballeros de San Juan. Es famosa por sus museos, palacios e iglesias monumentales. Entre sus lugares de interés de estilo barroco destaca la concatedral de San Juan, cuyo interior opulento alberga una de las obras maestras de Caravaggio.",
                "Dia2": "Blue Lagoon: es uno de los lugares imprescindibles que no pueden perderse en su viaje a Malta. Una vez allí se darán cuenta porqué: es una auténtica postal, un paraíso de bancos de arena blanca y aguas azul turquesa, transparentes, donde darse un baño se convierte en un placer. Se encuentra entre la pequeña isla de Comino y el islote de Cominotto. Una de las actividades preferidas de los turistas es hacer buceo o submarinismo, por la rica vida submarina de la isla, y por la transparencia y la calidez de sus aguas."
            }}
    },
    {
        "Nombre": "Menorca",
        "Ubicacion": "España",
        "Precio": 250,
        "Descripcion": "",
        "Caratula": "https://cdn.cooltra.com/uploads/2021/05/menorca.png",
        "Imagen": "https://www.ecoturismo.com/media/files/501_menorca.jpg",
        "Actividades": { 
            "Itinerario": { 
                "Dia1": "Mahon: es la capital de la isla española de Menorca. Es conocida por sus casas de estilo británico georgiano y por su puerto resguardado. La iglesia de Santa María, con un elaborado órgano del siglo XIX, se encuentra en la céntrica Plaça de la Constitució. Junto a la iglesia, el ayuntamiento tiene una fachada renacentista y un reloj donado por el primer gobernador británico de la isla. El Museo de Menorca exhibe obras de arte y organiza exposiciones sobre la historia de la isla.",
                "Dia2": "Buceo en Reserva Marina del Norte: es un espacio marítimo de una gran biodiversidad. La Reserva se creó en 1999 con el fin de garantizar la conservación de las especies marinas y el desarrollo sostenible de la zona. La reserva tiene una extensión 5.119 ha marinas, la más grande de las Islas Baleares, comprendidas desde la bahía de Fornells hasta el cabo Gros incluyendo la Punta de Morter y el islote de Porros, donde nos sorprenderá la presencia de las cabras que lo habitan."
            }}
    }
       
]


mongoose.connect('mongodb+srv://root:root@cluster0.8phs6yk.mongodb.net/MyAPI?retryWrites=true&w=majority')
.then(async () => {
    const allIslas = await Isla.find()
    if(allIslas.length > 0){
        await Isla.collection.drop()
        console.log('Islas borrados')
    }
})
.catch(err => console.error('Error borrando',err))
.then(async() => {
    const islasMap = arrayIslas.map((isla) => new Isla(isla))
    await Isla.insertMany(islasMap)
    console.log('Islas añadidos');
})
.catch(err => console.error('Error insertando',err))
.finally(() => mongoose.disconnect());
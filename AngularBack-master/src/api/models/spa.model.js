const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const spaSchema = new Schema(
    {
        Nombre: {type: String, require: true},
        Ubicacion: {type: String, required: true},
        Precio: {type: Number, required: true},
        Descripcion: {type:String, required: true},
        Caratula: {type: String},
        Imagen: {type: String, required: true},
        Actividades: {type: {
            Itinerario: {type: {
                Dia1: {type: String},
                Dia2: {type: String}
            }}
        }}
    },{
        timestamps: true
    }
)

const Spa = mongoose.model('spa', spaSchema);

module.exports = Spa;
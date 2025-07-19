const mongoose = require('mongoose')

const tareaSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        requiered: true,
        ref: 'User'

    },
    descripcion:{
        type: String,
        required: [true, 'Porfavor teclea una descripción']

    }
},{
    timestamps: true
})

module.exports = mongoose.model('Tarea', tareaSchema)
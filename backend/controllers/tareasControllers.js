const asyncHandler = require('express-async-handler')
const Tarea = require('../models/tareasModels')

const getTareas = asyncHandler(async (req, res) => {
<<<<<<< HEAD
    const tareas = await Tarea.find({})

    res.status(200).json({tareas})
=======

    const tareas = await Tarea.find({})

    res.status(200).json(tareas)
>>>>>>> 16ce38814bb749aae0199bcb8252fa336d7daa45
})

const createTareas = asyncHandler(async (req, res) => {

    if (!req.body.descripcion) {
        res.status(400)
        throw new Error('Por favor teclea una descripcion')
    }

    const tarea = await Tarea.create({
        descripcion: req.body.descripcion
<<<<<<< HEAD

=======
>>>>>>> 16ce38814bb749aae0199bcb8252fa336d7daa45
    })

    res.status(201).json(tarea)
})

const updateTareas = asyncHandler(async (req, res) => {
<<<<<<< HEAD
    const tarea = await Tarea.findById(req.params.id)

    if(!tarea){
        res.status(404)
        throw new Error('Esa tarea no existe')

    }

    const tareaUpdated = await Tarea.findByIdAndUpdate(req.params.id, req.body, {new: true})
=======

    const tarea = await Tarea.findById(req.params.id)

    if (!tarea) {
        res.status(404)
        throw new Error('Esa tarea no existe')
    }

    const tareaUpdated = await Tarea.findByIdAndUpdate(req.params.id, req.body, { new: true })
>>>>>>> 16ce38814bb749aae0199bcb8252fa336d7daa45

    res.status(200).json(tareaUpdated)
})

const deleteTareas = asyncHandler(async (req, res) => {
<<<<<<< HEAD
    const tarea = await Tarea.findById(req.params.id)

    if(!tarea){
        res.status(404)
        throw new Error('Esa tarea no existe')

=======

    const tarea = await Tarea.findById(req.params.id)

    if (!tarea) {
        res.status(404)
        throw new Error('Esa tarea no existe')
>>>>>>> 16ce38814bb749aae0199bcb8252fa336d7daa45
    }

    await Tarea.deleteOne(tarea)

<<<<<<< HEAD
    res.status(200).json({id: req.params.id})
=======

    res.status(200).json({ id: req.params.id })
>>>>>>> 16ce38814bb749aae0199bcb8252fa336d7daa45
})

module.exports = {
    getTareas,
    createTareas,
    updateTareas,
    deleteTareas
}




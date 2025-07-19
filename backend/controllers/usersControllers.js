const jwt = requiere('jsonwebtoken')
const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')
const User = require('../models/usersModels')

const registrar = asyncHandler( async (red,res) => {
    //Desestructurar el body
    const {nombre, email, password} = req.body
    //Verificar todos los datos
    if (!nombre) {
        res.status(400);
        throw new Error('Por favor, rellena el campo nombre');
    }
    if (!email) {
        res.status(400);
        throw new Error('Por favor, rellena el campo email');
    }
    if (!password) {
        res.status(400);
        throw new Error('Por favor, rellena el campo password');
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //Crear al usuario
    const user = await User.create({
        nombre,
        email,
        password: hashedPassword
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            nombre: user.nombre,
            email: user.email
        })

    }else{
        res.status(400)
        throw new Error('No se pudo crear el usuario')
    }
})

const login = asyncHandler( async(req, res) => {

})

const misDatos = asyncHandler( async(req, res) =>{

})

module.exports = {
    registrar,
    login,
    misDatos
}
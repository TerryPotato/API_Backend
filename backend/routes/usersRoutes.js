const express = require('express')
const router = express.Router()
const { misDatos, login, registrar} = require('../controllers/usersControllers')
const protect = require('../middleware/authMiddleware')

router.get('/datos', protect, misDatos) //Pide un token, ahora esta protegida
router.post('/login', login)
router.post('/', registrar)

module.exports = router
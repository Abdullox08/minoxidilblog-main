const {Router} = require('express')
const router = Router()
const {delivery} = require('../controllers/deliveryController') 
 router.get('/delivery',delivery)
module.exports = router
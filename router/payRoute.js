const {Router} = require('express')
const router = Router()
const {payController} = require('../controllers/payController')
router.get('/pay',payController)

module.exports = router
const  Router = require('express')
const router = new Router()
const UserController = require('../controllers/user.controller')

router.post('/login', UserController.login)
router.post('/logout', UserController.logout)

module.exports = router
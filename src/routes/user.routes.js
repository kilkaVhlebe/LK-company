const  Router = require('express')
const router = new Router()
const UserController = require('../controllers/user.controller')

router.get('/user/login/:login/:password', UserController.login)

module.exports = router
const  Router = require('express')
const router = new Router()
const UserController = require('../controllers/user.controller')

router.get('/user/login/:login/:password', UserController.login)
router.get('/user/getAll', UserController.getAll)
router.post('/user/create', UserController.createUser)
router.put('/user/update', UserController.updateUser)
router.delete('/user/delete', UserController.deleteUser)

module.exports = router
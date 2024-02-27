const  Router = require('express')
const router = new Router()
const UserController = require('../controllers/user.controller')

router.get('/user/login/:login/:password', UserController.login)

module.exports = router

/**
 * Метод авторизации пользователя
 * @route GET /user/login/:login/:password
 * @group Пользователи - функционал авторизации пользователей
 * @param {string} login пользоваетельский логин
 * @param {string} password пользоваетельский пароль
 * @returns {userId} 200 - Вернет пользовательский id
 * @returns {Not found} 404 - ресурс не найден
 */
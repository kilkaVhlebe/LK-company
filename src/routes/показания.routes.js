const  Router = require('express')
const router = new Router()
const ReadingsController = require('../controllers/показания.controller')

router.get('/reading/get/readings/:userId/:contractId', ReadingsController.GetAllReadings)
router.put('/reading/reading_value', ReadingsController.readingValueInput)

module.exports = router

/**
 * Получение списка показаний по точкам учета привязанных к выбранному договору
 * @route GET /reading/get/readings/:userId/:contractId
 * @group Показания - функции для получения и внесения показаний
 * @param {integer} userId , пользоваетельский id
 * @param {integer} contractId , id выбранного договора
 * @returns {информация из таблицы показаний} 200 - Вернет список показаний
 * @returns {Not found} 404 - ресурс не найден
 */

/**
 * Получение значения расхода и обновление показания.
 * @route PUT /reading/reading_value
 * @group Показания - функции для получения и внесения показаний
 * @param {integer} readingId , id показания
 * @param {integer} readingValue , Значение расхода введенное пользоваетелем
 * @returns {информация из таблицы показаний} 200 - Вернет значение readingValue как "Расход"
 * @returns {Not found} 404 - ресурс не найден
 */
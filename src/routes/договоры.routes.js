const  Router = require('express')
const router = new Router()
const ContractController = require('../controllers/договоры.controller')

router.get('/contract/get/:userId', ContractController.GetContract)
router.get('/contract/get/contract_card/:contractId', ContractController.GetContractCard)
router.get('/contract/get/organisation_card/:id', ContractController.GetOrganisationCard)

module.exports = router

/**
 * Получение списка договоров которые привязаны к пользователю/организации
 * @route GET /contract/get/:userId
 * @group Договоры - функционал получения инфориации о договорах и организации которой они принадлежат
 * @param {integer} userId , пользоваетельский id
 * @returns {список договоров} 200 - Вернет список всех договоров организации
 * @returns {Not found} 404 - ресурс не найден
 */

/**
 * Получение каротчки выбранного договора
 * @route GET /contract/get/contract_card/:contractId
 * @group Договоры - функционал получения инфориации о договорах и организации которой они принадлежат
 * @param {integer} contractId , id договора
 * @returns {карточка договора} 200 - Вернет карточку выбранного договора
 * @returns {Not found} 404 - ресурс не найден
 */

/**
 * Получение карточки организации
 * @route GET /contract/get/organisation_card/:id
 * @group Договоры - функционал получения инфориации о договорах и организации которой они принадлежат
 * @param {integer} id , пользоваетельский id
 * @returns {карточка организации} 200 - Вернет карточку организации(в БД организация приравнивается к пользователю)
 * @returns {Not found} 404 - ресурс не найден
 */
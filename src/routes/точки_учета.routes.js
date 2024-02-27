const  Router = require('express')
const router = new Router()
const MeteringPointsController = require('../controllers/точки_учета.controller')

router.get('/metering-points/get/all_points/:contractId', MeteringPointsController.GetAllPoints)
router.get('/metering-points/get/point/:contractId/:pointId', MeteringPointsController.GetOnePoint)
router.get('/metering-points/get/point_parameters/:pointId', MeteringPointsController.GetPointParameters)

module.exports = router

/**
 * Получение всех точек учета привязаных к выбранному договору
 * @route GET /metering-points/get/all_points/:contractId
 * @group Точки учета - функционал получения инфориации о точках учета
 * @param {integer} contractId id договора
 * @returns {список точек учета} 200 - Вернет список всех точек учета привязаных к выбронному договору
 * @returns {Not found} 404 - ресурс не найден
 */

/**
 * Получение конкретной точки учета
 * @route GET /metering-points/get/point/:contractId/:pointId
 * @group Точки учета - функционал получения инфориации о точках учета
 * @param {integer} contractId id договора
 * @param {integer} pointId id точки учета
 * @returns {точка учета} 200 - Вернет конкретную точку учета
 * @returns {Not found} 404 - ресурс не найден
 */

/**
 * Получение параметров конкретной точки учета
 * @route GET /metering-points/get/point_parameters/:pointId
 * @group Точки учета - функционал получения инфориации о точках учета
 * @param {integer} pointId id точки учета
 * @returns {вся информация по точке учета} 200 - Вернет параметры по конкретной точке учета и всю информацию о ней
 * @returns {Not found} 404 - ресурс не найден
 */
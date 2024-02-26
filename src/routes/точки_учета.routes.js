const  Router = require('express')
const router = new Router()
const MeteringPointsController = require('../controllers/точки_учета.controller')

router.get('/metering-points/get/all_points/:contractId', MeteringPointsController.GetAllPoints)
router.get('/metering-points/get/point/:contractId/:pointId', MeteringPointsController.GetOnePoint)
router.get('/metering-points/get/point_parameters/:pointId', MeteringPointsController.GetPointParameters)

module.exports = router
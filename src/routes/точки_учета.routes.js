const  Router = require('express')
const router = new Router()
const MeteringPointsController = require('../controllers/точки_учета.controller')

router.get('/get/all/points/user/:id/:login/:password/:contract_id', MeteringPointsController.GetAllPoints)
router.get('/get/point/user/:id/:login/:password/:contract_id/:point_id', MeteringPointsController.GetOnePoint)
router.get('/get/point/parameters/user/:id/:login/:password/:point_id', MeteringPointsController.GetPointParameters)

module.exports = router
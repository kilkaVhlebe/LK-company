const  Router = require('express')
const router = new Router()
const MeteringPointsController = require('../controllers/точки_учета.controller')

router.get('/get/all/points', MeteringPointsController.GetAllPoints)
router.get('get/point', MeteringPointsController.GetOnePoint)
router.get('get/point/parameters', MeteringPointsController.GetPointParameters)

module.exports = router
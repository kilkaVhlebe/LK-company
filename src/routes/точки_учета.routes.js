const  Router = require('express')
const router = new Router()
const MeteringPointsController = require('../controllers/точки_учета.controller')
const {authenticateToken} = require("../auth/jwtAuth");

router.get('/get/all_points/:id/:login/:password/:contract_id', authenticateToken, (req, res) => MeteringPointsController.GetAllPoints(req, res))
router.get('/get/point/:id/:login/:password/:contract_id/:point_id', authenticateToken, (req, res) => MeteringPointsController.GetOnePoint(req, res))
router.get('/get/point_parameters/:id/:login/:password/:point_id', authenticateToken, (req, res) => MeteringPointsController.GetPointParameters(req, res))

module.exports = router
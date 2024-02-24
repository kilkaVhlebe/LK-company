const  Router = require('express')
const router = new Router()
const ContractController = require('../controllers/договоры.controller')
const {authenticateToken} = require('../auth/jwtAuth')

router.get('/get/contract/:id/:login/:password', authenticateToken, (req, res) => ContractController.GetContract(req, res))
router.get('/get/contract_card/:id/:login/:password/:contract_id', authenticateToken, (req, res) => ContractController.GetContractCard(req, res))
router.get('/get/organisation_card/:id/:login/:password', authenticateToken, (req, res) => ContractController.GetOrganisationCard(req, res))

module.exports = router
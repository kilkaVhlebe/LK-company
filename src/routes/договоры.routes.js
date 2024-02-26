const  Router = require('express')
const router = new Router()
const ContractController = require('../controllers/договоры.controller')

router.get('/contract/get/:userId', ContractController.GetContract)
router.get('/contract/get/contract_card/:contractId', ContractController.GetContractCard)
router.get('/contract/get/organisation_card/:id', ContractController.GetOrganisationCard)

module.exports = router
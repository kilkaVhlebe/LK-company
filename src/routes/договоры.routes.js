const  Router = require('express')
const router = new Router()
const ContractController = require('../controllers/договоры.controller')

router.get('/get/contract/:user_id', ContractController.GetContract)
router.get('/get/contract_card/:contract_id', ContractController.GetContractCard)
router.get('/get/organisation_card/:id', ContractController.GetOrganisationCard)

module.exports = router
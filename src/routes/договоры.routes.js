const  Router = require('express')
const router = new Router()
const ContractController = require('../controllers/договоры.controller')

router.get('/get/contract', ContractController.GetContract)
router.get('/get/contract/card', ContractController.GetContractCard)
router.get('/get/organisation/card', ContractController.GetOrganisationCard)

module.exports = router
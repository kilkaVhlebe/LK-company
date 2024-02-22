const  Router = require('express')
const router = new Router()
const ContractController = require('../controllers/договоры.controller')

router.get('/get/contract/user/:id/:login/:password', ContractController.GetContract)
router.get('/get/contract/card/user/:id/:login/:password', ContractController.GetContractCard)
router.get('/get/organisation/card/user/:id/:login/:password', ContractController.GetOrganisationCard)

module.exports = router
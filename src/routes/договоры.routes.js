const  Router = require('express')
const router = new Router()
const ContractController = require('../controllers/договоры.controller')

router.post('/get/contract', ContractController.GetContract)
router.post('/get/contract/card', ContractController.GetContractCard)

module.exports = router
const db = require('../DatabaseConfiguration/db')
const {UserChecker} = require('../User.Checker')


class ContractsController {

    async GetContract(req, res){
        try{
            const{id, login, password} = req.body
            if (!await UserChecker(id, login, password)) {
                res.status(404).json({message: "User not found or invalid arguments!"})
                return;
            }
            const AllUserContracts = db.query(`SELECT * FROM договоры WHERE user_id = $1;`,[id])
            if(AllUserContracts.rows.length !== 0){
                res.status(200).json(AllUserContracts.rows)
            } else{
                res.status(404).json({message: "You have no contracts!"})
            }
        }catch (error){
            res.status(500).json({message:"Internal server error!"})
            console.error("Get contract error: " + error)
        }
    }

    async GetContractCard(req, res){
        try{
            const{id, login, password} = req.body
            if (!await UserChecker(id, login, password)) {
                res.status(404).json({message: "User not found or invalid arguments!"})
                return;
            }
            const AllUserContractsCards = db.query(`SELECT * FROM карточка_договора WHERE user_id = $1;`,[id])
            if(AllUserContractsCards.rows.length !== 0){
                res.status(200).json(AllUserContractsCards.rows)
            } else{
                res.status(404).json({message: "You have no contracts!"})
            }
        }catch (error){
            res.status(500).json({message:"Internal server error!"})
            console.error("Get contract error: " + error)
        }
    }

}

module.exports = new ContractsController()
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
            const AllUserContracts = await db.query(`SELECT * FROM договоры WHERE users_id = $1;`,[id])
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
            const AllUserContractsCards = await db.query(`SELECT * FROM карточка_договора WHERE user_id = $1;`,[id])
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

    async GetOrganisationCard(req,res){
        try{
            const{id, login, password} = req.body
            if (!await UserChecker(id, login, password)) {
                res.status(404).json({message: "User not found or invalid arguments!"})
                return;
            }
            const OrganisationInfo = await db.query(`SELECT *
                FROM общая_информация
                LEFT JOIN реквизиты_компании ON общая_информация.id = реквизиты_компании.id
                LEFT JOIN расчетный_счет ON общая_информация.id = расчетный_счет.id
                LEFT JOIN контакты ON общая_информация.id = контакты.id
                LEFT JOIN представитель_организации ON общая_информация.id = представитель_организации.id
                WHERE общая_информация.id = $1;
                `, [id])
            if(OrganisationInfo.rows.length !== 0){
                res.status(200).json(OrganisationInfo.rows)
            } else{
                res.status(404).json({message: "Not Found!"})
            }
        } catch (error){
            res.status(500).json({message:"Internal server error!"})
            console.error("Get Organisation card error: " + error)
        }
    }

}

module.exports = new ContractsController()
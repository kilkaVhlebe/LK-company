const db = require('../DatabaseConfiguration/db')
const {UserChecker} = require('../User.Checker')


class ContractsController {

    async GetContract(req, res){
        try{
            const{user_id} = req.params
            const AllUserContracts = await db.query(`SELECT * FROM договоры WHERE users_id = $1;`,[user_id])
            AllUserContracts.rows.length !== 0 ?
                res.status(200).json(AllUserContracts.rows) :
                res.status(404).json({message: "You have no contracts!"})
        }catch (error){
            res.status(500).json({message:"Internal server error!"})
            console.error("Get contract error: " + error)
        }
    }

    async GetContractCard(req, res){
        try{
            const{contract_id} = req.params
            const AllUserContractsCards = await db.query(`SELECT * FROM карточка_договора WHERE номер_договора = $1;`,[contract_id])
            AllUserContractsCards.rows.length !== 0 ?
                res.status(200).json(AllUserContractsCards.rows) :
                res.status(404).json({message: "You have no contracts!"})
        }catch (error){
            res.status(500).json({message:"Internal server error!"})
            console.error("Get contract error: " + error)
        }
    }

    async GetOrganisationCard(req,res){
        try{
            const{id} = req.params
            const OrganisationInfo = await db.query(`SELECT *
                FROM общая_информация
                LEFT JOIN реквизиты_компании ON общая_информация.id = реквизиты_компании.id
                LEFT JOIN расчетный_счет ON общая_информация.id = расчетный_счет.id
                LEFT JOIN контакты ON общая_информация.id = контакты.id
                LEFT JOIN представитель_организации ON общая_информация.id = представитель_организации.id
                WHERE общая_информация.id = $1;
                `, [id])
            OrganisationInfo.rows.length !== 0 ?
                res.status(200).json(OrganisationInfo.rows) :
                res.status(404).json({message: "Not Found!"})
        } catch (error){
            res.status(500).json({message:"Internal server error!"})
            console.error("Get Organisation card error: " + error)
        }
    }

}

module.exports = new ContractsController()
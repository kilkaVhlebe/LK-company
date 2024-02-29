const db = require('../DatabaseConfiguration/db')


class ContractsController {

    async GetContract(req, res){
        try{
            const{userId} = req.params
            const AllUserContracts = await db.query(`SELECT * FROM договоры WHERE users_id = $1;`,[userId])
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
            const{contractId} = req.params
            const AllUserContractsCards = await db.query(`SELECT * FROM карточка_договора WHERE номер_договора = $1;`,[contractId])
            const AllPoints = await db.query(`SELECT * FROM точки_учета WHERE номер_договора = $1;`,[contractId])
            AllUserContractsCards.rows && AllPoints.rows ?
                res.status(200).json({contractCard: AllUserContractsCards.rows[0], points: AllPoints.rows}) :
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
                res.status(200).json(OrganisationInfo.rows[0]) :
                res.status(404).json({message: "Not Found!"})
        } catch (error){
            res.status(500).json({message:"Internal server error!"})
            console.error("Get Organisation card error: " + error)
        }
    }

}

module.exports = new ContractsController()
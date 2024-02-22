const db = require('../DatabaseConfiguration/db')
const {UserChecker} = require('../User.Checker')


class ReadingsController {

    async GetAllReadings(req, res) {
        try {
            const{id, login, password} = req.params
            if (!await UserChecker(id, login, password)) {
                res.status(404).json({message: "User not found or invalid arguments!"})
                return;
            }
            const AllReadings = await db.query(
                `SELECT * FROM точки_учета
                LEFT JOIN показания ON точки_учета.id = показания.id_точки_учета
                WHERE точки_учета.users_id = $1 ORDER BY показания.дата_показания LIMIT 50 OFFSET $2;`,[id, req.params.elementsOffset])
            AllReadings.rows.length !== 0 ?
                res.status(200).json(AllReadings.rows) :
                res.status(404).json({message: "Not Found!"})
        } catch (error) {
            res.status(500).json({message:"Internal server error!"})
            console.error("Get all readings error: " + error)
        }
    }

}

module.exports = new ReadingsController()
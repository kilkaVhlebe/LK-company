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
            const AllReadings = db.query(
                `SELECT * FROM показания
                LEFT JOIN точки_учета ON показания.id_точки_учета = точки_учета.id
                LEFT JOIN общая_информация ON показания.users_id = общая_информация.id WHERE показания.users_id = $1;`,[id])
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
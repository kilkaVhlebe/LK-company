const db = require('../DatabaseConfiguration/db')
const {UserChecker} = require('../User.Checker')


class MeteringPointsController {

    async GetAllPoints(req, res) {
        try {
            const{contract_id} = req.params
            const Points = await db.query(`SELECT * FROM  точки_учета WHERE номер_договора = $1;`,[contract_id])
            Points.rows.length !== 0 ? res.status(200).json(Points.rows) : res.status(404).json({message: "Not Found!"})
        } catch (error) {
            res.status(500).json({message:"Internal server error!"})
            console.error("Get all points error: " + error)
        }
    }

    async GetOnePoint(req, res) {
        try {
            const{contract_id, point_id} = req.params
            const Point = await db.query(`SELECT * FROM  точки_учета WHERE номер_договора = $1 AND id = $2;`,[contract_id, point_id])
            Point.rows.length !== 0 ? res.status(200).json(Point.rows) : res.status(404).json({message: "Not Found!"})
        } catch (error) {
            res.status(500).json({message:"Internal server error!"})
            console.error("Get point error: " + error)
        }
    }

    async GetPointParameters(req,res) {
        try {
            const{point_id} = req.params
            const PointParameters = await db.query(`SELECT * FROM  параметры_ТУ WHERE id_точки_учета = $1;`,[point_id])
            PointParameters.rows.length !== 0 ? res.status(200).json(PointParameters.rows) : res.status(404).json({message: "Not Found!"})
        } catch (error) {
            res.status(500).json({message:"Internal server error!"})
            console.error("Get point parameters error: " + error)
        }
    }
}

module.exports = new MeteringPointsController()
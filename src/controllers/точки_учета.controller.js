const db = require('../DatabaseConfiguration/db')


class MeteringPointsController {

    async GetAllPoints(req, res) {
        try {
            const{contractId} = req.params
            const Points = await db.query(`SELECT * FROM  точки_учета WHERE номер_договора = $1;`,[contractId])
            Points.rows.length !== 0 ? res.status(200).json(Points.rows) : res.status(404).json({message: "Not Found!"})
        } catch (error) {
            res.status(500).json({message:"Internal server error!"})
            console.error("Get all points error: " + error)
        }
    }

    async GetOnePoint(req, res) {
        try {
            const{contractId, pointId} = req.params
            const Point = await db.query(`SELECT * FROM  точки_учета WHERE номер_договора = $1 AND id = $2;`,[contractId, pointId])
            Point.rows.length !== 0 ? res.status(200).json(Point.rows) : res.status(404).json({message: "Not Found!"})
        } catch (error) {
            res.status(500).json({message:"Internal server error!"})
            console.error("Get point error: " + error)
        }
    }

    async GetPointParameters(req,res) {
        try {
            const{pointId} = req.params
            const PointParameters = await db.query(`SELECT * FROM  параметры_ТУ WHERE id_точки_учета = $1;`,[pointId])
            PointParameters.rows.length !== 0 ? res.status(200).json(PointParameters.rows) : res.status(404).json({message: "Not Found!"})
        } catch (error) {
            res.status(500).json({message:"Internal server error!"})
            console.error("Get point parameters error: " + error)
        }
    }
}

module.exports = new MeteringPointsController()
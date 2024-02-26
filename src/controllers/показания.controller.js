const db = require('../DatabaseConfiguration/db')


class ReadingsController {

    async GetAllReadings(req, res) {
        try {
            const{userId,contractId} = req.params
            const readings = await db.query(`
                SELECT * 
                FROM точки_учета AS t
                JOIN показания AS p ON t.id = p.id_точки_учета
                WHERE t.users_id = $1 AND t.номер_договора = $2
                ORDER BY p.дата_показания DESC;
            `, [userId, contractId]);
            readings.rows.length !== 0 ?
                res.status(200).json(readings.rows) :
                res.status(404).json({message: "Not Found!"})
        } catch (error) {
            res.status(500).json({message:"Internal server error!"})
            console.error("Get all readings error: " + error)
        }
    }

    async readingValueInput(req, res) {
        try {
        const {readingId, readingValue} = req.body
        const updatedValue = await db.query(`UPDATE показания SET Расход = $1 WHERE id = $2 RETURNING Расход;`,[readingValue, readingId])
        updatedValue.rows.length !== 0 ?
            res.status(200).json(updatedValue.rows) :
            res.status(404).json({message: "Not Found!"})
        } catch (error) {
            res.status(500).json({message:"Internal server error!"})
            console.error("readingValue input error: " + error)
        }
    }

}

module.exports = new ReadingsController()
const express = require('express')
const dotenv = require('dotenv/config')

const PORT = process.env.PORT || 4200
const app = express()


app.use(express.json());

const userRouter = require('./routes/user.routes');
app.use('/', userRouter)
const contractRouter = require('./routes/договоры.routes')
app.use('/', contractRouter)
const meteringPointsRouter = require('./routes/точки_учета.routes')
app.use('/', meteringPointsRouter)
const readingsRouter = require('./routes/показания.routes')
app.use('/',readingsRouter)

app.listen(PORT, () =>{
    console.log(`Server started on address http://localhost:${PORT}`)
})
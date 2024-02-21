const express = require('express')


const Port = process.env.PORT || 4200
const app = express()


app.use(express.json());

const userRouter = require('./routes/user.routes');
app.use('/', userRouter)
const contractRouter = require('./routes/договоры.routes')
app.use('/', contractRouter)
const meteringPointsRouter = require('./routes/точки_учета.routes')
app.use('/', meteringPointsRouter)
app.listen(Port, () =>{
    console.log("Server started on address http://localhost:4200")
})
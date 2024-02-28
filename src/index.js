const express = require('express')
const dotenv = require('dotenv/config')
const path = require('path')
const swaggerUi = require("swagger-ui-express");
const YAML = require('yamljs')

const PORT = process.env.PORT || 4200
const app = express()

const swaggerDocument = YAML.load(path.join(__dirname, '../docs', 'docs.yaml'));

const allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain)
app.use(express.json());

app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
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
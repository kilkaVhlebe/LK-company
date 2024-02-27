const express = require("express");
const ExpressSwaggerGenerator = require('express-swagger-generator');
const swaggerOptions = require('../config/swigger.options.js');
const jsonToYaml = require('json2yaml');
const fs = require('fs');
const swaggerConverter = require('swagger2openapi');


const expressSwaggerGenerator = ExpressSwaggerGenerator(express());
const swaggerDoc = expressSwaggerGenerator(swaggerOptions(__dirname));

fs.writeFileSync('./docs/docs_swagger2.yaml', jsonToYaml.stringify(swaggerDoc));

swaggerConverter.convertObj(swaggerDoc, {}, (err, options) => {
    if (err) {
        console.error(err);
    } else {
        const output = jsonToYaml.stringify(options.openapi);
        fs.writeFileSync('./docs/docs.yaml', output);
        process.exit(0);
    }
});
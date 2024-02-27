
module.exports = options = (dirname) => {
    return {
        swaggerDefinition: {
            info: {
                description: 'Данный сервис определяет основные пользовательские функции',
                title: 'Личный кабинет ЛК Энергосбыт',
                version: '1.0.0',
                contact: {
                    email: "artempoznakov990@gmail.com"
                }
            },
            host: 'localhost:3000',
            basePath: '/',
            produces: [
                "application/json",
                "application/xml"
            ],
            schemes: ['http', 'https'],
        },
        route: {
            url: '/api/swagger2',
            docs: '/swagger.json',
        },
        basedir: dirname,
        files: ['../src/routes/*.js'],
        apis: ['../src/routes/*.js']
    };
}


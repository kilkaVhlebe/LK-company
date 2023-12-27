create database lk_company;

CREATE TABLE users
(
    id          SERIAL PRIMARY KEY,
    login       VARCHAR(50)  NOT NULL,
    password    VARCHAR(100) NOT NULL,
    avatar      TEXT
);

INSERT INTO users (login, password, avatar) VALUES ('first_user', 1234, '0'); /* Написать скрипт для создания пользователей*/
/*Мои договоры*/
CREATE TABLE договоры
(
    id SERIAL PRIMARY KEY,
    номер               INTEGER,
    тема                VARCHAR(50),
    дата_начала         DATE,
    дата_окончания      DATE,
    расчетчик_ФИО       TEXT,
    расчетчик_телефона  INTEGER,
    договорник_ФИО      TEXT,
    договорник_телефон  INTEGER,
    users_id INTEGER,
    FOREIGN KEY (users_id) REFERENCES users(id)
);

INSERT INTO договоры (номер,тема,дата_начала,дата_окончания,расчетчик_ФИО,расчетчик_телефона,договорник_ФИО_1,договорник_ФИО_2)
VALUES (34643346, 'это тема договора', '2023-12-24','2024-3-24','Иван Иванов Иванович',985,'Иван Иванов Иванович','Иван Иванов Иванович');


/*Карточка организации*/
CREATE TABLE общая_информация
(
id INTEGER UNIQUE REFERENCES users(id),
краткое название    TEXT,
полное название     TEXT,
юридичемкий_адрес   VARCHAR(256),
фактический_адрес   VARCHAR(256)
);

CREATE TABLE реквизиты_компании
(
id INTEGER UNIQUE REFERENCES общая_информация(id),
инн                 INTEGER,
кпп                 INTEGER,
огрн                INTEGER,
окпо                INTEGER,
оконх               INTEGER,
оквэд               INTEGER,
ндс                 INTEGER,
вид_деятельности    VARCHAR(256)
);

CREATE TABLE расчетный_счет
(
id INTEGER UNIQUE REFERENCES общая_информация(id),
расчетный_счет      INTEGER,
бик                 INTEGER,
Банк                VARCHAR(255)
);

CREATE TABLE контакты
(
id INTEGER UNIQUE REFERENCES общая_информация(id),
режим_работы        VARCHAR(5),
телефон             INTEGER,
факс                VARCHAR(50),
email               VARCHAR(256),
сайт                VARCHAR(2048)
);

CREATE TABLE представитель_организации
(
id INTEGER UNIQUE REFERENCES общая_информация(id),
ФИО                 TEXT,
должность           VARCHAR(256),
юридичемкий_адрес   VARCHAR(256),
фактический_адрес   VARCHAR(256),
телефон             INTEGER,
email               VARCHAR(256),
примечание          TEXT,
доп_информация      TEXT
);
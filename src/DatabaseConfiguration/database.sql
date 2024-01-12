create database lk_company;

CREATE TABLE users
(
    id          SERIAL PRIMARY KEY,
    login       VARCHAR(50)  NOT NULL,
    password    VARCHAR(100) NOT NULL,
    avatar      TEXT
);

INSERT INTO users (login, password, avatar) VALUES ('first_user', 1234, '0'); /* Написать скрипт для создания пользователей*/


/*Карточка организации*/
CREATE TABLE общая_информация
(
id INTEGER UNIQUE REFERENCES users(id),
краткое_название    TEXT,
полное_название     TEXT,
юридический_адрес   VARCHAR(256),
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
телефон             VARCHAR(256),
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
телефон             VARCHAR(256),
email               VARCHAR(256),
примечание          TEXT,
доп_информация      TEXT
);

INSERT INTO общая_информация (id, краткое_название, полное_название, юридический_адрес, фактический_адрес)
VALUES (1, 'Краткое название', 'Полное название', 'Юридический адрес 123', 'Фактический адрес 456');

INSERT INTO реквизиты_компании (id, инн, кпп, огрн, окпо, оконх, ндс, вид_деятельности)
VALUES (1, 12345678, 1234567, 1234567890, 12345678, 12345, 18, 'Производство');

INSERT INTO расчетный_счет (id, расчетный_счет, бик, Банк)
VALUES (1, 123456789, 123456789, 'Банк XYZ');

INSERT INTO контакты (id, режим_работы, телефон, факс, email, сайт)
VALUES (1, '9-18', '+7 123 456-78-90', '+7 098 765-43-21', 'email@example.com', 'www.example.com');

INSERT INTO представитель_организации (id, ФИО, должность, юридичемкий_адрес, фактический_адрес, телефон, email, примечание, доп_информация)
VALUES (1, 'Иванов Иван Иванович', 'Директор', 'Юридический адрес 123', 'Фактический адрес 456', '+7 123 456-78-90', 'ivanov@example.com', 'Примечание', 'Дополнительная информация');



/*Мои договоры*/
CREATE TABLE договоры
(
    id SERIAL PRIMARY KEY,
    номер               INTEGER,
    тема                VARCHAR(50),
    дата_начала         DATE,
    дата_окончания      DATE,
    расчетчик_ФИО       TEXT,
    расчетчик_телефона  VARCHAR(256),
    договорник_ФИО      TEXT,
    договорник_телефон  VARCHAR(256),
    оплачен             BOOLEAN,
    users_id INTEGER,
    FOREIGN KEY (users_id) REFERENCES users(id)
);

INSERT INTO договоры (номер,тема,дата_начала,дата_окончания,расчетчик_ФИО,расчетчик_телефона,договорник_ФИО,договорник_телефон,оплачен,users_id)
VALUES (34643346, 'это тема договора', '2023-12-24','2024-3-24','Иван Иванов Иванович',985,'Иван Иванов Иванович','1234567890',true,1);


/*Карточка договора*/


CREATE TABLE карточка_договора
(
    номер_договора      INTEGER,
    Грузополучатель     VARCHAR(256),
    Адрес               VARCHAR(256),
    Отрасль             VARCHAR(256),
    Телефон             VARCHAR(256),
    Категория           VARCHAR(256),
    Тип                 VARCHAR(256),
    Адрес_доставки      VARCHAR(256),
    Начало_договора     DATE,
    Окончание_договора  DATE,
    Дата_подписания     DATE,
    Дата_расторжения    DATE,
    users_id INTEGER,
    FOREIGN KEY (users_id) REFERENCES users(id)
);

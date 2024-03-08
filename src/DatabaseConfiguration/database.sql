create database lk_company;

CREATE TABLE users
(
    id          SERIAL PRIMARY KEY,
    login       VARCHAR(50)  NOT NULL,
    password    VARCHAR(100) NOT NULL
);

INSERT INTO users (login, password) VALUES ('first_user', 1234);


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
юр_адрес            VARCHAR(256),
факт_адрес          VARCHAR(256),
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

INSERT INTO представитель_организации (id, ФИО, должность, юр_адрес, факт_адрес, телефон, email, примечание, доп_информация)
VALUES (1, 'Иванов Иван Иванович', 'Директор', 'Юридический адрес 123', 'Фактический адрес 456', '+7 123 456-78-90', 'ivanov@example.com', 'Примечание', 'Дополнительная информация');



/*Мои договоры*/
CREATE TABLE договоры
(
    id SERIAL PRIMARY KEY,
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
    номер_договора      INTEGER not null unique references договоры(id),
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
    Дата_расторжения    DATE
);

INSERT INTO карточка_договора (номер_договора, Грузополучатель, Адрес, Отрасль, Телефон, Категория, Тип, Адрес_доставки, Начало_договора, Окончание_договора, Дата_подписания, Дата_расторжения)
VALUES (1,'Грузополучатель ОАОА','Ул. Пушкина','Библиотеки и апхивы','+7 906 430-00-00','Прочее отрасли','Договор энерго снаюжения','Ул. Loremarie','2024-5-13','2024-7-24','2024-5-13','2024-7-24');

/*Карточка договора/ точки учета*/
CREATE TABLE точки_учета
(
    id SERIAL PRIMARY KEY,
    номер_договора INTEGER,
    users_id INTEGER,
    наименование VARCHAR(255),
    адрес VARCHAR(255),
    тип VARCHAR(255),
    заводской_номер_ПУ INTEGER,
    число_тарифов INTEGER,
    тарифность INTEGER,
    коэффициент_трансформации NUMERIC(9,3),
    действует_с DATE,
    действует_до DATE,
    ценовая_категория VARCHAR(255),
    FOREIGN KEY (номер_договора) REFERENCES договоры(id),
    FOREIGN KEY (users_id) REFERENCES users(id)
);

CREATE TABLE параметры_ТУ
(
 id SERIAL PRIMARY KEY,
 id_точки_учета INTEGER,
 наименование VARCHAR(255),
 значение INTEGER,
 действует_с DATE,
 действует_до DATE,
 FOREIGN KEY (id_точки_учета) REFERENCES точки_учета(id)
);

INSERT INTO точки_учета (номер_договора, users_id, наименование, адрес, тип, заводской_номер_ПУ, число_тарифов, тарифность, коэффициент_трансформации, действует_с, действует_до, ценовая_категория)
VALUES (1, 1, 'СДК. Подчиненное', 'адрес 3223', 'Меркурий', 13241241, 1, 1, 0.1, '2024-10-22', '2025-10-24', 'первая');

INSERT INTO параметры_ТУ (id_точки_учета, наименование, значение, действует_с, действует_до)
VALUES (1, 'Lorem ipsum', 3, '2024-10-22', '2025-10-24');


/*Вывод показаний*/
CREATE TABLE показания
(
id SERIAL PRIMARY KEY,
id_точки_учета INTEGER,
марка_прибора_учета VARCHAR(255),
заводской_номер INTEGER,
услуга VARCHAR(255),
Тариф_Зоны VARCHAR(255),
Расход INTEGER,
дата_показания DATE,
FOREIGN KEY (id_точки_учета) REFERENCES точки_учета(id)
);

INSERT INTO показания (id_точки_учета, марка_прибора_учета, заводской_номер, услуга, Тариф_Зоны, Расход, дата_показания)
VALUES (1, 'СЭ 67п78 9ап 786па9', 123490, 'Электроснабжение', '1', 10000, '2024-1-30');
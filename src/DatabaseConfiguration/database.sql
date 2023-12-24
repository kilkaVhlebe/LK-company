create database lk_company;

CREATE TABLE users
(
    id        SERIAL PRIMARY KEY,
    login     VARCHAR(50)  NOT NULL,
    password  VARCHAR(100) NOT NULL,
    avatar TEXT
);

INSERT INTO users (login, password, avatar) VALUES ('first_user', 1234, '0'); /* Написать скрипт для создания пользователей*/

CREATE TABLE договоры
(
    id SERIAL PRIMARY KEY,
    номер   INTEGER,
    тема    VARCHAR(50),
    дата_начала DATE,
    дата_окончания DATE,
    расчетчик_ФИО TEXT,
    расчетчик_телефона  INTEGER,
    договорник_ФИО_1    TEXT,
    договорник_ФИО_2    TEXT
);

INSERT INTO договоры (номер,тема,дата_начала,дата_окончания,расчетчик_ФИО,расчетчик_телефона,договорник_ФИО_1,договорник_ФИО_2)
VALUES (34643346, 'это тема договора', '2023-12-24','2024-3-24','Иван Иванов Иванович',985,'Иван Иванов Иванович','Иван Иванов Иванович');
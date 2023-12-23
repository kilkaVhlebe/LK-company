create database lk_company;

CREATE TABLE users
(
    id        SERIAL PRIMARY KEY,
    login     VARCHAR(50)  NOT NULL,
    password  VARCHAR(100) NOT NULL,
    avatar TEXT
);

INSERT INTO users (login, password, avatar) VALUES ('first_user', 1234, '0'); /* Написать скрипт для создания пользователей
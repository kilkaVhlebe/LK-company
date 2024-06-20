# Сервер сайд для личного кабинета ЛК Энегргосбыт
## Установка и сборка для разработки
Клонируем репозиторий
```
git clone https://github.com/tugaserya/LK-company.git
cd LK-company
```
Установка зависимостей
```
npm i
```

Создайте в корне проекта файл `.env`. Добавте в него и заполните поля:
```
PORT
POSTGRES_HOST
POSTGRES_USER
POSTGRES_DB
POSTGRES_PASSWORD
POSTGRES_PORT
```

Создайте базу данных по скриптам из файла database.sql

## Запуск
Для разработки
```
npm run dev
```
Обычный запуск
```
npm start
```

## API
Запустите прилоение и перейдите по маршруту ``/api``. Загрузится swagger документация со всеми маршрутами.
Если вы изменяете или дополняете документацию API, то выполните в терминале - ``npm run generate:docs`` для генерации новой документации.


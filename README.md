## Написать свою собственную библиотеку и опубликовать в NPM.

Что нужно помнить при реализации:

- Ваш модуль должен обязательно экспортировать функции которые будут полезны вашим пользователям с помощью modules.exports
- Не забудьте указать в package.json в поле main файл, который будет основным в вашей библиотеке
- Обязательно создайте и опишите README.md файл в корне вашего проекта
- Если у вас есть репозиторий в github или gitlab, опубликуйте туда ваш код и в package.json укажите ссылку на репозиторий в поле repository
- Протестируйте работу вашей библиотеки после публикации. Попробуйте установить её в любом другом проекте с помощью npm i имявашейбиблиотеки и попробуйте ее использовать.

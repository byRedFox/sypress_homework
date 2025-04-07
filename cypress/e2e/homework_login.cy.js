describe('Форма Логина и Пароля', () => {
    beforeEach(() => {
        // Выносим повторяющиеся действия в beforeEach
        cy.visit('https://login.qa.studio/');
    });

    it('Ввод верного логина и пароля', function () {
        cy.get('#mail').type('german@dolnikov.ru'); // Находим поле логин и вводим верный логин
        cy.get('#pass').type('iLoveqastudio1'); // Находим поле пароль и вводим верный пароль
        cy.get('#loginButton').click(); // Нажимаем "Войти"

        cy.get('#messageHeader').should('have.text', 'Авторизация прошла успешно'); // Появилось диалоговое окно с нужым сообщением об успешном входе
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяем что пользователь видит кнопку "Х"
    });

    it('Восстановление пароля', function () {
        cy.get('#forgotEmailButton').click(); // Нажимаем на кнопку "Забыли пароль?"

        cy.get('#mailForgot').type('drugoi@adress.ru'); // Находим поле ввода почты и вводим почту для восстановления пароля
        cy.get('#restoreEmailButton').click(); // Нажимаем кнопку "Отправить код"

        cy.get('#messageHeader').should('have.text', 'Успешно отправили пароль на e-mail'); // Появилось диалоговое окно с нужым сообщением об успешном отправке кода
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяем что пользователь видит кнопку "Х"
    });

    it('Ввод верного логина и НЕверного пароля', function () {
        cy.get('#mail').type('german@dolnikov.ru'); // Находим поле логин и вводим НЕверный логин
        cy.get('#pass').type('testit!'); // Находим поле пароль и вводим Не верный пароль
        cy.get('#loginButton').click(); // Нажимаем "Войти"

        cy.get('#messageHeader').should('have.text', 'Такого логина или пароля нет'); // Появилось диалоговое окно с нужым сообщением что авторизация не успешна
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяем что пользователь видит кнопку "Х"
    });

    it('Ввод НЕ верного логина и верного пароля', function () {
        cy.get('#mail').type('german@tako.ru'); // Находим поле логин и вводим НЕверный логин
        cy.get('#pass').type('iLoveqastudio1'); // Находим поле пароль и вводим верный пароль
        cy.get('#loginButton').click(); // Нажимаем "Войти"

        cy.get('#messageHeader').should('have.text', 'Такого логина или пароля нет'); // Появилось диалоговое окно с нужым сообщением что авторизация не успешна
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяем что пользователь видит кнопку "Х"
    });

    it('Ввод почты без @ и верный пароль', function () {
        cy.get('#mail').type('germandolnikov.ru'); // Находим поле логин и вводим почту без @
        cy.get('#pass').type('iLoveqastudio1'); // Находим поле пароль и вводим верный пароль
        cy.get('#loginButton').click(); // Нажимаем "Войти"

        cy.get('#messageHeader').should('have.text', 'Нужно исправить проблему валидации'); // Появилось диалоговое окно с нужым сообщением что авторизация не успешна
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяем что пользователь видит кнопку "Х"
    });

    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Находим поле логин и вводим логин с строчными и заглавными буквами
        cy.get('#pass').type('iLoveqastudio1'); // Находим поле пароль и вводим верный пароль
        cy.get('#loginButton').click(); // Нажимаем "Войти"

        cy.get('#messageHeader').should('have.text', 'Авторизация прошла успешно'); // Появилось диалоговое окно с нужым сообщением что авторизация не успешна
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяем что пользователь видит кнопку "Х"
    });
});

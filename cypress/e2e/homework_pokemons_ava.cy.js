describe('Покемоны и Аватары', function () {
    it('Покупаю новый аватар для своего Чемпиона!', function () {
        cy.visit('https://pokemonbattle.ru/');
        cy.get('#k_email').type('USER_LOGIN'); // Находим поле логи и вводим верный логин
        cy.get('#k_password').type('USER_PASSWORD'); // Находим поле пароля и вводим верный пароль
        cy.get('.MuiButton-root').click(); // Находим кнопку "Войти" и кликаем на нее
        // cy.wait(1000) Sypress умеет сам подождать как я выяснил, жесткие рамки в нашем случае не обязательны именно для сайта покемонов;
        cy.get('.header_card_trainer_id_num').click(); // Находим элемент "Профиль" и кликаем на него
        // cy.wait(1000); и тут
        cy.get(
            ':nth-child(5) > .k_trainer_in_button_wrapper > .k_trainer_in_button_title_no_desc'
        ).click(); // Находим кнопку "Смена Аватара" и кликаем на него
        // cy.wait(1000); и тут
        cy.get('.available > button').first().click(); // Находим первый доступный с классом avaliable и кликаем кнопку
        cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type(
            '4584432975515231'
        ); // Находим поле с вводом номера карты и вводим его
        cy.get(':nth-child(1) > .style_1_base_input').type('11/26'); // Находим и заполняем поле с сроком действия карты
        cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125'); // Находим и заполняем поле с CVC
        cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('tsepa sergey'); // Находим и заполняем поле с именем держателя карты
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // Находим и кликаем кнопку оплатить
        cy.get('.style_1_base_input').type('56456'); // Находим поле для ввода кода подтверждения из СМС и вводим его
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // Находим и кликаем кнопку "Подтвердить"
        cy.get('.payment_status_top_title').should('have.text', 'Покупка прошла успешно'); // Проверяем что отображается надпись о успешной покупке
        cy.get('.style_1_base_link_blue').click(); // Находим кнопку возврата в магазин и кликаем ее
        cy.get('.header_card_trainer_id_num').click(); // Находим кнопку входа в профиль что бы любоваться новый аватаром
    });
});

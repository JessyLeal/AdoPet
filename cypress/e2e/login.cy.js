describe("Login no site Adopet", () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="login-button"]').click();
        cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {statusCode:400, }).as('stubPost')
    })
    it('Deve preencher os campos do login corretamente e autenticar o usuário na pagina', () => {
        cy.login('jleal123@gmail.com', 'Maa12347');
    })
    it("Falha no login do sistema", () => {
        cy.login('12345', '123455675')
        cy.contains('Por favor, verifique o email digitado').should('be.visible');
        cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
    })
    it("Deve falhar mesmo que os campos sejam preenchidos corretamente", ()=>{
        cy.login('jleal123@gmail.com','Ma1234567')
        cy.wait('@stubPost')
        cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible')
    })
})
describe("Página de cadastro", () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.contains('a', 'Cadastrar').click();
    })
    it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
        cy.cadastrar('Mariana Leal', 'jleal123@gmail.com', 'Maa12347')
    })
    it("Deve preencher os campos do formulário incorretamente para falhar o cadastro de um novo usuário", () => {
        cy.contains('button', 'Cadastrar').click();
        cy.contains('É necessário informar um endereço de email').should('be.visible');
        cy.contains('Crie uma senha').should('be.visible');
        cy.contains('Repita a senha criada acima').should('be.visible');
    })
})
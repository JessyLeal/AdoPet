describe('Página principal', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })
    it('Visite a página principal do AdoPet e verifique se o title com o texto “AdoPet” está presente no html.', () => {
        cy.title().should('eq','AdoPet');
    })
    it('Visite a página principal do AdoPet e verifique se o texto “Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!” está presente no html.', () => {
        cy.contains('Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
    })
    it('Visite a página principal do Adopet, clique no botão de ícone de mensagem no header e escreva nome e senha válidos na página de login.', () => {
        cy.get('[data-test="login-button"]').click();
        cy.login('jleal123@gmail.com', 'Maa12347');
    })
})
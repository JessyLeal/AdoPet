describe('Verificar imagem dos pets', () => {
    it('Verificar a página do cypress', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/home')
        for (var i = 1; i < 10; i++) {
            cy.get('.cards > :nth-child('+ i +') > img').should('be.visible')
        }
    })
}) 
describe('To-do list', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/todo')
    })
    it('Deletar todas as atividades', () => {
        cy.get('.toggle').each(($el) => {
            cy.wrap($el).click()
            cy.wait(200) // espera 200ms entre os cliques
          })
        cy.contains('Clear completed').click()
        cy.get('.todo-list li').should('have.length', 1).should('not.have.text', 'Pay eletric')
        cy.contains('Clear completed').should('not.exist')
    })
    it('Filtrar atividades', () => {
        cy.get('.todo-list li').should('have.length', 2)
        cy.contains('a', 'Active').click()
        cy.get('.todo-list li').should('have.length', 2)
        cy.contains('a', 'Completed').click()
        cy.contains('Pay eletric').should('not.exist')
        cy.contains('Walk the dog').should('not.exist')
    })
})
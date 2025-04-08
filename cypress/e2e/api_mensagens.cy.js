describe('Api adopet', () => {
    const tempoEsperado = Math.random() * 1000
    it('Mensagens da API', () => {
        cy.request({
            method:'GET',
            url:'https://adopet-api-i8qu.onrender.com/mensagem/b7ad02fd-41a0-462f-b2ae-a952e86a319d',
            headers: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
            expect(res.duration). to.be.lte(tempoEsperado)
        })
    })
    // it('Mensagens da API', () => {
    //     cy.request({
    //         method:'GET',
    //         url:'https://adopet-frontend-cypress.vercel.app/perfil',
    //         headers: {authorization}
    //     }).then((res) => {
    //         expect(res.status).to.be.equal(200)
    //         expect(res.body).is.not.empty
    //         expect(res.body).to.have.property('perfil')

    //     })
    // })

})
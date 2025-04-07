describe('addotion_pets', () => {
    it('Visite a página de principal do AdoPet e clique no botão ‘Ver pets disponíveis para adoção”', ()=> {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })
})

describe('main_page', () => {
    it('Visite a página de principal do AdoPet e teste os botões header', ()=> {
        cy.go('back');
        cy.get('a[class="header__home"').click();
        cy.get('a[class="header__message"').click();
    })
})

describe('login_page', () => {
    it('Visite a página de /login do Adopet', ()=> {
        cy.visit('https://adopet-frontend-cypress.vercel.app/login');
    })
})

describe('home_page', () => {
    it('Visite a página de /home do Adopet', ()=> {
        cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    })
})

describe('home_page', () => {
    it('Visite a página de /home do Adopet', ()=> {
        cy.visit('https://adopet-frontend-cypress.vercel.app/home');
        cy.get('.header__message').click();
    })
})




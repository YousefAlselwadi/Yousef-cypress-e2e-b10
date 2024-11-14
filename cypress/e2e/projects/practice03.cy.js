/// <reference types="cypress"/>

import BasePageWikipedia from "../../pages/BasePageWikipedia";

const basePageWikipedia = new BasePageWikipedia();

describe('Practice03', () => {
    beforeEach(() => {
        cy.visit('https://www.wikipedia.org/');
        cy.fixture('example').then(function(data) {
            this.logo = data.logo
            this.slogan = data.slogan
            this.topLanguage = data.topLanguage
        });
    });
    it('TASK-1: Validate the Wikipedia Logo and Slogan', function() {
        basePageWikipedia.getLogoWikipedia().should('contain.text', this.logo)
        basePageWikipedia.getSloganText().should('contain.text', this.slogan)

    });

    it('TASK-2: Validate the Wikipedia Top Ten Languages', () => {
        basePageWikipedia.getTopTenLanguages().should('be.visible')
        basePageWikipedia.getTopTenLanguages().first().should('contain.text', 'English')

    });

    it('TASK-3: Validate the Wikipedia Search Results', () => {
        basePageWikipedia.clickSearchInput().type('Cypress{enter}').title().should('include', 'Cypress').url().and('include', 'Cypress')
        basePageWikipedia.geth1CypressHeader().should('have.text', 'Cypress')
    });

    it('TASK-4: Validate the Wikipedia Article Numbers for All Languages', () => {
        const arr = [19, 54, 100, 132, 28]
        cy.get('#js-lang-list-button').click()
        for(let i = 0; i <= 4; i++) {
            cy.get('.langlist').eq(i).find('a').should('have.length', arr[i])
        }
    });

});
class BasePageWikipedia {

    getLogoWikipedia() {
       return cy.get('[class$="wordmark"]')
    };

    getSloganText() {
       return cy.get('[class$="slogan"]')
    };

    getTopTenLanguages() {
        return cy.get('div.central-featured-lang strong')
    };

    clickSearchInput() {
        return cy.get('input#searchInput').click();
    }

    geth1CypressHeader() {
        return cy.get('.mw-page-title-main')
    }

    getReadWikiInUrLangBtn() {
        return cy.get('#js-lang-list-button').click()
    }

    
};

export default BasePageWikipedia
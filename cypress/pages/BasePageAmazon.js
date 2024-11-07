class BasePageAmazon {
    /* locators */
    getLogo() {
        return cy.get('#nav-logo-sprites');
    }

    getLocationSection() {
        return cy.get('#nav-global-location-popover-link');
    }

    getSearchDropdown() {
        return cy.get('#nav-search-dropdown-card');
    }

    getSearchBox() {
        return cy.get('#twotabsearchtextbox');
    }

    getSearchIcon() {
        return cy.get('#nav-search-submit-button');
    }

    getLanguageDropdown() {
        return cy.get('#icp-nav-flyout');
    }

    getHelloSection() {
        return cy.get('#nav-link-accountList');
    }

    getReturnAndOrders() {
        return cy.get('#nav-orders');
    }

    getCart() {
        return cy.get('#nav-cart');
    }

    getFooterHeadings() {
        return cy.get('#navFooterColHead');
    }

    getZipCodeInput() {
        return cy.get('#GLUXZipUpdateInput');
    }

    getZipCodeApplyBtn() {
        return cy.get('#GLUXZipUpdate input');
    }

    getZipCodeConfirmationMsg() {
       return cy.get('#GLUXZipConfirmationSection');
    }

    getZipCodeDoneBtn() {
        return cy.get('#a-autoid-0-announce');
    }

    /* methods */
    
    clickLocationSection() {
        this.getLocationSection().click();
    };

    enterZipCode(zipCode) {
        this.getZipCodeInput().type(zipCode);
    };

    clickZipCodeApplyBtn() {
        this.getZipCodeApplyBtn().click();
    };

    clickZipCodeDoneBtn() {
        this.getZipCodeDoneBtn().click();
    };
}

export default BasePageAmazon
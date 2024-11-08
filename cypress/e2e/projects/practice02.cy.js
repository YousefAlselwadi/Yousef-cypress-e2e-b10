/// <reference types="cypress"/>

import BasePageAmazon from "../../pages/BasePageAmazon";

const basePageAmazon = new BasePageAmazon();

describe('Practice 02', () => {
    beforeEach(() => {
      cy.visit('https://www.amazon.com/');

      cy.fixture('example').then(function(data) {
        this.zipCode = data.ZipCode
        this.city = data.city
      })
    });
  
    /*
1. Go to https://www.amazon.com/
2. Validate that the Amazon logo is displayed
3. Validate the location section is displayed
4. Validate the "All" dropdown is displayed
5. Validate the search box is displayed
6. Validate the search icon is displayed
7. Validate the language dropdown is displayed
8. Validate the "Hello, sign in | Account & Lists" section is displayed
9. Validate the "Returns & Orders" section is displayed
10. Validate the cart is displayed with zero item by default
*/

    it('TASK-1: Validate the Amazon Header', () => {
        
        basePageAmazon.getLogo().should('be.visible');
        basePageAmazon.getLocationSection().should('be.visible');
        basePageAmazon.getSearchDropdown().should('be.visible');
        basePageAmazon.getSearchBox().should('be.visible');
        basePageAmazon.getSearchIcon().should('be.visible');
        // basePageAmazon.getLanguageDropdown().should('be.visible');
        basePageAmazon.getHelloSection().should('be.visible');
        basePageAmazon.getReturnAndOrders().should('be.visible');
        basePageAmazon.getCart().should('be.visible');
        
    });

    it.only('Validate the Amazon Location Update', function() {

        cy.get('#nav-global-location-popover-link').click();
        basePageAmazon.enterZipCode(this.zipCode);
        basePageAmazon.clickZipCodeApplyBtn();
        basePageAmazon.getZipCodeConfirmationMsg().should('contain', this.zipCode);
        basePageAmazon.clickZipCodeDoneBtn();
        basePageAmazon.getLocationSection().should('have.text', `${this.city} ${this.zipCode}`);


    });
});
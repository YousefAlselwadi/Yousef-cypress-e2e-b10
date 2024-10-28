/// <reference types="cypress"/>

describe("Cypress Selectors", () => {
    beforeEach(() => {
      cy.visit("https://www.techglobal-training.com/frontend");
      cy.contains(".card", "HTML Elements").click();
    });
  
    /**
     * Visit the techglobal frontend page
     * Click and navigate to Html Elements page
     * Click on the Register button on the Html Elements Page
     * Validate "You clicked on "Register" text is visible
     * And click on the "Sign in" button
     * Validate "You clicked on "Sign in"" text is visible
     */
  
    it("Click Action", () => {
      // .should('have.text', 'expectedText')
  
      cy.get('#register_button').click();
      cy.get('.mt-1').should('have.text', 'You clicked on “Register”');
  
      cy.get('#signin_button').click();
      cy.get('.mt-1').should('have.text', 'You clicked on “Sign in”');
  
      cy.get('#register_button').click()
      .next()
      .next().should('have.text', 'You clicked on “Register”')
      .prev().click()
      .next().should('have.text', 'You clicked on “Sign in”');
    });
    it('checkbox & radio buttons', () => {
        // .check()
        // cy.get('#apple_check').click().should(be.checked);

        // cy.get('#apple_check.checkbox').check()

        /**
     * 1. Check on the Apple checkbox button
     * 2. Then Validate its checked
     * 3. Uncheck the Apple checkbox button
     * 4. Validate its unchecked
     */

        cy.get('#checkbox_1').check()
        .should('be.checked')
        .uncheck()
        .should('not.be.checked');

        /**
     * 1. Locate the "Java" radio button, and validate its not checked
     * 2. Select Java radio option
     * 3. Validate its checked.
     */
        cy.get('#radio_1_option_1').should('not.be.checked')
        .check().should('be.checked')

    });
    /**
     * Locate the text inputs, and send text inside the input,
     * Validate the text you send is inside the input
     * and clear it
     * Validate it is empty
     * 
     * .should('have.value', 'value')
     * .should('be.empty')
     */
    it('Text Input', () => {
        cy.get('#text_input1').type('TechGlobal').should('have.value', 'TechGlobal').clear().should('be.empty')
        cy.get('#text_input2').type('Global').should('have.value', 'Global').clear().should('be.empty')
    });

    it('Date Input', () => {

        cy.get('#date_input1').type('01/01/2020{enter}');

        cy.get('#date_input2').clear().type('01/01/2020{esc}')
    });

    it('Dropdowns', () => {

        cy.get('#company_dropdown1').select('Microsoft').should('have.value', 'Microsoft')
        cy.get('#company_dropdown1').select(2)
        

    })
  });
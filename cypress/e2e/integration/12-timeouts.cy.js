/// <reference types="cypress"/>

describe("Timeouts", () => {
    beforeEach(() => {
        // cy.visit("https://www.google.com/", { timeout: 10000 })
        cy.visit("https://www.techglobal-training.com/frontend");
        cy.clickCard("HTML Elements");
        // Cypress.config("defaultCommandTimeout", 1000)
    });

    it('Explicit and Inline timeouts', () => {
        cy.get("#main_heading", { timeout: 5000 });

        cy.get('#hello_paragraph', { timeout: 5000 }).click({ timeout: 10000 });

        cy.get("#checkbox-button-group input").click({ multiple: true, timeout: 5000, force: true });
    });
    it("Waits", () => {
        cy.visit(`${Cypress.env("SITE_URL")}/frontend`);
        cy.clickCard("Waits");
    
        cy.get("#red").click();
    
        cy.get(".box", { timeout: 10000 }).should("be.visible");
      });
});
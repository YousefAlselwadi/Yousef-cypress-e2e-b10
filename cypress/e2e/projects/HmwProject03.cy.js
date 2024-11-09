/// <reference types="cypress"/>

import BookingPage from "../../pages/BookingPage";

const bookingPage = new BookingPage();

describe("Book Your Trip From Tests", () => {
    beforeEach(() => {
        cy.visit('https://www.techglobal-training.com/frontend/project-3')
    })
    it("Test Case 01 - Validate the default Book your trip form", () => {

        bookingPage.getOneWayRadioBtn().should("be.visible").and("be.enabled").and("be.checked");
        bookingPage.getRoundTripRadioBtn().should("be.visible").and("be.enabled").and("not.be.checked");
        bookingPage.getCabinClass().should("be.visible");
        bookingPage.getFromClass().should("be.visible");
        bookingPage.getToClass().should("be.visible");
        bookingPage.getDepartClass().should("be.visible");
        bookingPage.getReturnClass().should("be.visible").and("not.be.enabled");
        bookingPage.getNumberClass().should("be.visible").and("contain", 7);
    })
})
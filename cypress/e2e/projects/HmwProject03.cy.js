/// <reference types="cypress"/>

import BookingPage from "../../pages/BookingPage";

const bookingPage = new BookingPage();

describe("Book Your Trip From Tests", () => {
  beforeEach(() => {
    cy.visit("https://www.techglobal-training.com/frontend/project-3");
  });

  const validateTextAndLabels = () => {
    const text = [
      "Trip type",
      "Cabin Class",
      "From",
      "To",
      "Depart",
      "Return",
      "Number of passengers",
      "Passenger 1",
    ];
    bookingPage.getLabels().each(($el, index) => {
      cy.wrap($el).should("be.visible").and("have.text", text[index]);
    });
  };

  const validateDropDowns = () => {
    bookingPage.getDropDowns().each(($el) => {
      cy.wrap($el).should("be.visible");
    });
  };

  it("Test Case 01-02 - Validate the default Book your trip form", () => {
    bookingPage.getOneWay().should("be.visible").children().should("be.checked");
    bookingPage.getRoundTrip().should("be.visible").children().should("not.be.checked");
    bookingPage.getNumOfPassDropDown().should("have.value", 1);
    bookingPage.getPassengerDropDown().should("have.value", "Adult (16-64)");
    bookingPage.getDatePicker1().should("be.visible").and("be.enabled");
    bookingPage.getDatePicker2().should("be.visible").and("be.disabled");
    bookingPage.getBookButton().should("be.visible").and("be.enabled");
    bookingPage.getRoundTrip().click();
    bookingPage.getRadioButtonRoundTrip().should("be.checked");
    bookingPage.getOneWayButton().should("not.be.checked");

    validateTextAndLabels();
    validateDropDowns();
  });

});

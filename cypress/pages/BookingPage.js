class BookingPage {
    getOneWayRadioBtn() {
        return cy.get(".ml-0 > .mr-1")
    }

    getRoundTripRadioBtn() {
        return cy.get(":nth-child(2) > .mr-1")
    }

    getCabinClass() {
        return cy.get(".field").eq(1);
    }
    getFromClass() {
        return cy.get(".field").eq(2);
    }
    getToClass() {
        return cy.get(".field").eq(3);
    }
    getDepartClass() {
        return cy.get(".field").eq(4);
    }
    getReturnClass() {
        return cy.get(".field").eq(5);
    }
    getNumberClass() {
        return cy.get(".field").eq(6);
    }
    getPassengerClass() {
        return cy.get(".field").eq(7);
    }
    getBookClass() {
        return cy.get(".field").eq(8);
    }

}

export default BookingPage;
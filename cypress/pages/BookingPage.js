class BookingPage {
    getRadioButtons() {
        return cy.get(".radio")
    }

    getOneWay() {
        return this.getRadioButtons().eq(0)
    }

    getRoundTrip() {
        return this.getRadioButtons().eq(1)
    }

    getLabels() {
        return cy.get(".label")
    }

    getDropDowns() {
        return cy.get(".select")
    }

    getNumOfPassDropDown() {
        return cy.get(":nth-child(7) > .select > select")
    }

    getPassengerDropDown() {
        return cy.get(":nth-child(8) > .select > select")
    }

    getBookButton() {
        return cy.get(".Button_c_button__TmkRS");
    }    

    getDatePicker1() {
        return cy.get('[placeholder="MM/DD/YY"]').first();
    }

    getDatePicker2() {
        return cy.get('[placeholder="MM/DD/YY"]').eq(1);
    }

    getRadioButtonRoundTrip() {
        return cy.get(":nth-child(2) > .mr-1")
    }

    getOneWayButton() {
        return cy.get(".ml-0 > .mr-1")
    }
}

export default BookingPage;
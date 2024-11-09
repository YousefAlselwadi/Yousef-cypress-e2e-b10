import BasePage from "./BasePage"
class TablePage {
    getCompanyTableHeaders() {
        return cy.get('[class$="header has-text-white"]')
    }

}
export default TablePage
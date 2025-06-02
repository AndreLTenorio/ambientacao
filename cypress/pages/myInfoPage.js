class MyInfoPage {
    selectorsList() {
        const selectors = {
            firstNameField: '[name="firstName"]',
            lastNameField: '[name="lastName"]',
            middleNameField: '[name="middleName"]',
            dateField: "[placeholder='yyyy-dd-mm']",
            genericField: ".oxd-input--active",
            genericComboBox: ".oxd-select-text--arrow",
            selectNationality: ":nth-child(26) > span",
            selectMaritalStatus: ":nth-child(3)",
            submitButton: "[type='submit']",
        }
        return selectors;
    }

    fillPersonalDetails(firstName, lastName, middleName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName);
        cy.get(this.selectorsList().lastNameField).clear().type(lastName);
        cy.get(this.selectorsList().middleNameField).clear().type(middleName);
    }

    fillEmployeeDetails(employeeId, otherId, driverLicense, licenseExpire) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId);
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId);
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driverLicense);
        cy.get(this.selectorsList().genericField).eq(6).clear().type(licenseExpire);
        cy.contains('Close').click({ force: true });
    }

    fillStatus() {
        cy.contains('Close').click({ force: true });
        cy.get(this.selectorsList().genericComboBox).eq(0).click({ force: true });
        cy.get(this.selectorsList().selectNationality).click();
        cy.get(this.selectorsList().genericComboBox).eq(1).click({ force: true });
        cy.get(this.selectorsList().selectMaritalStatus).eq(2).click();
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click({ force: true });
        cy.get('body').should('contain', 'Successfully Updated');
        cy.get('.oxd-toast-close');
    }
}

export default MyInfoPage;

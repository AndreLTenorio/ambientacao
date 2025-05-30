import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/login.js'

const loginPage = new LoginPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    dashboardGrid: ".orangehrm-dashboard-grid",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: '[name="firstName"]',
    lastNameField: '[name="lastName"]',
    middleNameField: '[name="middleName"]',
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    genericComboBox: ".oxd-select-text--arrow",
    selectNationality: ":nth-child(26) > span",
    selectMaritalStatus: ":nth-child(3)",
    submitButton: "[type='submit']",

  }
  
  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('QA')
    cy.get(selectorsList.lastNameField).clear().type('Engineer')
    cy.get(selectorsList.middleNameField).clear().type('Test')
    cy.get(selectorsList.genericField).eq(3).clear().type('0024')//employee ID
    cy.get(selectorsList.genericField).eq(4).clear().type('0025')//Other ID
    cy.get(selectorsList.genericField).eq(5).clear().type('123456')//Driver's License Number
    cy.get(selectorsList.genericField).eq(6).clear().type('2025-28-05')//License Expiry Date
    cy.contains('Close').click({force: true}) //close date picker
    cy.get(selectorsList.genericComboBox).eq(0).click({force: true}) //Select Nationality
    cy.get(selectorsList.selectNationality).click() //Select Brazilian
    cy.get(selectorsList.genericComboBox).eq(1).click({force: true}) //Select Marital Status
    cy.get(selectorsList.selectMaritalStatus).eq(2).click() //Select Married
    cy.get(selectorsList.submitButton).eq(0).click({force: true})
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')

  })
  it('Login - Fail', () => {
  
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })   
})
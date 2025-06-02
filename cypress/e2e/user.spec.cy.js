import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/login.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()


describe('Orange HRM Tests', () => {

  const selectorsList = {    
  }
  
  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.acessMyInfoButton()

    myInfoPage.fillPersonalDetails("QA Automation", "Test", "Cypress")
    myInfoPage.fillEmployeeDetails("12345", "67890", "DL123456", "2025-12-31") 
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
  })

  it('Login - Fail', () => {
  
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })   
})
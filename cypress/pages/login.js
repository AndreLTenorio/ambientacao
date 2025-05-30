class LoginPage {

    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            wrongCredentialAlert: "[role='alert']",
        }

        return selectors;
    }

    accessLoginPage() {
        cy.visit('/auth/login');
    }

    loginWithUser(username, password) {
        cy.get('input[name="username"]').type(username)
        cy.get('input[name="password"]').type(password)
        cy.get('button[type="submit"]').click()
    }
}


export default LoginPage;
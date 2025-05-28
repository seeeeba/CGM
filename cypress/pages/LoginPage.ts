export class LoginPage {
    checkLoginPage() {
      cy.get('#user-name').should('be.visible');
      cy.get('#password').should('be.visible');
      cy.get('#login-button').should('be.visible');
    }
  
    login(username: string, password: string) {
      cy.get('#user-name').clear().type(username);
      cy.get('#password').clear().type('randompassword');
      cy.get('#login-button').click();
      
      cy.wait(500)
      cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain.text', 'Epic sadface: Username and password do not match any user in this service');
      
        cy.wait(500)
      cy.get('#password').clear().type(password);
      cy.get('#login-button').click();
    }
  }
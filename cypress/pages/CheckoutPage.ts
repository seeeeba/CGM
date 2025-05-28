export class CheckoutPage {
    checkCheckoutPage() {
      cy.get('.title').should('have.text', 'Checkout: Your Information');
    }
  
    compileCheckoutForm() {
      // riprende i dati hard-coded come in Java
      cy.get('#first-name').type('Mario');
      cy.get('#last-name').type('Rossi');
      cy.get('#postal-code').type('12345');
      cy.get('#continue').click();
    }
  }
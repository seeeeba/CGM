export class ShoppingCartPage {
    checkCartPage() {
      cy.get('.cart_quantity_label').should('be.visible');
      cy.get('.cart_desc_label').should('be.visible');
      cy.get('#continue-shopping').should('be.visible');
      cy.get('#checkout').should('be.visible');
    }
  
    goToCheckout() {
      cy.get('#checkout').click();
    }
  }
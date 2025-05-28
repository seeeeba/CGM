export class InventoryPage {
    pageLogo() {
      // controlla che il logo sia visibile
      return cy.get('.app_logo').should('be.visible');
    }
  
    addFirstProductToCart() {
      // clic sul primo "Add to cart"
      cy.get('button[id*="add-to-cart"]').first().click();
    }
  
    goToShoppingCart() {
      cy.get('.shopping_cart_link').click();
    }
  }
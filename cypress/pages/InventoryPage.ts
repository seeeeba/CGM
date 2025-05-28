export class InventoryPage {

  pageLogo() {
    return cy.get('.app_logo').should('be.visible');
  }

  addFirstProductToCart() {
    cy.get('button[id*="add-to-cart"]').first().click();
  }

  goToShoppingCart() {
    cy.get('.shopping_cart_link').click();
  }

  checkInventoryPage(){
    cy.get('.app_logo').should('be.visible');
    cy.wait(200)
    this.checkBurgerMenu
    cy.get('.shopping_cart_link').should('be.visible');
    cy.get('.title').should('be.visible').and('have.text', 'Products');
    cy.wait(200)
    this.checkItems
    cy.wait(200)
  }

  checkBurgerMenu(){
    cy.get('#react-burger-menu-btn').click();
    const expectedItems = ['All Items', 'About', 'Logout', 'Reset App State'];
    cy.get('.bm-item-list a')
      .should('have.length', expectedItems.length)
      .each(($el, idx) => {
        cy.wrap($el).should('have.text', expectedItems[idx]);
      });
      cy.wait(200)
    cy.get('#react-burger-cross-btn').click();
  }

  checkItems() {
    const items = [
      { selector: '#item_0_title_link', title: 'Sauce Labs Bike Light'},
      { selector: '#item_1_title_link', title: 'Sauce Labs Bolt T-Shirt'},
      { selector: '#item_2_title_link', title: 'Sauce Labs Onesie'},
      { selector: '#item_3_title_link', title: 'Test.allTheThings() T-Shirt (Red)'},
      { selector: '#item_4_title_link', title: 'Sauce Labs Backpack'},
      { selector: '#item_5_title_link', title: 'Sauce Labs Fleece Jacket'}
    ];

    items.forEach(item => {
      cy.get(item.selector).should('have.text', item.title);
    });
  }

}
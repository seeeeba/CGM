import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { ShoppingCartPage } from '../pages/ShoppingCartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { OverviewPage } from '../pages/OverviewPage';
import { OrderPage } from '../pages/OrderPage';

const config = require('../fixtures/config.json');

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();
const shoppingCartPage = new ShoppingCartPage();
const checkoutPage = new CheckoutPage();
const overviewPage = new OverviewPage();
const orderPage = new OrderPage();

describe('E2E_01_Standard_user – purchase flow', () => {
  const WAIT = 500
  beforeEach(() => {
    cy.visit('/');
    cy.wait(WAIT)
  });

  it('completes purchase as standard_user', () => {

    loginPage.checkLoginPage();

    loginPage.login(config.username, config.password);
    cy.wait(WAIT)

    inventoryPage.pageLogo();
    cy.wait(WAIT)

    inventoryPage.addFirstProductToCart();
    cy.wait(WAIT)

    inventoryPage.goToShoppingCart();
    cy.wait(WAIT)
    
    shoppingCartPage.checkCartPage();
    cy.wait(WAIT)
    
    shoppingCartPage.goToCheckout();
    cy.wait(WAIT)

    checkoutPage.checkCheckoutPage();
    cy.wait(WAIT)

    checkoutPage.compileCheckoutForm();
    cy.wait(WAIT)
    
    overviewPage.checkOverviewPage();
    cy.wait(WAIT)

    overviewPage.checkItemTotalAmount();
    cy.wait(WAIT)

    orderPage.goToOrderPage();
    cy.wait(WAIT)

    orderPage.checkOrderPage();

  });
});
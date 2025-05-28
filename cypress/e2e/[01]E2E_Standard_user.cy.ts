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
  
  beforeEach(() => {
    cy.visit('/');
  });

  it('completes purchase as standard_user', () => {

    loginPage.checkLoginPage();

    loginPage.login(config.username, config.password);

    inventoryPage.checkInventoryPage();

    inventoryPage.pageLogo();

    inventoryPage.addFirstProductToCart();

    inventoryPage.goToShoppingCart();
    
    shoppingCartPage.checkCartPage();
    
    shoppingCartPage.goToCheckout();

    checkoutPage.checkCheckoutSection();

    checkoutPage.fillCheckoutForm();
    
    overviewPage.checkOverviewPage();

    overviewPage.checkItemTotalAmount();

    orderPage.goToOrderPage();

    orderPage.checkOrderPage();

    orderPage.goBackToProducts();
  });
});
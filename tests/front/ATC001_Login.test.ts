import { test, expect } from '@front/fixtures/frontFixtures';
import { config } from '@config/env';
import { getTestData } from '@utils/testDataReader';
import {ATC001_Login } from '@front/types/SauceDemo';
import sauceData from '@front/testData/sauceDemoTestData.json';

/**
 * Test suite for SauceDemo login and basic inventory interactions.
 */
test.describe('SauceDemo - Login', () => {
  /**
   * Hook that runs before each test to navigate to the base URL using the loginPage fixture.
   */
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto(config.baseUrlUISauce);
    await loginPage.expectLoaded();
  });

  /**
   * Test to verify that a successful login navigates to the inventory page
   * and displays items correctly.
   */
  test('Login successfully and navigate to the inventory.', async ({ loginPage, inventoryPage }) => {
    const testData = getTestData<ATC001_Login>(sauceData, 'ATC001_LoginSuccess');
    await loginPage.login(testData.user, testData.password);
    await inventoryPage.expectLoaded();
    expect(await inventoryPage.itemCount()).toBeGreaterThan(0);
  });

  /**
   * Test to verify that a locked out user displays the appropriate error message.
   */
  test('Locked user sees error message.', async ({ loginPage }) => {
    const testData = getTestData<ATC001_Login>(sauceData, 'ATC001_LoginLocked');
    await loginPage.login(testData.user, testData.password);
    await loginPage.expectErrorMessage('locked out');
  });

  test('Invalid credentials display an error message.', async ({ loginPage }) => {
    const testData = getTestData<ATC001_Login>(sauceData, 'ATC001_LoginInvalid');
    await loginPage.login(testData.user, testData.password);
    await loginPage.expectErrorMessage('Username and password do not match');
  });

  /**
   * Test to verify that adding a product from the inventory updates the shopping cart counter.
   */
  test('Adding a product updates the cart counter.', async ({ loginPage, inventoryPage }) => {
    const testData = getTestData<ATC001_Login>(sauceData, 'ATC001_LoginSuccess');
    await loginPage.login(testData.user, testData.password);
    await inventoryPage.addFirstItemToCart();
    await inventoryPage.expectCartCount('1');
  });
});
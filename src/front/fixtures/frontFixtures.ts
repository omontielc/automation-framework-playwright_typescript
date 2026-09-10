import { test as base } from '@playwright/test';
import { LoginPage } from '@front/pages/LoginPage';
import { LoginBlazePage } from '@front/pages/LoginBlazePage';
import { InventoryPage } from '@front/pages/InventoryPage';

/** Re-exports the standard Playwright expect function for convenient use in tests. */
export { expect } from '@playwright/test';

/**
 * Defines the custom fixtures for page objects used across tests.
 */
type Pages = {
  loginPage: LoginPage;
  loginBlazePage: LoginBlazePage;
  inventoryPage: InventoryPage;
};

/**
 * Extended Playwright test instance that automatically initializes and provides
 * Page Object Model fixtures (loginPage and inventoryPage).
 */
export const test = base.extend<Pages>({
  /**
   * Fixture for the LoginPage.
   * Instantiates the LoginPage with the test's page object and makes it available to tests.
   */
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  /**
   * Fixture for the DemoBlaze LoginBlazePage.
   * Instantiates the Page Object and makes it available to tests.
   */
  loginBlazePage: async ({ page }, use) => {
    await use(new LoginBlazePage(page));
  },
  
  /**
   * Fixture for the InventoryPage.
   * Instantiates the InventoryPage with the test's page object and makes it available to tests.
   */
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
});
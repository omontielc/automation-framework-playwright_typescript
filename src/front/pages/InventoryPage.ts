import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from '@front/base/BasePage';
import { InventoryLocators } from '@front/Locators/InventoryLocators';

/**
 * Page Object class representing the Inventory (Products) page of the application.
 */
export class InventoryPage extends BasePage {
  /** Locator for the main page title header. */
  private readonly pageTitle: Locator;
  /** Locator for all inventory/product items displayed on the page. */
  private readonly inventoryItems: Locator;
  /** Locator for the add-to-cart buttons on the product items. */
  private readonly addToCartButtons: Locator;
  /** Locator for the shopping cart badge showing item counts. */
  private readonly cartBadge: Locator;

  /**
   * Creates an instance of the InventoryPage class.
   * @param page - Playwright Page instance used to interact with the browser.
   */
  constructor(page: Page) {
    super(page);
    this.pageTitle = page.locator(InventoryLocators.pageTitle);
    this.inventoryItems = page.locator(InventoryLocators.inventoryItems);
    this.addToCartButtons = page.locator(InventoryLocators.addToCartButtons);
    this.cartBadge = page.locator(InventoryLocators.cartBadge);
  }

  /**
   * Asserts that the inventory page has successfully loaded by verifying the main header text.
   * @returns A promise that resolves when the assertion completes.
   */
  async expectLoaded(): Promise<void> {
    await expect(this.pageTitle).toHaveText('Products');
  }

  /**
   * Gets the total number of inventory items displayed on the page.
   * @returns A promise that resolves with the count of inventory items as a number.
   */
  async itemCount(): Promise<number> {
    return this.inventoryItems.count();
  }

  /**
   * Adds the first available item in the inventory list to the shopping cart.
   * @returns A promise that resolves when the click action completes.
   */
  async addFirstItemToCart(): Promise<void> {
    await this.addToCartButtons.first().click();
  }

  /**
   * Asserts that the shopping cart badge displays the expected item count.
   * @param count - The expected text or number representation inside the cart badge.
   * @returns A promise that resolves when the assertion completes.
   */
  async expectCartCount(count: string): Promise<void> {
    await expect(this.cartBadge).toHaveText(count);
  }
}
/**
 * Object containing the locator selectors and values for the Inventory page elements.
 */
export const InventoryLocators = {
  /** Selector for the main page title header. */
  pageTitle: '.title',
  /** Selector for the inventory items container. */
  inventoryItems: '.inventory_item',
  /** Selector for the add-to-cart buttons. */
  addToCartButtons: 'button[id^="add-to-cart"]',
  /** Selector for the shopping cart badge. */
  cartBadge: '.shopping_cart_badge',
} as const;
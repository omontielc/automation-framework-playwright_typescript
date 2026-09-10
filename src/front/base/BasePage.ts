import { Page } from '@playwright/test';

/**
 * Abstract base class that encapsulates common methods and behaviors
 * for the Page Object Model (POM).
 */
export abstract class BasePage {
  /**
   * Creates an instance of the BasePage class.
   * @param page - Playwright Page instance used to interact with the browser.
   */
  constructor(protected readonly page: Page) {}

  /**
   * Navigates to a specific path or URL within the application.
   * @param path - Relative path or absolute URL to navigate to (defaults to root '/').
   * @returns A promise that resolves when the navigation is complete.
   */
  async goto(path: string = '/'): Promise<void> {
    await this.page.goto(path);
  }

  /**
   * Retrieves the title of the current page.
   * @returns A promise that resolves with the page title as a string.
   */
  async title(): Promise<string> {
    return this.page.title();
  }
}
import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from '@front/base/BasePage';
import { LoginLocators } from 'src/front/Locators/LoginLocators';

/**
 * Page Object class representing the Login page of the application.
 */
export class LoginPage extends BasePage {
  /** Locator for the username input field. */
  private readonly usernameInput: Locator;
  /** Locator for the password input field. */
  private readonly passwordInput: Locator;
  /** Locator for the login submission button. */
  private readonly loginButton: Locator;
  /** Locator for the error message container. */
  private readonly errorMessage: Locator;

  /**
   * Creates an instance of the LoginPage class.
   * @param page - Playwright Page instance used to interact with the browser.
   */
  constructor(page: Page) {
    super(page);
    this.usernameInput = page.getByPlaceholder(LoginLocators.usernameInput);
    this.passwordInput = page.getByPlaceholder(LoginLocators.passwordInput);
    this.loginButton = page.getByRole('button', { name: LoginLocators.loginButton });
    this.errorMessage = page.locator(LoginLocators.errorMessage);
  }

  /**
   * Asserts that the login form is ready for interaction.
   */
  async expectLoaded(): Promise<void> {
    await expect(this.loginButton).toBeVisible();
  }

  /**
   * Performs the login action using the provided credentials.
   * @param username - The username to enter into the login form.
   * @param password - The password to enter into the login form.
   * @returns A promise that resolves when the login steps have completed.
   */
  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  /**
   * Asserts that the error message container contains the expected text.
   * @param text - The expected error message substring or text.
   * @returns A promise that resolves when the assertion completes.
   */
  async expectErrorMessage(text: string): Promise<void> {
    await expect(this.errorMessage).toContainText(text);
  }
}
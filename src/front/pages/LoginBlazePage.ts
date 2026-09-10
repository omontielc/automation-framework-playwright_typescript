import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from '@front/base/BasePage';
import { LoginBlazeLocators } from '@front/Locators/LoginBlazeLocators';

/**
 * Page Object class representing the DemoBlaze login and logout flow.
 */
export class LoginBlazePage extends BasePage {
  /** Locator for the login link in the main navigation. */
  private readonly loginLink: Locator;
  /** Locator for the login modal. */
  private readonly loginDialog: Locator;
  /** Locator for the username input field. */
  private readonly usernameInput: Locator;
  /** Locator for the password input field. */
  private readonly passwordInput: Locator;
  /** Locator for the login submission button. */
  private readonly loginButton: Locator;
  /** Locator for the logout link displayed after authentication. */
  private readonly logoutLink: Locator;

  /**
   * Creates an instance of the LoginBlazePage class.
   * @param page - Playwright Page instance used to interact with the browser.
   */
  constructor(page: Page) {
    super(page);
    this.loginLink = page.getByRole('link', { name: LoginBlazeLocators.loginLink });
    this.loginDialog = page.locator(LoginBlazeLocators.loginDialog);
    this.usernameInput = page.locator(LoginBlazeLocators.usernameInput);
    this.passwordInput = page.locator(LoginBlazeLocators.passwordInput);
    this.loginButton = this.loginDialog.getByRole('button', { name: LoginBlazeLocators.loginButton });
    this.logoutLink = page.getByRole('link', { name: LoginBlazeLocators.logoutLink });
  }

  /**
   * Opens the login modal and verifies that the login form is ready.
   */
  async expectLoaded(): Promise<void> {
    await this.loginLink.click();
    await expect(this.loginDialog).toBeVisible();
    await expect(this.usernameInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
  }

  /**
   * Performs the login action using the provided credentials.
   * @param username - The username to enter into the login form.
   * @param password - The password to enter into the login form.
   */
  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  /**
   * Asserts that the authenticated user is displayed in the navigation.
   * @param username - The username expected in the welcome message.
   */
  async expectLoggedIn(username: string): Promise<void> {
    await expect(this.logoutLink).toBeVisible();
    await expect(this.page.getByRole('link', { name: `Welcome ${username}` })).toBeVisible();
  }

  /**
   * Logs out the current user.
   */
  async logout(): Promise<void> {
    await this.logoutLink.click();
  }

  /**
   * Asserts that the authenticated navigation options are no longer displayed.
   */
  async expectLoggedOut(): Promise<void> {
    await expect(this.logoutLink).toBeHidden();
    await expect(this.page.getByRole('link', { name: LoginBlazeLocators.loginLink })).toBeVisible();
  }
}
/**
 * Object containing the locator selectors and values for the Login page elements.
 */
export const LoginLocators = {
  /** Selector for the username input field placeholder. */
  usernameInput: 'Username',
  /** Selector for the password input field placeholder. */
  passwordInput: 'Password',
  /** Selector for the login button name. */
  loginButton: 'Login',
  /** Selector for the error message element. */
  errorMessage: '[data-test="error"]',
} as const;
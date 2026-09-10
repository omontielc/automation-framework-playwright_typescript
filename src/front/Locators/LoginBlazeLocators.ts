/**
 * Object containing the locator selectors and values for the DemoBlaze login flow.
 */
export const LoginBlazeLocators = {
  /** Selector for the login link in the main navigation. */
  loginLink: 'Log in',
  /** Selector for the login modal. */
  loginDialog: '#logInModal',
  /** Selector for the username input field. */
  usernameInput: '#loginusername',
  /** Selector for the password input field. */
  passwordInput: '#loginpassword',
  /** Selector for the login submission button. */
  loginButton: 'Log in',
  /** Selector for the logout link displayed after authentication. */
  logoutLink: 'Log out',
} as const;
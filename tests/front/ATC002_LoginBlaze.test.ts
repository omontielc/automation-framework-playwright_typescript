import { test } from '@front/fixtures/frontFixtures';

/**
 * Test suite for DemoBlaze login and logout.
 */
test.describe('DemoBlaze - Login and Logout', () => {
  /**
   * Hook that runs before each test to navigate to the DemoBlaze home page.
   */
  test.beforeEach(async ({ loginBlazePage }) => {
    await loginBlazePage.goto('https://demoblaze.com/');
  });

  /**
   * Test to verify the complete login and logout flow.
   */
  test('User can login and logout successfully.', async ({ loginBlazePage }) => {
    await loginBlazePage.expectLoaded();
    await loginBlazePage.login('admin', 'admin');
    await loginBlazePage.expectLoggedIn('admin');
    await loginBlazePage.logout();
    await loginBlazePage.expectLoggedOut();
  });
});
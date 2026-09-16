import { test } from '@front/fixtures/frontFixtures';
import { config } from '../../src/config/env'; 

/**
 * Test suite for DemoBlaze login and logout.
 */
test.describe('DemoBlaze - Login and Logout', () => {
  /**
   * Hook that runs before each test to navigate to the DemoBlaze home page.
   */
  test.beforeEach(async ({ loginBlazePage }) => {
    await loginBlazePage.goto(config.baseUrlUIBlaze);
  });

  /**
   * Test to verify the complete login and logout flow.
   */
  test('User can login and logout successfully.', async ({ loginBlazePage }) => {
    await loginBlazePage.expectLoaded();
    await loginBlazePage.login(config.blaze.user, config.blaze.password);
    await loginBlazePage.expectLoggedIn(config.blaze.user);
    await loginBlazePage.logout();
    await loginBlazePage.expectLoggedOut();
  });
});
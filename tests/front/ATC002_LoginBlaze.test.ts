
import { test, expect } from '@front/fixtures/frontFixtures';
import { config } from '@config/env';
import { getTestData } from '@utils/testDataReader';
import {ATC002_Login } from '@front/types/demoBlaze';
import blazeData from '@testData/demoBlazeTestData.json';

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
    const testData = getTestData<ATC002_Login>(blazeData, 'ATC002_Login');
    await loginBlazePage.expectLoaded();
    await loginBlazePage.login(testData.user, testData.password);
    await loginBlazePage.expectLoggedIn(testData.user);
    await loginBlazePage.logout();
    await loginBlazePage.expectLoggedOut();
  });
});
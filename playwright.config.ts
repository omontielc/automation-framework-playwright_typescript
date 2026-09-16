import { defineConfig, devices } from '@playwright/test';
import { config } from './src/config/env';

/**
 * Central framework configuration.
 * Conceptually equivalent to testng.xml + maven-surefire-plugin in your Java framework.
 *
 * Environment variables are loaded and validated in src/config/env.ts,
 * which runs as soon as it's imported below — so no dotenv setup is needed here.
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 4 : undefined,
  reporter: [
    ['html', { open: 'never' }],
    ['list'],
    ['allure-playwright', { outputFolder: 'allure-results' }],
  ],
  use: {
    baseURL: config.baseUrlUISauce,
    trace: 'on-first-retry',       // trace viewer ~ your Allure @Attachment
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      testDir: './tests/front',
      use: { ...devices['Desktop Chrome'], baseURL: config.baseUrlUISauce },
    },
    // {
    //   name: 'firefox',
    //   testDir: './tests/front',
    //   use: { ...devices['Desktop Firefox'], baseURL: config.baseUrlUISauce },
    // },
    {
      name: 'backend',
      testDir: './tests/back',
      use: { baseURL: config.baseUrlApi },
    },
  ],
});
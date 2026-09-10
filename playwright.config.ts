import { defineConfig, devices } from '@playwright/test';

/**
 * Configuración central del framework.
 * Equivalente conceptual al testng.xml + maven-surefire-plugin de tu framework Java.
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,          // reemplaza tu solución manual con ThreadLocal
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 4 : undefined,
  reporter: [
    ['html', { open: 'never' }],   // equivalente al reporte Allure que ya usas
    ['list'],
  ],
  use: {
    baseURL: process.env.BASE_URL ?? 'https://www.saucedemo.com',
    trace: 'on-first-retry',       // trace viewer ~ tus @Attachment de Allure
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      testDir: './tests/front',
      use: { ...devices['Desktop Chrome'], 
            baseURL: process.env.BASE_URL ?? 'https://www.saucedemo.com',
      },
    },
    // {
    //   name: 'firefox',
    //   testDir: './tests/front',
    //   use: { ...devices['Desktop Firefox'], 
    //         baseURL: process.env.BASE_URL ?? 'https://www.saucedemo.com',
    //   },
    // },
    {
      name: 'backend',
      testDir: './tests/back',
      use: {
        baseURL: 'https://jsonplaceholder.typicode.com',
      },
    },
  ],
});

import dotenv from 'dotenv';
import path from 'path';

/**
 * Central configuration file.
 * Single source of truth for all environment variables used across the framework.
 * Conceptually equivalent to a Properties/Config class in your Java framework.
 *
 * The .env file is loaded here (not in playwright.config.ts) to guarantee
 * it runs before any variable below is read.
 */

// Load the .env file for the target environment (default: qa)
// Usage: TEST_ENV=qa npx playwright test  (or via cross-env in package.json)
const env = process.env.TEST_ENV || 'qa';
dotenv.config({ path: path.resolve(__dirname, `../../.env.${env}`) });

// Throws a clear error if a required environment variable is missing,
// instead of letting the framework fail silently later with 'undefined'.
function required(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
}

export const config = {
  // Base URLs for UI (front) and API (back) test targets
  baseUrlUISauce: required('BASE_URL_UI_SAUCE'),
  baseUrlUIBlaze: required('BASE_URL_UI_BLAZE'),
  baseUrlApi: required('BASE_URL_API'),

  // SauceDemo credentials
  sauce: {
    user: required('SAUCE_USER'),
    password: required('SAUCE_PASSWORD'),
    lockedUser: required('SAUCE_LOCKED_USER'),
  },

  // DemoBlaze credentials
  blaze: {
    user: required('BLAZE_USER'),
    password: required('BLAZE_PASSWORD'),
  },
};
/**
 * Utility functions to generate random test data.
 * Avoids hardcoded values that could collide across parallel test runs
 * (e.g. creating a product or user with the same name in two workers at once).
 */
 
// Generates a random email using a timestamp to guarantee uniqueness
export function randomEmail(): string {
  return `qa.test.${Date.now()}@example.com`;
}
 
// Generates a random alphanumeric string of a given length (default: 8)
export function randomString(length: number = 8): string {
  return Math.random().toString(36).substring(2, 2 + length);
}
 
// Generates a random integer between min and max (inclusive)
export function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
 
// Generates a random product name, useful for ProductService create/update tests
export function randomProductName(prefix: string = 'Product'): string {
  return `${prefix}_${randomString(6)}`;
}
 
// Generates a random username, useful for UserService create tests
export function randomUsername(prefix: string = 'user'): string {
  return `${prefix}_${randomString(6)}`;
}
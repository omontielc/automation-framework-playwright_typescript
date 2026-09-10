import { test, expect } from '@playwright/test';
import { UserService } from '@back/services/UserService';
import { User } from '@back/types/User';

/**
 * Test suite for JSONPlaceholder Users API endpoints.
 */
test.describe('JSONPlaceholder - Users API', () => {
  let userService: UserService;

  /**
   * Hook that runs before each test to initialize the UserService instance 
   * using Playwright's built-in request context.
   */
  test.beforeEach(async ({ request }) => {
    userService = new UserService(request);
  });

  /**
   * Test to verify that a GET request to /users returns a 200 status code 
   * and a non-empty list of users.
   */
  test('GET /users returns status 200 and a non-empty list', async () => {
    const response = await userService.getAll();
    expect(response.status()).toBe(200);

    const users: User[] = await response.json();
    expect(users.length).toBeGreaterThan(0);
  });

  /**
   * Test to verify that a GET request to /users/1 returns a specific user 
   * matching the expected shape, types, and structure.
   */
  test('GET /users/1 returns a specific user with the expected shape', async () => {
    const response = await userService.getById(1);
    const user: User = await response.json();

    // Light schema validation via typing + assertions,
    // conceptually equivalent to JSON Schema validation with REST Assured
    expect(user).toMatchObject({
      id: 1,
      name: expect.any(String),
      username: expect.any(String),
      email: expect.stringContaining('@'),
    });
    expect(user.address).toHaveProperty('city');
  });

  /**
   * Test to verify that a POST request to create a user successfully returns 
   * a 201 status code and echoes the created user details.
   */
  test('POST /users creates a user and returns 201', async () => {
    const response = await userService.create({
      name: 'Osiris QA',
      username: 'osiris.qa',
      email: 'osiris.qa@example.com',
    });

    expect(response.status()).toBe(201);
    const created = await response.json();
    expect(created.name).toBe('Osiris QA');
  });
});

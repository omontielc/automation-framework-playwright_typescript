import { APIResponse } from '@playwright/test';
import { BaseApi } from '@back/base/BaseApi';
import { CreateUserPayload } from '@back/types/User';

/**
 * Service class that handles API requests related to User operations.
 */
export class UserService extends BaseApi {
  /**
   * Retrieves a list of all users.
   * @returns A promise that resolves with the APIResponse containing the users data.
   */
  async getAll(): Promise<APIResponse> {
    return this.request.get('/users');
  }

  /**
   * Retrieves a specific user by their unique identifier.
   * @param id - The unique numeric identifier of the user.
   * @returns A promise that resolves with the APIResponse containing the user data.
   */
  async getById(id: number): Promise<APIResponse> {
    return this.request.get(`/users/${id}`);
  }

  /**
   * Creates a new user with the provided payload data.
   * @param payload - The user creation payload containing name, username, and email.
   * @returns A promise that resolves with the APIResponse of the created user.
   */
  async create(payload: CreateUserPayload): Promise<APIResponse> {
    return this.request.post('/users', { data: payload });
  }
}
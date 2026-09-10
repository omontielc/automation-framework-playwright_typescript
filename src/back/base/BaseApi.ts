import { APIRequestContext } from '@playwright/test';

/**
 * Abstract base class that encapsulates common HTTP request handling properties
 * for API testing using Playwright's APIRequestContext.
 */
export abstract class BaseApi {
  /**
   * Creates an instance of the BaseApiClient class.
   * @param request - Playwright APIRequestContext instance used to send HTTP requests.
   */
  constructor(protected readonly request: APIRequestContext) {}
}
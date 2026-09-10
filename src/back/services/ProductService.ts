import { APIResponse } from '@playwright/test';
import { BaseApi } from '@back/base/BaseApi';
import { CreateProductPayload } from '@back/types/Product';

/**
 * Service class that handles API requests related to Product operations.
 */
export class ProductService extends BaseApi {
  private readonly productsEndpoint = 'https://fakestoreapi.com/products';

  /**
   * Retrieves all products.
   * @returns A promise that resolves with the APIResponse containing products data.
   */
  async getAll(): Promise<APIResponse> {
    return this.request.get(this.productsEndpoint);
  }

  /**
   * Creates a new product with the provided payload data.
   * @param payload - The product creation payload.
   * @returns A promise that resolves with the APIResponse of the created product.
   */
  async create(payload: CreateProductPayload): Promise<APIResponse> {
    return this.request.post(this.productsEndpoint, { data: payload });
  }
}
import { test, expect } from '@playwright/test';
import { ProductService } from '@back/services/ProductService';
import { Product } from '@back/types/Product';

/**
 * Test suite for Fake Store API Products endpoints.
 */
test.describe('Fake Store API - Products', () => {
  let productService: ProductService;

  /**
   * Hook that runs before each test to initialize the ProductService instance.
   */
  test.beforeEach(async ({ request }) => {
    productService = new ProductService(request);
  });

  /**
   * Test to verify that GET /products returns a 200 status code and products.
   */
  test('GET /products returns status 200 and a non-empty list', async () => {
    const response = await productService.getAll();
    expect(response.status()).toBe(200);

    const products: Product[] = await response.json();
    expect(products.length).toBeGreaterThan(0);
    expect(products[0]).toMatchObject({
      id: expect.any(Number),
      title: expect.any(String),
      price: expect.any(Number),
      category: expect.any(String),
      image: expect.any(String),
    });
  });

  /**
   * Test to verify that POST /products returns a 201 status code and product data.
   */
  test('POST /products creates a product and returns 201', async () => {
    const product = {
      title: 'QA Test Product',
      price: 29.99,
      description: 'Product created by an automated API test.',
      category: 'electronics',
      image: 'https://example.com/qa-product.png',
    };

    const response = await productService.create(product);
    expect(response.status()).toBe(201);

    const created: Product = await response.json();
    expect(created).toMatchObject({
      id: expect.any(Number),
      title: product.title,
      price: product.price,
      category: product.category,
    });
  });
});
import { test, expect } from '@playwright/test';
import { ProductService } from '@back/services/ProductService';
import { Product, CreateProductPayload } from '@back/types/Product';
import { getTestData } from '@utils/testDataReader';
import productApiData from '@back/testData/productApiTestData.json';

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
    const testData = getTestData<CreateProductPayload>(productApiData, 'ATC002_CreateProduct');

    const response = await productService.create(testData);
    expect(response.status()).toBe(201);

    const created: Product = await response.json();
    expect(created).toMatchObject({
      id: expect.any(Number),
      title: testData.title,
      price: testData.price,
      category: testData.category,
    });
  });
});
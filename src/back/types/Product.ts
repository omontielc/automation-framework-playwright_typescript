/**
 * Represents the rating details of a product.
 */
export interface ProductRating {
  /** Average product rating. */
  rate: number;
  /** Number of submitted ratings. */
  count: number;
}

/**
 * Represents a complete product returned by Fake Store API.
 */
export interface Product {
  /** Unique identifier of the product. */
  id: number;
  /** Product name. */
  title: string;
  /** Product price. */
  price: number;
  /** Product description. */
  description: string;
  /** Product category. */
  category: string;
  /** Product image URL. */
  image: string;
  /** Product rating information. */
  rating: ProductRating;
}

/**
 * Represents the payload required to create a product.
 */
export interface CreateProductPayload {
  /** Product name. */
  title: string;
  /** Product price. */
  price: number;
  /** Product description. */
  description: string;
  /** Product category. */
  category: string;
  /** Product image URL. */
  image: string;
}
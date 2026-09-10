/**
 * Represents the address details of a user.
 */
export interface Address {
  /** Street name. */
  street: string;
  /** Suite, apartment, or unit number. */
  suite: string;
  /** City name. */
  city: string;
  /** Postal or zip code. */
  zipcode: string;
}

/**
 * Represents a complete User entity with identification and location data.
 */
export interface User {
  /** Unique identifier for the user. */
  id: number;
  /** Full name of the user. */
  name: string;
  /** Handle or username for the account. */
  username: string;
  /** Electronic mail address. */
  email: string;
  /** Physical address associated with the user. */
  address: Address;
}

/**
 * Represents the payload data required to create a new user.
 */
export interface CreateUserPayload {
  /** Full name of the user to be created. */
  name: string;
  /** Username for the new account. */
  username: string;
  /** Email address for the new account. */
  email: string;
}
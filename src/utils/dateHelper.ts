/**
 * Utility functions for date formatting and manipulation in tests.
 */

// Returns today's date formatted as YYYY-MM-DD
export function todayFormatted(): string {
  return new Date().toISOString().split('T')[0];
}

// Adds a given number of days to today and returns it formatted as YYYY-MM-DD
export function addDaysFormatted(days: number): string {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString().split('T')[0];
}
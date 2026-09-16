/**
 * Generic test data reader.
 * Loads a JSON test data file and returns the entry matching the given test case name.
 */
export function getTestData<T>(data: Record<string, T>, testCaseName: string): T {
  const testCase = data[testCaseName];
  if (!testCase) {
    throw new Error(`No test data found for test case: ${testCaseName}`);
  }
  return testCase;
}
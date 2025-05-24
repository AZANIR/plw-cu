// Environment configuration for tests
export const config = {
  baseUrl: process.env.BASE_URL || 'https://www.google.com',
  browserOptions: {
    headless: process.env.HEADLESS !== 'false',
    slowMo: process.env.SLOW_MO ? parseInt(process.env.SLOW_MO) : 0,
  },
  testomatio: {
    apiKey: process.env.TESTOMATIO || '',
    projectId: process.env.TESTOMATIO_PROJECT || '',
  },
  // Add more configuration as needed
};

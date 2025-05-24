module.exports = {
  // Testomat.io configuration
  testomatioReporter: {
    apiKey: process.env.TESTOMATIO || 'YOUR_API_KEY',
    projectId: process.env.TESTOMATIO_PROJECT || 'YOUR_PROJECT_ID',
    title: 'Playwright + Cucumber Test Run',
    uploadScreenshots: true,
    sendTestRunSummary: true
  }
};

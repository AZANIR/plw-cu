import { After, Before, BeforeAll, AfterAll, Status } from '@cucumber/cucumber';
import { getPage } from './world';
import fs from 'fs';
import path from 'path';

// Ensure necessary directories exist
BeforeAll(async function() {
  const dirs = ['screenshots', 'test-results'];
  
  for (const dir of dirs) {
    const dirPath = path.join(process.cwd(), dir);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
  }
  
  // Log start of test run for Testomat.io
  console.log('Starting test execution...');
});

// Before each scenario
Before(async function({ pickle }) {
  // You can use pickle.tags to get the tags associated with the scenario
  // e.g., find Testomat.io ticket ID tags
  const testomatioTag = pickle.tags.find(tag => /^@[A-Z]+-\d+$/.test(tag.name));
  if (testomatioTag) {
    console.log(`Running test for ticket: ${testomatioTag.name.substring(1)}`);
  }
});

// After each scenario
After(async function({ result }) {
  // Take final screenshot on failure
  if (result && result.status === Status.FAILED) {
    const page = getPage();
    if (page) {
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const screenshotPath = path.join(
        process.cwd(), 
        'screenshots', 
        `failure-${timestamp}.png`
      );
      
      await page.screenshot({ path: screenshotPath, fullPage: true });
      
      // Attach to report
      const buffer = fs.readFileSync(screenshotPath);
      this.attach(buffer, 'image/png');
    }
  }
});

// After all scenarios
AfterAll(async function() {
  console.log('Test execution completed.');
});

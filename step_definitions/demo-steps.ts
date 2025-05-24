import { Given, When, Then, World as CucumberWorld } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { getPage, getWorld } from '../support/world';
import path from 'path';
import fs from 'fs';

// Make sure screenshots directory exists
const screenshotsDir = path.join(process.cwd(), 'screenshots');
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

async function takeScreenshot(stepName: string): Promise<string> {
  const page = getPage();
  const world = getWorld() as CucumberWorld;
  
  // Create a unique filename
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const fileName = `${timestamp}-${stepName.replace(/\s+/g, '-')}.png`;
  const filePath = path.join(screenshotsDir, fileName);
  
  // Take screenshot
  await page.screenshot({ path: filePath, fullPage: true });
  
  // Attach screenshot to report if there's an attach function
  if (world && typeof world.attach === 'function') {
    const buffer = fs.readFileSync(filePath);
    world.attach(buffer, 'image/png');
  }
  
  return filePath;
}

Given('I navigate to {string}', async function(url) {
  const page = getPage();
  await page.goto(url);
  await takeScreenshot('navigate-to-' + url.replace(/[^a-zA-Z0-9]/g, '-'));
});

When('I see the search input', async function() {
  const page = getPage();
  await page.waitForSelector('textarea[name="q"]');
  await takeScreenshot('search-input-visible');
});

Then('the page title should contain {string}', async function(expectedTitle) {
  const page = getPage();
  const title = await page.title();
  expect(title).toContain(expectedTitle);
  await takeScreenshot('page-title-check');
});

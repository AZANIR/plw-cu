import { Before, After, setWorldConstructor, World as CucumberWorld } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from '@playwright/test';

let browser: Browser;
let context: BrowserContext;
let page: Page;
let world: CucumberWorld;

// Custom world class
class CustomWorld extends CucumberWorld {
  constructor(options: any) {
    super(options);
  }
}

// Set the custom world constructor
setWorldConstructor(CustomWorld);

// Get the current page
export function getPage(): Page {
  return page;
}

// Get the current world
export function getWorld(): CucumberWorld {
  return world;
}

// Before hook - runs before each scenario
Before(async function(this: CucumberWorld) {
  world = this;
  browser = await chromium.launch({
    headless: process.env.HEADLESS !== 'false',
  });
  context = await browser.newContext();
  page = await context.newPage();
});

// After hook - runs after each scenario
After(async function() {
  await page.close();
  await context.close();
  await browser.close();
});

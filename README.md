# Playwright + Cucumber + Testomat.io Template

This is a template project for running automated tests with Playwright and Cucumber with test reporting to Testomat.io.

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

## Setup

1. Clone this repository
2. Install dependencies:

```bash
npm install
```

3. Install Playwright browsers:

```bash
npx playwright install --with-deps chromium
```

## Running Tests

### Run tests locally

```bash
npm test
```

### Run tests with Testomat.io reporting

```bash
TESTOMATIO=YOUR_API_KEY npm run test:report
```

Replace `YOUR_API_KEY` with your actual Testomat.io API key.

## Project Structure

- `features/`: Contains Cucumber feature files
- `step_definitions/`: Contains step definitions for the features
- `support/`: Contains support files like World definition and hooks
- `.github/workflows/`: Contains GitHub Actions workflow for CI/CD

## Testomat.io Integration

To integrate with Testomat.io:

1. Sign up for an account at [Testomat.io](https://testomat.io/)
2. Get your API key from the dashboard
3. Set your API key in the GitHub repository secrets as `TESTOMATIO_API_KEY`
4. Set your project ID in the GitHub repository secrets as `TESTOMATIO_PROJECT_ID`

## Adding New Tests

1. Create a new feature file in the `features/` directory
2. Add the corresponding step definitions in `step_definitions/`
3. Add the Testomat.io issue ID in your feature file as a tag (e.g., `@DEMO-1`)

Example:

```gherkin
Feature: New Feature

  @PROJECT-123
  Scenario: New scenario
    Given I navigate to "https://example.com"
    When I click on the button
    Then I should see a success message
```

# Playwright (TS binding) + Cucumber (BDD)

Cucumber is a popular behavior-driven development (BDD) tool that allows developers and stakeholders to collaborate on defining and testing application requirements in a human-readable format. 
TypeScript is a powerful superset of JavaScript that adds optional static typing, making it easier to catch errors before runtime. By combining these two tools, we can create more reliable and maintainable tests.

## Features

1. Awesome report with screenshots, videos & logs
2. Execute tests on multiple environments 
3. Parallel execution
4. Rerun only failed features
5. Retry failed tests on CI
6. Github Actions integrated with downloadable report
7. Page object model

## Sample report
![image](https://github.com/ortoniKC/Playwright_Cucumber_TS/assets/58769833/da2d9f5a-85e7-4695-8ce2-3378b692afc4)


## Project structure

- .github -> yml file to execute the tests in GitHub Actions
- src -> Contains all the features & Typescript code
- test-results -> Contains all the reports related file

## Reports

1. [Mutilple Cucumber Report](https://github.com/WasiqB/multiple-cucumber-html-reporter)
2. Default Cucumber report
3. [Logs](https://www.npmjs.com/package/winston)
4. Screenshots of failure
5. [Testomatio Reporter](https://testomatio.github.io/reporter/) - for sending test results to Testomatio

## Testomatio Integration

This project includes integration with Testomatio for test case management and reporting. To enable it:

1. Copy the example environment file:
   ```
   cp src/helper/env/.env.example src/helper/env/.env.prod
   ```

2. Add your Testomatio API key and URL in the environment file:
   ```
   TESTOMATIO_URL = https://your-testomatio-instance.com
   TESTOMATIO = your_testomatio_api_key
   ```

3. Alternatively, you can pass these values directly in the command line:
   ```
   cross-env TESTOMATIO_URL=https://your-instance.testomatio.io TESTOMATIO=your_api_key ENV=prod cucumber-js -f @testomatio/reporter/lib/adapter/cucumber.js --config=config/cucumber.js
   ```

> **Security Note**: Never commit your Testomatio API key to version control. The environment files (except .env.example) are already added to .gitignore to prevent accidental commits.

## Project structure

- .github -> yml file to execute the tests in GitHub Actions
- src -> Contains all the features & Typescript code
- test-results -> Contains all the reports related file

### Folder structure
0. `src\pages` -> All the page (UI screen)
1. `src\test\features` -> write your features here
2. `src\test\steps` -> Your step definitions goes here
3. `src\hooks\hooks.ts` -> Browser setup and teardown logic
4. `src\hooks\pageFixture.ts` -> Simple way to share the page objects to steps
5. `src\helper\env` -> Multiple environments are handled
6. `src\helper\types` -> To get environment code suggestions
7. `src\helper\report` -> To generate the report
8. `config/cucumber.js` -> One file to do all the magic
9. `package.json` -> Contains all the dependencies
10. `src\helper\auth` -> Storage state (Auth file)
11. `src\helper\util` -> Read test data from json & logger

## Tutorials
1. Learn Playwright - [Playwright - TS](https://youtube.com/playlist?list=PL699Xf-_ilW7EyC6lMuU4jelKemmS6KgD)
2. BDD in detail - [TS binding](https://youtube.com/playlist?list=PL699Xf-_ilW6KgK-S1l9ynOnBGiZl2Bsk)

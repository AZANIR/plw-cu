module.exports = {
    default: {
        timeout: 30000,
    paths: ['features/**/*.feature'],
    require: ['step_definitions/**/*.ts', 'support/**/*.ts'],
    requireModule: ['ts-node/register'],
        format: [
        'progress',
      'summary',
      'progress-bar',
      './node_modules/@testomatio/reporter/lib/adapter/cucumber.js'   ],
    formatOptions: {
      snippetInterface: 'async-await'
    }
    // publishQuiet option removed as it's deprecated
  }
};

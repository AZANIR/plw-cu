import { Formatter, IFormatterOptions } from '@cucumber/cucumber';
import { TestomatioReporter } from '@testomatio/reporter';

/**
 * Custom formatter that integrates with Testomat.io
 */
export default class CustomReporter extends Formatter {
  private reporter: any;

  constructor(options: IFormatterOptions) {
    super(options);
    
    // Initialize Testomat.io reporter
    const apiKey = process.env.TESTOMATIO;
    
    if (apiKey) {
      this.reporter = new TestomatioReporter(apiKey, {
        projectId: process.env.TESTOMATIO_PROJECT,
        uploadScreenshots: true
      });
    }
    
    // Handle events
    options.eventBroadcaster.on('envelope', envelope => {
      // Handle various Cucumber event types for reporting to Testomat.io
      if (envelope.testCaseStarted && this.reporter) {
        // Test case started
        console.log(`Starting test case: ${envelope.testCaseStarted.id}`);
      }
      
      if (envelope.testCaseFinished && this.reporter) {
        // Test case finished
        console.log(`Finishing test case: ${envelope.testCaseFinished.testCaseStartedId}`);
      }
      
      // You can handle other event types as needed
    });
  }
}

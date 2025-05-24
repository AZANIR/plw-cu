// Type definitions for @testomatio/reporter
declare module '@testomatio/reporter' {
  export class TestomatioReporter {
    constructor(apiKey: string, options?: {
      projectId?: string;
      uploadScreenshots?: boolean;
      sendTestRunSummary?: boolean;
      [key: string]: any;
    });
  }
}

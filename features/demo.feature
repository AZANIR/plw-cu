Feature: Demo Feature
  As a user
  I want to test a basic scenario
  So that I can verify my setup is working

  @DEMO-1
  Scenario: Successfully loading the Google homepage
    Given I navigate to "https://www.google.com"
    When I see the search input
    Then the page title should contain "Google"

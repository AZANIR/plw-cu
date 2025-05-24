#!/bin/bash
echo "Running tests with Testomat.io reporting..."

# Check if API key is provided
if [ -z "$1" ]; then
  echo "ERROR: Please provide your Testomat.io API key as an argument"
  echo "Example: ./run-tests.sh YOUR_API_KEY"
  exit 1
fi

# Set environment variables
export TESTOMATIO="$1"
export NODE_ENV="test"

# Run tests
npx cucumber-js

echo "Tests completed!"

#!/bin/bash

# Test Verification Script
# Runs all tests to verify the test setup is working correctly

set -e

echo "🧪 Running Test Verification..."
echo ""

echo "📦 Unit and Integration Tests..."
npm run test -- --run

echo ""
echo "✅ All unit and integration tests passed!"
echo ""
echo "📝 Note: To run E2E tests, use:"
echo "   npm run test:e2e        # Headless"
echo "   npm run test:e2e:open   # Interactive"
echo ""
echo "✨ Test setup verified successfully!"


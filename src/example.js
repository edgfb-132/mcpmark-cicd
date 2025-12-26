// This file has intentional linting errors to test the workflow
const unusedVariable = "I'm not used"

function testFunction() {
  console.log("This should trigger a no-console warning")
  return "This uses double quotes which should fail"
}

// Missing semicolon at the end
const anotherVariable = "No semicolon"

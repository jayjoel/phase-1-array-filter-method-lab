// Code your solution here
// Find drivers whose names match the provided string (case insensitive)
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  // Find drivers whose names start with the provided letters
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
  }
  
  // Find drivers whose name matches the provided string
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  
  
  
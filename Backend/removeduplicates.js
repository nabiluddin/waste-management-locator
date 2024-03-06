const locations = require('./locations.json');

// Create a Set to track unique names
const uniqueNames = new Set();

// Use filter to remove duplicates based on the "name" property
const uniqueLocations = locations.filter((location) => {
  // Check if the name is already in the Set
  if (!uniqueNames.has(location.longitude)) {
    // If not, add it to the Set and include the location in the result
    uniqueNames.add(location.longitude);
    return true;
  }
  // If the name is already in the Set, exclude the location from the result
  return false;
});

console.log(uniqueLocations);

// Function to check if a URL matches the conditions
function isValidURL(url) {
    // Regular expression to match valid URLs
    const regex = /^(http|https):\/\/[\w\-]+(\.[\w\-]+)+$/;

    // Test the URL against the regex
    return regex.test(url);
}

// Test URLs
const testURL1 = "http://www.gogle.com";
const testURL2 = "https://subdomain.google.co.uk";
const testURL3 = "ftp://google.com"; // Not valid

// Check and print the result for each test URL
console.log(`URL "${testURL1}" is ${isValidURL(testURL1) ? 'valid' : 'invalid'}`);
console.log(`URL "${testURL2}" is ${isValidURL(testURL2) ? 'valid' : 'invalid'}`);
console.log(`URL "${testURL3}" is ${isValidURL(testURL3) ? 'valid' : 'invalid'}`);

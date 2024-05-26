// Function to validate LinkedIn profile URLs
function isValidLinkedInURL(url) {
    // Regular expression to match valid LinkedIn profile URLs
    const regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

    // Test the URL against the regex
    return regex.test(url);
}

// Test LinkedIn profile URLs
const testURL1 = "https://www.linkedin.com/in/goutamkumar123";
const testURL2 = "https://www.linkedin.com/in/goutam_kumar";
const testURL3 = "https://www.linkedin.com/in/goutam-kumar-123456";
const testURL4 = "https://www.linkedin.com/in/goutam%20kumar"; 
const testURL5 = "https://www.linkedin.com/company/example"; 

// Check and print the result for each test URL
console.log(`URL "${testURL1}" is ${isValidLinkedInURL(testURL1) ? 'valid' : 'invalid'}`);
console.log(`URL "${testURL2}" is ${isValidLinkedInURL(testURL2) ? 'valid' : 'invalid'}`);
console.log(`URL "${testURL3}" is ${isValidLinkedInURL(testURL3) ? 'valid' : 'invalid'}`);
console.log(`URL "${testURL4}" is ${isValidLinkedInURL(testURL4) ? 'valid' : 'invalid'}`);
console.log(`URL "${testURL5}" is ${isValidLinkedInURL(testURL5) ? 'valid' : 'invalid'}`);

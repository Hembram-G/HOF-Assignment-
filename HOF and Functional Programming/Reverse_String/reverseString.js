// Store the input string in a variable
let input = "Goutam Kumar";  // You can change this to any string you want to reverse

 // Define a function to reverse the string
function reverseString(str) {
    return str.split('').reverse().join('');
}

setTimeout(() => {
    let reversedString = reverseString(input);
    console.log(reversedString);
}, 2000);

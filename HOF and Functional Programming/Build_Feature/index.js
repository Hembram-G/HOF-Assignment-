// Original object with items and prices in USD
const pricesInUSD = {
    "item1": 10,
    "item2": 20,
    "item3": 30
};

// Exchange rate from USD to INR
const exchangeRate = 80;

// Function to convert prices from USD to INR
const convertToINR = (priceUSD) => priceUSD * exchangeRate;

// Use map to create a new object with prices converted to INR
const pricesInINR = Object.fromEntries(
    Object.entries(pricesInUSD).map(([item, priceUSD]) => [item, convertToINR(priceUSD)])
);

// Display the converted prices
console.log("Prices in INR:", pricesInINR);

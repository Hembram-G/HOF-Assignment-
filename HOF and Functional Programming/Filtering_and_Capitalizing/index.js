const books = [
    { title: "Book1", author: "goutam", year: 2005 },
    { title: "Book2", author: "sagun", year: 2012 },
    { title: "Book3", author: "niyati", year: 2009 },
    { title: "Book4", author: "ruturaj", year: 2015 }
];

const filteredBooks = books
    .filter(book => book.year >= 2010) // Filter books published on or after 2010
    .map(book => ({ // Capitalize author names
        title: book.title,
        author: book.author.toUpperCase(), // Capitalize author name
        year: book.year
    }));

// Display the filtered books
console.log("Filtered Books:", filteredBooks);

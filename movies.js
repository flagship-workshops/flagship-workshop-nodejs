const usaMovies = [
    {
        title: "The Shining",
        releaseYear: 1980,
        rating: "R",
        country: "USA"
    },
    {
        title: "Gone with the Wind",
        releaseYear: 1939,
        rating: "G",
        country: "USA"
    }
]

// const internationalMovies = [
//     {
//         title: "Skyfall",
//         releaseYear: 2012,
//         rating: "PG-13",
//         country: "United Kingdom"
//     }
// ]

// const allMovies = usaMovies.concat(internationalMovies);

module.exports = {
    getMovies: function () {
        // return allMovies;
        return usaMovies;
    },
    // getUSAMovies: function () {
    //     return usaMovies;
    // }
};
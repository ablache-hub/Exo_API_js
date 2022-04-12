import * as Api from './src/OmdbApi.js'

const movieList = await Api.getMovieList(1);

const movieTitleList = await Api.getMovieTitleListFromTmdb(movieList);

console.log(Api.getMovieDetailedListFromOmdb(movieTitleList))

const promises = Api.getMovieDetailedListFromOmdb(movieTitleList)

const movies = [];
for(let promise of promises){
    const movie = await promise;
    console.log(movie);
    movies.push(movie);
}
console.log(movies);

// console.log(movieTitleList)

// let autoComplete = movieList.items.map((movie) => {
//     return {
//         Tmdb_Id: movie.id,
//         title: movie.title
//     };
// })
// console.log(Api.getMovieTitleList(movieList))

// function searchMovieByTitle(title = '') {
//     return searchMovieByTitleFromOmdb(title)
// }

// console.log(await searchMovieByTitle('The Matrix'))

// .then(movies => movies.filter(m => m.type === "test"))
// const titleList = Api.getMovieTitleList(movieList);
// console.log(titleList);




// const movies = await Promise.all(promises);

import * as Api from './src/OmdbApi.js'

const movieList = await Api.getMovieListFromTmdb(1);

const movieTitleList = await Api.getMoviesTitlesFromTmdbList(movieList);

const promises = Api.getMovieDetailedListFromOmdb(movieTitleList)

// Sauvegarde des détails des films dans un tableau après résolution de chaque promesse
const movies = [];
for(let promise of promises){
    const movie = await promise;
    console.log(movie);
    movies.push(movie);
}
console.log(movies);

// Méthode alternative avec Promise.all
// const movies = await Promise.all(promises);

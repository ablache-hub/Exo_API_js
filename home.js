import * as Api from './src/OmdbApi.js'
import * as fs from 'fs';

const basicMovieList = await Api.getBasicMovieList(1);

// const movieTitleList = await Api.getMoviesTitlesFromTmdbList(movieList);

const promisesDetailedMovieList = Api.getDetailedMovieList(basicMovieList)

// Sauvegarde des détails des films dans un tableau après résolution de chaque promesse
const moviesFinalList = [];
for(let promise of promisesDetailedMovieList){
    const movie = await promise;
    console.log(movie);
    moviesFinalList.push(movie);
}

fs.writeFileSync('localAPIModel.txt', JSON.stringify(moviesFinalList))
// console.log(moviesFinalList);

// Méthode alternative avec Promise.all
// const movies = await Promise.all(promises);

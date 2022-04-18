import * as Api from './OmdbApi.js'
import * as fs from 'fs';

const basicMovieList = await Api.getBasicMovieList(1);

const promisesDetailedMovieList = Api.getDetailedMovieList(basicMovieList)

// Sauvegarde des détails des films dans un tableau après résolution de chaque promesse
// Méthode alternative avec Promise.all
// const movies = await Promise.all(promises);
const moviesFinalList = [];
for(let promise of promisesDetailedMovieList){
    const movie = await promise;
    console.log(movie);
    moviesFinalList.push(movie);
}

fs.writeFileSync('./src/localAPIModel.txt', JSON.stringify(moviesFinalList))
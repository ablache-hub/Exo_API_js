import * as Api from './utils.js'
import * as fs from 'fs';

const basicMovieList = await Api.getMovieListFromTmdb(1);

const titleList = await Api.getMoviesTitlesFromTmdbList(basicMovieList);


const promisesDetailedMovieList = Api.getMovieDetailedListFromOmdb(titleList)


// Sauvegarde des détails des films dans un tableau après résolution de chaque promesse
// Méthode alternative avec Promise.all
// const movies = await Promise.all(promises);
const moviesFinalList = [];
for (let promise of promisesDetailedMovieList) {
    const movie = await promise;
    // Certains films ne sont pas trouvés dans la seconde base, on enregistre donc que les réponses positives
    if (movie.Response == 'True') {
        moviesFinalList.push(movie);
    }
}

fs.writeFileSync('./src/localAPIModel.txt', JSON.stringify(moviesFinalList))
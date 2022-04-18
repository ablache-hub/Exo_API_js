import * as fs from 'fs';
import {
    timeConvert
} from './src/utils.js';

// Lecture et parsing en JSON du fichier texte
const movieList = JSON.parse(fs.readFileSync('./src/localAPIModel.txt'))

// Test de récup. et affichage de données du fichier
console.log(movieList.map(
    movie => {
        return {
            title: movie.Title,
            release_date: movie.Released,
            runtime: timeConvert(movie.Runtime),
            genre: movie.Genre,
            synopsys: movie.Plot.slice(0, 100) + '...',
            director: movie.Director,
            actors: movie.Actors,
            rating: movie.imdbRating + "/10",
            poster: movie.Poster,
            type: movie.Type
        }
    }
))
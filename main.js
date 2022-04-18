import * as fs from 'fs';
import {timeConvert} from './src/utils.js';

const movieList = await JSON.parse(fs.readFileSync('./src/localAPIModel.txt'))

// Test de récup. et affichage de données du fichier
console.log(movieList.map(
    movie => {
        return {
            tmdb_id: movie.id,
            title: movie.title,
            subtitle: movie.tagline,
            genre: movie.genres.map(
                genre =>
                genre.name
            ),
            production: movie.production_companies.map(
                prod =>
                prod.name
            ),
            production_countries:  movie.production_countries.map(
                country => {
                return {
                            name: country.name,
                            code: country.iso_3166_1
                        }
                }
            ),
            synopsys: movie.overview.substring(0, 100) + '...',
            poster_url: 'https://image.tmdb.org/t/p/w500/' + movie.poster_path,
            runtime: timeConvert(movie.runtime),
            note: movie.vote_average
        }
    }))
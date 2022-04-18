import * as fs from 'fs';

const movieList = JSON.parse(fs.readFileSync('./src/localAPIModel.txt'))

//Test de récup. et affichage de données dans le fichier
console.log(movieList.map(
    movie => {
        return {
            id: movie.id,
            title: movie.title
        }
    }))
import fetch from 'node-fetch';

// Fetch de la liste de films sur Tmdb
export function getMovieListFromTmdb(listNumber = '') {
    return fetch('https://api.themoviedb.org/3/list/' + listNumber + '?api_key=7248330eaedc659a3fb3ab4ff9069bc2&language=en-US')
        .then(res => res.json())
}

// Extraction des titres
export function getMoviesTitlesFromTmdbList(movieList = []) {
    return movieList.items.map((movie) => {
        return {
            Tmdb_Id: movie.id,
            title: movie.title
        };
    })
}

// Fetch de liste des détails de chaque film sur Omdb
export function getMovieDetailedListFromOmdb(movieTitleList = []) {
    return movieTitleList.map(async (movie) => {
        return fetch('http://www.omdbapi.com/?apikey=14183770&t=' + movie.title)
            .then(res => res.json())
    })
}

// Sauvegarde des détails des films dans un tableau après résolution de chaque promesse
// Méthode alternative avec Promise.all
// const movies = await Promise.all(promises);
export async function getPromiseList(movieList = []) {
    const moviesFinalList = [];
    for (let promise of movieList) {
        const movie = await promise;
        // Certains films ne sont pas trouvés dans la seconde base, on enregistre donc que les réponses positives
        if (movie.Response == 'True') {
            moviesFinalList.push(movie);
        }
    }
    return moviesFinalList;
}

// Conversion durée en min -> heures+min
export function timeConvert(n) {
    var num = n.substring(0, n.length - 4);
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + "h " + rminutes + "min";
}
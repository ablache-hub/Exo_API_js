import fetch from 'node-fetch';

// Fetch de la liste de films sur Tmdb
export function getBasicMovieList(listNumber = '') {
    return fetch('https://api.themoviedb.org/3/list/' + listNumber + '?api_key=7248330eaedc659a3fb3ab4ff9069bc2&language=en-US')
        .then(res => res.json())
}

// Fetch de liste des détails de chaque film sur Tmdb
export function getDetailedMovieList(movieList = []) {
    return movieList.items.map(async (movie) => {
        return fetch('https://api.themoviedb.org/3/movie/'+ movie.id +'?api_key=7248330eaedc659a3fb3ab4ff9069bc2&language=en-US')
        .then(res => res.json())
    })
}

// Conversion durée en min -> heures+min
export function timeConvert(n) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + "h " + rminutes + "min";
    }
    
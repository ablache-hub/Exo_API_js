import fetch from 'node-fetch';

export function getMovieList(listNumber = '') {
    return fetch('https://api.themoviedb.org/3/list/' + listNumber + '?api_key=7248330eaedc659a3fb3ab4ff9069bc2&language=en-US')
        .then(res => res.json())
}

export function getMovieTitleListFromTmdb(movieList = []) {
    let list = movieList.items.map((movie) => {
        return {
            Tmdb_Id: movie.id,
            title: movie.title
        };
    })
    return list
}

export function getMovieDetailedListFromOmdb(movieTitleList = []) {
    return movieTitleList.map(async (movie) => {
        return fetch('http://www.omdbapi.com/?apikey=14183770&t=' + movie.title)
        .then(res => res.json())
    })
}
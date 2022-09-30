const API_KEY = 'e900ddd99edc3affd146f1905e638fd1';
const BASE_URL = 'https://api.themoviedb.org/3';

function fetchMovies(query) {
    return (
        fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(new Error('The API_KEY is wrong'));
        })
    );
};

function fetchTrending() {
    return (
        fetch(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }

            return Promise.reject(new Error('The API_KEY is wrong'))
        })
    );
};

function fetchMovieDetalis(movieId) {

    return (
    fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
    .then(response => {
        if (response.ok) {
            return response.json();
        }

        return Promise.reject(new Error('The API_KEY is wrong'))
    })
)

}
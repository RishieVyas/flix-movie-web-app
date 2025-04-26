const global = {
    currentPage: window.location.pathname
};

const displayPopularMovies = async () => {
    const results = await fetchAPIData('movies/popular');
    console.log('display results-->',results)
}

// Fetch Data from TMDB API
async function fetchAPIData(endpoint) {
    const res = await fetch(`${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`)
    const data = await res.json()
    return data;
}

// Highlight Active Link
function highlightActiveLink () {
    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => {
        if(link.getAttribute('href') === global.currentPage){
            link.classList.add('active');
        }
    })
}

// Initialize App
function init () {

    // Setting up the router
    switch (global.currentPage) {
        case '/':
            displayPopularMovies();
            console.log('Home');
            break;
        case '/shows.html':
            console.log('Shows');
            break;
        case '/movie-details.html':
            console.log('Movie Details');
            break;
        case '/tv-details.html':
            console.log('TV Details');
            break;
        case '/search.html':
            console.log('Search');
            break;
    }

    highlightActiveLink();
}

document.addEventListener('DOMContentLoaded', init)
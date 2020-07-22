import APIs from "../utils/apis";

const showList = {
    trending: {
        heading: 'Trending Now',
        api: APIs.fetchTrending
    },
    netflixOriginals: {
        heading: 'Netflix Originals',
        api: APIs.fetchNetflixOriginals
    },
    topRated: {
        heading: 'Top Rated',
        api: APIs.fetchTopRated
    },
    actionMovies: {
        heading: 'Action Movies',
        api: APIs.fetchTrending
    },
    comedyMovies: {
        heading: 'Comedy Movies',
        api: APIs.fetchComedyMovies
    },
    horrorMovies: {
        heading: 'Horror Movies',
        api: APIs.fetchHorrorMovies
    },
    romanticMovies: {
        heading: 'Romantic Movies',
        api: APIs.fetchRomanticMovies
    },
    documentaries: {
        heading: 'Comedy Movies',
        api: APIs.fetchDocumentaries
    }
};

export default showList;
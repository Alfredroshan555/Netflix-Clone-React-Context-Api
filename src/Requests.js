const key = '3db8db139d1550057ce93d0b957b71de'

// popular https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1
// top rated https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1
// trending https://api.themoviedb.org/3/movie/popular?api_key${key}&language=en-US&page=2
// upcoming https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1
// now playing https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1

const requests ={
    popular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    upcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    nowPlaying:`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
}

export default requests
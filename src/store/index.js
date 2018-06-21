import Vue from 'vue'
import Vuex from 'vuex'
import MovieService from '../services/MovieService'

Vue.use(Vuex)

const imageBasePath = 'http://image.tmdb.org/t/p/w370_and_h556_bestv2'

export default new Vuex.Store({
  state: {
    movies: [],
    loading: false,
    genres:[],

  },

  actions: {
    async fetchMovies (context) {
      context.commit('setLoading', true)
      const response = await MovieService.getMovies({
        page: 1,
        genre: null
      })
      console.log(response.data)
      setTimeout(function() {
      context.commit('setMovies', response.data)
        
      }, 2000);
      context.commit('setLoading', false)
    },
    async fetchGeners (context) {
      const response = await MovieService.getGenres()
      console.log(response.data)
      context.commit('setGeners', response.data)
    }
  },
  
  mutations: {
    setMovies (state, moviesData) {
      state.movies = moviesData.results
    },
    setGeners (state, moviesData) {
      state.genres = moviesData.genres
    },
    setLoading (state, isLoading) {
      state.loading = isLoading
    }
  },

  getters: {
    movieCards (state) {
      return state.movies.map( movie => ({
        id: movie.id,
        title: movie.title,
        description: movie.overview,
        image: `${imageBasePath}${movie.poster_path}`,
        voteAverage: movie.vote_average
      }))
    },
    movieGeners (state) {
      return state.genres.map( genre => ({
        id: genre.id,
        name: genre.name,
      }))
    }
  }
})
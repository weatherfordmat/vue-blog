import Vuex from 'vuex'
import Vue from 'vue'
import { getArticles, postArticle } from './actions'

const createStore = () => {
  return new Vuex.Store({
    state: {
      articles: null
    },
    getters: {
      articles: state => state.articles
    },
    mutations: {
      updateArticles (state, data) {
        state.articles = data
      }
    },
    actions: {
      getArticles,
      postArticle
    }
  })
}

Vue.use(Vuex)

const store = createStore()

export default store

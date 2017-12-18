import axios from 'axios'

const blogUrl = 'https://g7ezxbophe.execute-api.us-east-1.amazonaws.com/prod/Blog'

export const getArticles = (store) => {
  return axios.get(blogUrl)
    .then(res => store.commit('updateArticles', res))
    .catch(err => store.commit('updateArticles', err))
}

export const postArticle = (store, payload) => {
  return axios.post(blogUrl, payload)
    .then(res => getArticles(store))
    .catch(err => console.log(err))
}

<template>
  <div class="container">
    <Article :article="article" /><br >
    <input 
      v-model="title" 
      placeholder="Enter Article Title" >
    <br > <br >
    <input 
      v-model="subtitle" 
      placeholder="Enter the Article Subtitle" >
    <br > <br >
    <input 
      v-model="tags" 
      placeholder="Enter your tags separated by commas" >
    <br > <br >
    <textarea 
      v-model="body" 
      placeholder="Enter your HTML markup" />
    <br > <br >
    <button v-on:click="addPost">
      Add Post
    </button>
  </div>
</template>

<script>
import Article from './Article.vue'
import store from '../store'

export default {
  name: 'AddPost',
  data () {
    return {
      title: 'Enter your title',
      subtitle: 'Enter a subtitle as well',
      date: new Date().toLocaleDateString(),
      body: 'Enter your post text here as HTML markup.<br ><br >',
      tags: 'Add Tags Here, Another'
    }
  },
  computed: {
    article: function () {
      this._data.tags = [this._data.tags.toString()]
      return this._data
    }
  },
  methods: {
    addPost () {
      this._data.tags = JSON.stringify(this._data.tags)
      store.dispatch('postArticle', this._data)
    }
  },
  components: {
    Article
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h2 {
  font-weight: normal;
}

input, textarea {
    margin: 0px;
    padding: 10px;
    width: 70%;
}

textarea {
    height: 300px;
    min-height: 300px;
    min-width: 70%;
}

button {
    border: 0;
    background-color: #20b2aa;
    border: 2px solid #20b2aa;
    padding: 10px;
    color: white;
    font-size: 15px;
    border-radius: 10px;
}

</style>

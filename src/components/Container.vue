<template lang="html">
  <div class="container">
    <div v-if="multi" >
    <Article
      v-for="(article, index) in articles"
      v-bind:key="article.id"
      :article="article" />
    </div>
    <div v-if="!multi" id="article-container">
      <h1>Recent Articles</h1>
      <div class='row'>
        <i v-bind:class="[{ active: !listView }, 'fa', 'fa-list', 'viewOpt']" v-on:click="changeView" />
        <i v-bind:class="[{ active: listView }, 'fa', 'fa-th', 'viewOpt']" v-on:click="changeView" />
      </div>
     <div class="box">
            <i v-if="!search" class="fa fa-search" v-on:click="searchThis" />
            <span v-else>
              <input type="search" id="search" placeholder="Search..." />
              <i class="fa fa-times" v-on:click="searchThis" />
            </span>
      </div>
    <HomePage
      :listView="listView"
      v-for="(article, index) in articles"
      v-bind:key="article.id"
      :article="article" />
    </div>
  </div>
</template>

<script>
import Article from './Article.vue'
import HomePage from './HomePage'

export default {
  name: 'Container',
  mounted () {
    this.gatherData()
  },
  methods: {
    gatherData () {
      let specific = this.$route.params.id
      this.multi = !!specific
      this.$store.dispatch('getArticles')
        .then(res => {
          this.loaded = true
          if (specific) {
            this.articles = this.$store.getters.articles.data.filter(article => article.id.toString() === specific)
          } else {
            this.articles = this.$store.getters.articles.data
          }
        })
    },
    searchThis () {
      this.search = !this.search
    },
    changeView () {
      this.listView = !this.listView
    }
  },
  data () {
    return {
      loaded: false,
      articles: [],
      multi: !!this.$route.params.id,
      search: false,
      listView: true
    }
  },
  components: {
    Article,
    HomePage
  },
  watch: {
    '$route' (to, from) {
      let specific = this.$route.params.id
      this.multi = specific
      if (specific) {
        this.articles = this.$store.getters.articles.data.filter(article => article.id.toString() === specific)
      } else {
        this.articles = this.$store.getters.articles.data
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

.box {
  position: fixed;
  top: 0;
  right: 0;
  margin: 20px;
}

input {
  padding: 10px;
  background-color: white;
  box-shadow: 3px 11px 101px -13px rgba(0,0,0,0.75);
  border: none;
  color: black;
  border-radius: 20px;
  width: 300px;
  font-size: 16px;
}

.active {
  color: lightgray;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

#article-container {
    width: 70%;
    margin: 0 auto;
}

.viewOpt {
  padding: 5px;
  font-size: 20px;
  cursor: pointer;
}

@media (max-width: 750px) {
  #article-container {
    margin-top: 100px;
    width: 95%;
 }
}

</style>

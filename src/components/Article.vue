<template lang="html">
  <div id="article-container">
    <h1>{{ article.title }}</h1>
    <div class="row">
      <h2>{{ article.subtitle }}</h2>
      <p id="date"><em>{{ article.date }}</em></p>
    </div>
    <hr id="line">
    <ul>
      <li
        v-for="tag in tags"
        :key="tag" >
        {{ tag }}
      </li>
    </ul>
    <br >
    <p 
      id="body" 
      v-html="article.body">{{ article.body }}</p>
    <vue-disqus 
      shortname="matthewweatherfod" 
    />
  </div>
</template>

<script>
import VueDisqus from 'vue-disqus/VueDisqus.vue'
export default {
  name: 'Article',
  props: ['article'],
  components: {
    VueDisqus
  },
  computed: {
    tags: function () {
      if (this.article.tags instanceof Object) {
        return this.article.tags
      } else if (JSON.parse(this.article.tags).length > 1) {
        return JSON.parse(this.article.tags)
      } else {
        return JSON.parse(this.article.tags)[0].split(',')
      }
    }
  }
}
</script>

<style scoped>
* {
    text-align: left;
}
h1, h2, p {
    font-weight: normal;
    margin: 5px;
}

h2 {
    color: gray
}

#date {
    color: gray;
}

#body {
    font-size: 16px;
}

#line {
	height: 6px;
	background: url(http://ibrahimjabbari.com/english/images/hr-11.png) repeat-x 0 0;
    border: 0;
    filter: invert(50%);
}

ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
}

li {
    width: fit-content;
    font-size: 12px;
    cursor: pointer;
    background-color: #20b2aa;
    color: white;
    border-radius: 10px;
    display: inline-block;
    margin: 2px;
    padding: 5px;
}

li:hover {
    opacity: 0.8;
}

.row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
}

#article-container {
    width: 70%;
    margin: 0 auto;
}

@media (max-width: 750px) {
  #article-container {
    margin-top: 100px;
    width: 95%;
 }
 .row {
     flex-direction: column;
     justify-content: flex-start;
     align-items: flex-start;
 }
}

</style>

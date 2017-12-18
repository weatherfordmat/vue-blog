<template lang="html">
    <span>
  <div v-if="listView">
    <router-link :to="`/${article.id}`" >
        <h1 id="title">{{ article.title }}</h1>
    </router-link>
    <div class="indented" >
      <div class="row">
        <h2>{{ article.subtitle }}</h2>
        <p id="date"><em>{{ article.date }}</em></p>
      </div>
       <p v-html="abbr" />
      </div>
  </div>
  <div v-if="!listView" class="box">
      <div class="col">
    <router-link :to="`/${article.id}`" >
        <h1 id="title">{{ article.title }}</h1>
    </router-link>
    <div >
        <h2>{{ article.subtitle }}</h2>
      </div>
       <p v-html="abbr" />
       <p id="date"><em>{{ article.date }}</em></p>
       </div>
  </div>
  </span>
</template>

<script>
import VueDisqus from 'vue-disqus/VueDisqus.vue'
export default {
  name: 'HomePage',
  props: ['article', 'listView'],
  components: {
    VueDisqus
  },
  computed: {
    abbr () {
      return `${this.article.body.substring(0, 50)}...`
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

a {
    text-decoration: none;
}

h2 {
    color: gray
}

#title {
    color: #b28b20;
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

.col {
    display: flex;
    flex-direction: column;
}


.row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
}

.box {
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: row;
    margin: 20px;
    float: left;
}

.indented {
    margin-left: 40px;
}

#article-container {
    width: 80%;
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

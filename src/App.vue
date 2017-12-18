<template lang="html">
  <div id="app">
    <router-view/>
    <SideBar />
  </div>
</template>

<script>
import store from './store'
import SideBar from './components/SideBar.vue'

export default {
  name: 'app',
  components: {
    SideBar
  },
  store
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

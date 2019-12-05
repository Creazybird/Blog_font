<template>
  <div id="app">
    <index/>
  </div>
</template>

<script>
import index from './views/index'

export default {
  name: 'app',
  components: {
    index
  }
}
</script>

<style>

body,html{ 
  /*不限制高度，让它自己动*/
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>

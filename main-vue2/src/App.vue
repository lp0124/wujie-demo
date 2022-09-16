<template>
  <div id="app">
    <div>主应用</div>
    <div>
      <WujieVue
        class="aaa"
        name="vue2"
        :plugins="plugins"
      ></WujieVue>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    // 83px = 23 + 60,子应用距离浏览器视窗top距离
    return {
      plugins:[
      {
        cssBeforeLoaders: [
          { content: "html{padding-top: 83px;height:100%}" },
        ],
      },
      ]
  
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.aaa{
  width: 100vw;
  height: 100vh;
  margin-top: -83px;
}
</style>

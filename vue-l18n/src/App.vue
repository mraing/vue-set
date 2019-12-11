<template>
  <div id="app">
    <Control />
    <div class="wrapper">
      <ul class="menu">
        <router-link class="menu-item" tag="li" to="/">首页</router-link>
        <router-link class="menu-item" tag="li" to="/format">格式化</router-link>
      </ul>
      <router-view class="main" />
    </div>
  </div>
</template>

<script>
import Control from './components/page/Control'
export default {
  name: 'App',
  components: {
    Control
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
html,body,ul,li{
  margin: 0;
  padding: 0;
}
li{list-style: none;}
.wrapper{
  display: flex;
}
.menu{
  width: 200px;
}
.menu-item{
  margin: 10px;
  line-height: 30px;
  color: #fff;
  text-align: center;
  background: #795548;
  border-radius: 20px;
  cursor: pointer;
}
.router-link-exact-active{
  background: #4CAF50;
}
.main{
  margin: 10px;
  padding: 10px;
  flex: 1;
  border-radius: 5px;
  border: 1px solid #eee;
}
</style>

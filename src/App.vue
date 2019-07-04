<template>
  <div id="app">
  
   
      <router-view></router-view>
  </div>
</template>

<script>
  import headercomr from './components/Side/Header'
  import leftSidecom from './components/Side/leftSide'
  import maincom from './components/Side/main'
  import footcom from './components/Side/foot'
  import  logincom from './components/login/index'
  export default {
    name: 'App',
    components: {
      headercomr, leftSidecom, maincom, footcom,logincom
    }
  }
</script>

<style scoped>
@import "./assets/style/public.scss";
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0;
    padding: 0;
  }

  .el-header {
    width: 100%;
    background: aqua;
    margin: 0;
    padding: 0;
  }

  .el-footer {
    /*height: 150px;*/
    background: gray;
  }

  .el-container {
    height: 100vh
  }

  .el-main {
    background: beige;
  }
</style>

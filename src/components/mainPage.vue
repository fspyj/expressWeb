<template>
  <div>
    <el-container>
      <el-header>
        <headervue/>
      </el-header>
      <el-container>
        <el-aside>
          <leftmenu/>
        </el-aside>
        <el-main>
           <router-view/>
         
        </el-main>
      </el-container>
      <el-footer>
        <footvue/>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import leftmenu from './menucom/leftmenu'
import headervue from './Side/Header'
import footvue from './Side/foot'
import addProduct from '../components/testcom/addProduct'
export default {
  name: "mainPage",
  components:{
    leftmenu,headervue,footvue,addProduct
  },
  methods: {
    GetToken() {
      this.$http
        .get("/api/getuserinfo", {
          params: {
            username: "fs"
          }
        })
        .then(res => {
          console.log("mainpage:" + res);
        })
        .catch(err => {
          console.log("mainpageerror" + err);
        });
    },
    SetToken() {
      this.$store.dispatch("set_login", "ddddddd");
    }
  }
};
</script>
<style scoped>
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
  .el-aside{
    background: #545c64;
  }
  .el-container {
    height: 100vh
  }

  .el-main {
    background: rgb(51, 51, 51);margin-left: -1px;
  }
</style>

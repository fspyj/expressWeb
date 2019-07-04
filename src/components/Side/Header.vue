<template>
  <div class="maindiv">
    <div class="leftdiv">
      <img style="width:53px" src="static/logo.png">
      <span>一点马高考名师</span>
    </div>
    <div class="mideldiv">
     <span>一点马高考名师</span>
    </div>
    <div class="rightdiv">
      <div class="userindiv">
        <i class="el-icon-user-solid"></i>
        <span>{{getUserName}}</span>
      </div>
      <div class="loginoutdiv">
        <i class="el-icon-switch-button"></i>
        <el-button type="text" @click="loginOut">退出</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  computed:{
    getUserName:function(){
      return this.$store.getters.getUsername;
    }
  },
  methods:{
    loginOut(){
      this.$store.dispatch('set_login',{token:'',username:''})
      this.$router.push('/')
    }
  }
};
</script>
<style lang="scss" scoped>
.maindiv {
  height: 100%;
  background: gray;
  display: flex;
  align-items: center;
  align-content: center;
  .leftdiv {
    display: flex;
    text-align: left;
    margin-left: 20px;
    vertical-align: center;
    width: 20%;
    span {
      color: black;
      font-size: 18px;
      margin-left: 10px;
    }
  }
  .mideldiv {
    width: 55%;
  }
  .rightdiv {
    //background: red;
    overflow: hidden;
    text-align: right;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: right;
    width: 25%;
    .el-button {
      
      margin-right: 20px;
      
    }
    .userindiv {
       overflow: hidden;
    }
    .loginoutdiv {   
      overflow: hidden;
      margin-left: 30px;
      justify-content: right;
    }
  }
}
</style>

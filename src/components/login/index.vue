<template>
  <div class="login-container">
    <div class="item">
      <el-form :model="loginForm"  :rules="loginRules" ref="loginForm"  class="el-formclass" label-width="100px" hide-required-asterisk size="max"   >
        <div  >
          <p>后台管理系统</p>
        </div>
        <el-form-item label="用户名:" prop="email"  >
          <el-input prefix-icon="el-icon-s-custom" v-model="loginForm.email" placeholder="用户名" autocomplete="on"></el-input>
        </el-form-item>
        <el-form-item label="密码:" prop="password">
          <el-input prefix-icon="el-icon-lock" type="password" placeholder="密码" v-model="loginForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"  :loading="loading" @click="handleLogin('loginForm')" class="submit_btn">登录</el-button>
        </el-form-item>
      </el-form>

    </div>
  </div>
</template>
<script>
  import {Message} from 'element-ui'
  //import axios from 'axios'
  export default {
    name: 'login',
    methods: {
      handleLogin(fromname) {   
       
        this.loading=true
        let that=this;
        this.$refs[fromname].validate(valid=>{
          if (valid)
          {
            that.loading=false          
            this.$http.post('/api/login',{
              username:this.loginForm.email,
              password:this.loginForm.password
            }).then(res=>{
              that.loading=false
               
              console.log(res)
              //console.log(res.code)
              if (res.data.code===1)
              {
                 that.$store.dispatch('set_login',res.data.result)

                 that.$router.push('/main')
                
              }
              else
              {
                //Message("sd")
                Message(res.data.msg)
              }
            }).catch(err=>{
              that.loading=false
              console.log(err)
            })
          }
          else
          {
            Message('用户信息不正确')
            this.loading=false
            return false
          }
        })
      }
    },
    created(){
     console.log('in login')
     this.$store.dispatch('set_login',{token:'',username:''})
     document.title='login'
   
    },
    data() {
      const validateEmail = (rule, value, callback) => {
        const reg = /^[a-z0-9](?:[-_.+]?[a-z0-9]+)*@([a-z0-9]{2,4})\.(com|cn|org)$/i;
        if (!reg.test(value.trim()))
        {
          callback(new Error('请输入正确的合法邮箱'));
        }
        else {
          callback();
        }
      };
      const validatePass = (rule, value, callback) => {
        if (value.length < 6) {
          callback(new Error('密码不能小于6位'));
        } else {
          callback();
        }
      };
      return {
        loginForm: {
          email: 'admin@qq.com',
          password: ''
        },
        loginRules: {
          email: [
            {required: true, trigger: 'blur', validator: validateEmail}
          ],
          password: [
            {required: true, trigger: 'blur', validator: validatePass}
          ]
        },
        loading: false,
        showDialog: false
      }
    }
  }
</script>
<style scoped>
  .el-formclass{

    font-size: 19px;
    text-align: center;
    justify-items: center;
    justify-content: center;
    align-content: center;
    align-items: center;
    vertical-align: center;
  }
  .login-container {
    background: white;
    display: flex;
    flex: 1;
    width: 100%;
    height: 100vh;
    vertical-align: middle;
    justify-items: center;
    justify-content: center;
    align-items: center;
    align-content: center;
    text-align: center;

  }

  .el-input {
    width: 350px;

    vertical-align: middle;
    justify-items: center;
    justify-content: center;
    text-align: center;
    align-items: center;
    align-content: center;
  }

  .el-button {
    width: 350px;
    margin-top: 10px;
  }

  .item {
    display: flex;

    width: 800px;
    height: 800px;
    vertical-align: middle;
    justify-items: center;
    justify-content: center;

    align-items: center;
    align-content: center;
  }

</style>


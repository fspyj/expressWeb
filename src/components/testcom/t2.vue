<template>
  <div>
   <el-input style="width:200px" v-model="r_key" placeholder="读取Redis"></el-input>
  <el-button @click="getWindowId">获取id</el-button>
  <ul v-for="(index,item) in datas">
    <li>{{item}}---{{index}}</li>
  </ul>
  </div>
</template>
<script>
export default {
  name: "t2",
  data(){
    return{
      r_key:'',
      datas:[]
    }
  },
  methods:{
    getWindowId()
    {
      var that=this;
     this.$http.get("/api/getRedis",{
       params:{
         key:that.r_key
       }
     }).then(res=>{
       that.datas=res.data.result.ds
      //  for(let i in that.datas)
      //  {
      //    console.log(i)
      //     console.log(that.datas[i])
      //  }
      //  console.log(res)
     }).catch(err=>{

     })
    }
  }
};
</script>
<style>
</style>

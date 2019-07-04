<template>
  <el-dialog
    :visible.sync="showDialog"
    :before-close="beforeclose"
    width="500px"
    :center="true"
    :title="eltitle"
  >
    <div>
      <el-input v-model="proName" placeholder="请输入商品名称"></el-input>
      <el-input type="number" min="0" v-model="proPrice" placeholder="请输入商品价格"></el-input>
      <el-input v-model="proDesc" type="textarea" :rows="2" placeholder="请输入商品描述"></el-input>
      <div class="submitdiv">
        <el-button type="primary" :disabled="!isCan" @click="adds" round>{{btnvaue}}</el-button>
        <el-button round @click="cancel">取消</el-button>
      </div>
    </div>
  </el-dialog>
</template>
<script>
export default {
  name: "addProduct",
  data() {
    return {
      isNew:1,
      showDialog: false,
      proPrice: 1,
      proName: "",
      proDesc: "",
      p_data: null,
      eltitle: "添加商品",
      btnvaue: "添加"
    };
  },

  computed: {
    isCan() {
      return this.proName !== "" && this.proPrice > 0;
    }
  },
  methods: {
    beforeclose(done) {
      this.p_id = null;
      done();
    },
    cancel() {
      this.showDialog = false;
    },
    adds() {
      let that = this;
      //console.log(this.p_data.length)
      if (this.isNew !== 1) {
           this.$http
          .post("/api/upproduct", {
            p_name: that.proName,
            p_id:that.p_data.p_id,
            p_price:that.proPrice,
            p_desc:that.proDesc
          })
          .then(res => {
            if (res.data.code == 1) {
              that.$Message("修改成功");
              console.log(res.data);
            
              console.log(that.p_data)
              that.$bus.$emit('editrow',{p_desc:that.proDesc,p_id:that.p_data.p_id,p_name:that.proName,p_price:that.proPrice})
            } else {
              that.$Message("修改失败");
            }
              that.showDialog = false;
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.$http
          .post("/api/addproduct", {
            p_name: that.proName,
            p_price: that.proPrice,
            p_desc: that.proDesc
          })
          .then(res => {
            if (res.data.code == 1) {
              that.$Message("添加成功");
              console.log(res.data);
              that.showDialog = false;
              this.$bus.$emit("queryProducts");
            } else {
              that.$Message("添加失败");
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  },
  mounted() {
    this.$bus.$on("onshowDia", rs => {
      this.showDialog = true;
      //console.log(this.p_data)
      if (this.isNew !==1) {
        this.eltitle = "修改商品";
        this.btnvaue = "修改";
        let that = this;

            this.proPrice = this.p_data.p_price;
            this.proName = this.p_data.p_name;
            this.proDesc = this.p_data.p_desc;


        // this.$http
        //   .get("/api/getproductinfo", {
        //     params: {
        //       p_id: that.p_id
        //     }
        //   })
        //   .then(res => {
        //     //that.p_datas = res.data.result.p_datas;
        //     console.log(res);
        //     this.proPrice = res.data.result.p_datas[0].p_price;
        //     this.proName = res.data.result.p_datas[0].p_name;
        //     this.proDesc = res.data.result.p_datas[0].p_desc;
        //   })
        //   .catch(err => {
        //     console.log(err);
        //   });
      } else {
        this.eltitle = "添加商品";
        this.btnvaue = "添加";
        this.proPrice = 1;
        this.proName = "";
        this.proDesc = "";
      }
    });
  }
};
</script>
<style lang="scss" scoped>
.el-input {
  margin-bottom: 10px;
}
.submitdiv {
  justify-items: center;
  justify-content: center;
  text-align: center;
  margin: 20px 0 0 0;
}
</style>

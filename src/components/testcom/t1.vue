<template>
  <div class="maindiv">
    <div class="divhead">
      <div style="width:200px">
        <el-input v-model="p_id" placeholder="请输入商品名称"></el-input>
      </div>
      <el-button type="primary" @click="queryProducts" round>查询</el-button>
      <div class="adddiv">
        <el-button type="primary" @click="addPro" round>添加商品</el-button>
      </div>
    </div>

    <div class="divfoot">
      <el-table
        height="700px"
        :header-cell-style="tableHeaderColor"
        :row-style="setheaderrowstyle"
        @cell-mouse-enter="cellMouseEnter"
        :data="p_datas.slice((currentPage-1)*pageSize,currentPage*pageSize)"
        :highlight-current-row="false"
      >
        <el-table-column prop="p_id" label="商品ID"></el-table-column>
        <el-table-column prop="p_name" label="商品名称"></el-table-column>
        <el-table-column prop="p_price" label="价格"></el-table-column>
        <el-table-column prop="p_desc" label="商品描述"></el-table-column>
        <el-table-column prop="p_pic" label="缩略图"></el-table-column>
        <el-table-column prop="p_create" label="创建时间"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <!-- <el-button size="mini" @click="eidthand">编辑</el-button> -->
            <el-button
              type="primary"
              icon="el-icon-edit"
              @click="eidthand(scope.$index,scope.row)"
              circle
            ></el-button>
            <el-button type="danger" @click="deletehand(scope.row)" icon="el-icon-delete" circle></el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="pageSize"
          layout="total, prev, pager, next"
          :total="currentTotal"
        ></el-pagination>
      </div>
    </div>
    <addProduct ref="addpro"/>
  </div>
</template>
<script>
import addProduct from "./addProduct";
import Vue from "vue";
export default {
  name: "t1",
  components: { addProduct },
  data() {
    return {
      p_datas: [],
      p_id: "",
      currentPage: 1,
      pageSize: 10,
      currentTotal: 0
    };
  },
  mounted() {
    this.$bus.$on("queryProducts", res => {
      this.queryProducts();
    });
    this.$bus.$on("editrow", res => {
      console.log(res);
      //console.log(this.p_datas[0])
      //console.log(res.row_id)
      this.queryProducts();
      //Vue.set(this.p_datas[0],"p_name","")
    });
  },
  beforeRouteLeave(to, from, next) {
    next();
  },
  methods: {
    deletehand(row) {
      var that = this;
      this.$confirm("确定删除该条记录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$http
            .post("/api/delproduct", {
              p_id: row.p_id
            })
            .then(res => {
              if (res.data.code === 1) {
                this.$Message({
                  type: "success",
                  message: "删除成功!"
                });
                that.queryProducts();
              } else {
              }
            })
            .catch(err => {});
        })
        .catch(() => {
          this.$Message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    eidthand(index, row) {
      this.$refs.addpro.p_data = row;
      this.$refs.addpro.isNew=0;
      this.$bus.$emit("onshowDia");
    },
    handleSizeChange(val) {
      this.pageSize = val;
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      console.log(`当前页: ${val}`);
    },
    addPro() {
      //this.$refs.addpro.showDia();
      this.$refs.addpro.isNew=1;
      this.$bus.$emit("onshowDia");
    },
    queryProducts() {
      let that = this;
      this.$http
        .get("/api/getproductinfo", {
          params: {
            p_name: that.p_id
          }
        })
        .then(res => {
          console.log(res);
          that.p_datas = res.data.result.p_datas;

          that.currentTotal = this.p_datas.length;
        })
        .catch(err => {
          console.log(err);
        });
    },
    SetToken() {
      this.$store.dispatch("set_login", { token: "", username: "" });
      //   console.log(this.$store.getters.getToken);
      //this.$router.push("/");
      // this.$http
      //   .get("/api/getuserinfo")
      //   .then(res => {
      //     console.log(res);
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
      //window.history.pushState(null,null,document.URL);
    },
    setheaderrowstyle({ row, rowIndex }) {
      return "background-color: transparent;border:0;";
    },
    // 修改table header的背景色
    tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return "background-color: rgb(55, 67, 96);color: #fff;font-weight: 500;border: 0";
      }
    },
    cellMouseEnter(row, column, cell, event) {}
  },
  
  created()
  {
      this.queryProducts()
  }
};
</script>
<style lang="scss" scoped>
.maindiv {
  padding: 10px;
  background: rgb(55, 55, 61);
  .divhead {
    text-align: left;
    display: flex;
    flex: 1;
    .el-input /deep/ .el-input__inner {
      width: 200px;
      background-color: transparent;
    }
    .el-button {
      text-align: left;
      justify-content: left;
      justify-items: left;
      margin-left: 15px;
      border: 0;
    }
    .adddiv {
      justify-content: right;
      justify-items: right;
      text-align: right;
      width: 100%;
    }
  }
  .divfoot {
    margin-top: 20px;
    .el-table {
      background-color: rgb(55, 55, 61);
      border: 0;
    }
    .el-pagination {
      text-align: right;
    }
  }
}
</style>
 

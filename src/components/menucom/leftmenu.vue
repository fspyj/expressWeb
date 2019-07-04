<template>
  <div>
    <div>
      <el-menu router
        default-active="t1"
        unique-opened
        class="el-menu-vertical-demo"
        
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>商品管理</span>
          </template>
          <el-menu-item-group>
            <!-- <template slot="title">分组一</template> -->
            <el-menu-item index="t1">添加/修改</el-menu-item>
            <el-menu-item index="t2">库存管理</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group  >
            <el-menu-item index="t3">商品备案</el-menu-item>
            <!-- <el-menu-item index="t1">选项4</el-menu-item> -->
          </el-menu-item-group>
           
        </el-submenu>
         <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>用户信息</span>
          </template>
          <el-menu-item-group>
            <!-- <template slot="title">分组一</template> -->
            <el-menu-item index="t1">
              <template>
                <i class="el-icon-setting"></i>
                <span>新增用户</span>
              </template>
            </el-menu-item>
            <el-menu-item index="t2">修改密码</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group  >
            <el-menu-item index="t3">权限变更</el-menu-item>
            <!-- <el-menu-item index="t1">选项4</el-menu-item> -->
          </el-menu-item-group>
           
        </el-submenu>
        <!-- <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item> -->
      </el-menu>
    </div>
  
  </div>
</template>
<script>
export default {
  name: "leftmenu"
};
</script>
<style scoped>
.el-menu-item {
   background-color: rgb(231, 235, 240) ;
}
.el-menu{
  text-align: left;
  border: 0px;
}
 
</style>



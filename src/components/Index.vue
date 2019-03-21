<template>
  <div>
    <el-container>
      <el-aside width="150px" style="background-color: #545c64">
        <div style="width: 150px;height: 100%;background-color: #545c64;position: fixed;overflow-y: scroll">
          <div style="width: 100%;height: 80px;background-color: #545c64;line-height: 80px;text-align: center;color: white">
            放饭
          </div>
          <el-col :span="24">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-goods"></i>
                  <span>粉丝管理</span>
                </template>
                <el-menu-item-group>
                  <template slot="title">商品管理</template>
                  <el-menu-item index="1-1" @click="$router.push('category')">分类管理</el-menu-item>
                  <el-menu-item index="1-2" @click="$router.push('shop_upload')">商品上传</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-goods"></i>
                  <span>商品管理</span>
                </template>
                <el-menu-item-group>
                  <template slot="title">商品管理</template>
                  <el-menu-item index="2-1" @click="$router.push('category')">分类管理</el-menu-item>
                  <el-menu-item index="2-2" @click="$router.push('shop_upload')">商品上传</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="3">
                <i class="el-icon-menu"></i>
                <span slot="title">角色管理</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-document"></i>
                <span slot="title">商家管理</span>
              </el-menu-item>
              <el-menu-item index="5">
                <i class="el-icon-setting"></i>
                <span slot="title">试用管理</span>
              </el-menu-item>
              <el-submenu index="6">
                <template slot="title">
                  <i class="el-icon-goods"></i>
                  <span>优惠购管理</span>
                </template>
                <el-menu-item-group>
                  <template slot="title">商品管理</template>
                  <el-menu-item index="2-1" @click="$router.push('category')">分类管理</el-menu-item>
                  <el-menu-item index="2-2" @click="$router.push('shop_upload')">商品上传</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-col>
        </div>
      </el-aside>
      <el-main style="margin-left: 5px;padding: 0">
       <div>
         <router-view>
         </router-view>
       </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function () {
    return {
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>

</style>

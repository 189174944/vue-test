<template>
  <div>
    <div class="grid-content" style="text-align: center">
      <el-form label-width="80px" style="margin-top: 200px">
        <el-form-item label="账号">
          <el-input v-model="account"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login()">登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: function () {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      console.log(this.host)
      const that = this
      let account = this.$data.account;
      let password = this.$data.password
      this.axios.post(this.config.host+'/auth/login',{email:account,password:password})
        .then(function (response) {
          console.log(response)
          localStorage.setItem('token', '21313213')
          that.$router.push('/main')
        })
        .catch(function (err) {
          console.log(err)
        })
      // this.$router.push({
      //   path: '/index',
      //   query: {
      //     age: 100
      //   }
      // })
    }
  }
}
</script>

<style scoped>
  .grid-content {
    width: 500px;
    border-radius: 4px;
    min-height: 36px;
  }
</style>

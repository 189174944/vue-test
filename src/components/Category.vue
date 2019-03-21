<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      text-color="#fff"
      active-text-color="black">
      <el-menu-item index="1">列表</el-menu-item>
      <el-menu-item index="2">消息中心</el-menu-item>
    </el-menu>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row.name)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作">
        <template slot-scope="scope">
          <div style="width: 20px;height: 20px;background-color: red"></div>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="text" @click="dialogVisible = true">编辑</el-button>

    <el-dialog title="新增账号" :visible.sync="dialogVisible">
      <el-form>
        <el-form-item label="厂家名称" prop="nickName">
          <el-input v-model="value1" auto-complete="off" style="width:70%;"></el-input>
        </el-form-item>
        <el-form-item label="账号" prop="userAccount">
          <el-input v-model="value2" auto-complete="off" style="width:70%;"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="">保 存</el-button>
        <el-button @click="this.$data.dialogVisible=false">取 消</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name: 'category',
  data: function () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      dialogVisible:false,
      value1: '',
      value2: '',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    handleClick (row) {
      console.log(row)
    }
  },
  created () {
    console.log(this.config)
  }
}
</script>

<style scoped>
</style>

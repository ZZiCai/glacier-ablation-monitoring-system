<template>
  <div>
    <h2>审核上传数据</h2>
    <el-table :data="data" style="width: 100%">
      <el-table-column fixed prop="userName" label="用户" width="150" />
      <el-table-column prop="userID" label="用户ID" width="120" />
      <el-table-column prop="institutionName" label="申请加入机构" width="120" />
      <el-table-column prop="institutionID" label="机构ID" width="120" />
      <el-table-column prop="reason" label="申请理由" width="240" />

      <el-table-column fixed="right" label="审核操作" width="150">
        <template #default="scope">
          <el-button type="success" icon="el-icon-check" circle @click="approveRow(scope.row)"/>
          <el-button type="danger" icon="el-icon-close" circle @click="rejectRow(scope.row)"/>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    approveRow(row) {
        this.$message({
            message: '审核通过!',
            type: 'success'
        })
        this.data = this.data.filter(item => item !== row)
    },
    rejectRow(row) {
        this.$message({
            message: '审核未通过!',
            type: 'warning'
        })
        this.data = this.data.filter(item => item !== row)
    },
  }
}
</script>

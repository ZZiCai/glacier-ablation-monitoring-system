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
        <template #default>
          <el-button type="success" icon="el-icon-check" circle />
          <el-button type="danger" icon="el-icon-close" circle />
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
  }
}
</script>

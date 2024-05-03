<template>
  <el-table :data="data" style="width: 100%" fit>
    <el-table-column fixed prop="name" label="名称" width="150" />

    <el-table-column prop="glacierID" label="冰川ID" width="120" />
    <el-table-column prop="address" label="地理位置" width="600" />
    <el-table-column prop="longitude" label="经度" width="120" />
    <el-table-column prop="latitude" label="纬度" width="120" />

    <el-table-column fixed="right" label="查看详情" width="150">
      <template #default>
        <el-button type="primary" icon="el-icon-search" circle />
      </template>
    </el-table-column>
  </el-table>
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

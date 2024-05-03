<template>
  <div class="app-container">
    <el-card class="info-card">
      <h3>冰川信息</h3>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-space direction="horizonal">
            <p>名称: {{ glacier.name }}</p>
          </el-space>
        </el-col>
        <el-col :span="6">
          <p>ID: {{ glacier.glacierID }}</p>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6">
          <p>位置: {{ glacier.address }}</p>
        </el-col>
        <el-col :span="3">
          <p>经度: {{ glacier.longitude }}</p>
        </el-col>
        <el-col :span="3">
          <p>纬度: {{ glacier.latitude }}</p>
        </el-col>
      </el-row>
    </el-card>
    <line-chart class="wrapper" :chart-data="lineChartData" />

    <div class="wrapper">
      <h2>其它冰川</h2>
      <!-- <glacier-list :data="glaciers" /> -->
      <el-table :data="glaciers" style="width: 100%" fit @row-click="handleRowClick">
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
    </div>
  </div>
</template>

<script>
// import GlacierList from '@/components/GlacierList/index.vue'
import LineChart from './components/LineChart'

const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}

export default {
  components: {
    LineChart
    // GlacierList

    // PieChart,
    // BarChart,
    // TransactionTable,
    // TodoList,
    // BoxCard
  },
  data() {
    return {
      glacier: {},
      list: null,
      listLoading: true,
      lineChartData: lineChartData.newVisitis,
      glaciers: []
    }
  },
  created() {
    this.glaciers = this.$store.getters.glaciers
    this.glacier = this.$store.getters.glacier
    // TODO 拉取冰川数据
  },
  methods: {
    handleRowClick(row) {
      console.log(row)
      this.$store.dispatch('glaciers/updateGlacier', row)
      this.glacier = row
      // TODO 拉取冰川数据
    }
  }
}
</script>

<style scoped>
.wrapper {
  padding: 16px;
  margin-bottom: 16px;
}

.info-card {
  padding: 8px;
  margin-bottom: 30px;
}
</style>

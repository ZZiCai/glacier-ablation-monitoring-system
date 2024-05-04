<template>
  <div class="app-container">
    <div class="container">
      <el-card class="info-card">
        <h3>冰川信息</h3>
        <el-row :gutter="20">
          <el-col :span="12">
            <div direction="horizonal">
              <p>名称: {{ glacier.name }}</p>
            </div>
          </el-col>
          <el-col :span="6">
            <p>ID: {{ glacier.glacierID }}</p>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <p>位置: {{ glacier.address }}</p>
          </el-col>
          <el-col :span="6">
            <p>经度: {{ glacier.longitude }}</p>
          </el-col>
          <el-col :span="6">
            <p>纬度: {{ glacier.latitude }}</p>
          </el-col>
        </el-row>
      </el-card>

      <el-card class="melt-card">
        <melt-info :status="glacier.meltStatus" />
      </el-card>
    </div>
    <div class="wrapper">
      <h3 class="h3">面积 km²</h3>
      <line-chart :chart-data="lineChartData" :theme="'infographic'" />
      <h3 class="h3">温度 ℃</h3>
      <line-chart :chart-data="lineChartData2" :theme="'macarons'" />
      <!-- <h3 class="h3">盐度</h3>
      <line-chart :chart-data="lineChartData" :theme="'inspired'" /> -->
    </div>
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
import MeltInfo from './components/MeltInfo'

const lineChartData = {
  expectedData: [20, 20.11, 20.12, 20.14, 20.10, 20.07, 20.14],
  actualData: [20, 20.05, 20.05, 20.10, 20.15, 20.11, 20.10],
  xData: ['2018', '2019', '2020', '2021', '2022', '2023', '2024']
}

const lineChartData2 = {
  actualData: [0.1, 0, 0.2, 0.3, 0.4, 0.3, 0.5],
  xData: ['2018', '2019', '2020', '2021', '2022', '2023', '2024']
}

export default {
  components: {
    LineChart,
    MeltInfo
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
      lineChartData: lineChartData,
      lineChartData2: lineChartData2,
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
      // console.log(row)
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
  .h3 {
    margin-left: 5px;
  }
}

.container {
  display: flex;
  justify-content: space-between;
  /* 或者使用 flex-end 对齐右边 */
}

.info-card {
  padding: 8px;
  margin-bottom: 30px;
  width: 50%;
}

.melt-card {
  padding: 8px;
  margin-bottom: 30px;
  margin-right: 5%;
  width: 40%;
}
</style>

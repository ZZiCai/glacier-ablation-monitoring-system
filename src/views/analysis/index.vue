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

var lineChartData = {
  expectedData: [960.1, 959.5, 959.7, 959.3, 959.6, 959.7, 960.1, 960.5, 960.7],
  actualData: [960.1, 959.5, 959.7, 959.3, 959.6, 959.7],
  xData: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026']
}

var lineChartData2 = {
  actualData: [0.1, 0, 0.2, 0.3, 0.4, 0.3, 0.35],
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
    this.syncData()
  },
  methods: {
    handleRowClick(row) {
      // console.log(row)
      this.$store.dispatch('glaciers/updateGlacier', row)
      this.glacier = row
      // TODO 拉取冰川数据
        this.syncData()
      
    }, 
    syncData(){
        if (this.glacier.name == '冰山1') {
        this.lineChartData = {
            expectedData: [20.1, 20.0999, 20.098, 20.097, 20.092, 20.091, 20.09, 20.089, 20.088],
            actualData: [20.1, 20.0999, 20.098, 20.097, 20.092, 20.091],
            xData: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026']
        }
        this.lineChartData2 = {
            actualData: [0.1, 0.3, 0.25, 0.28, 0.22, 0.30, 0.31],
            xData: ['2018', '2019', '2020', '2021', '2022', '2023', '2024']
            }
      }
      else if (this.glacier.name == '冰山2') {
        this.lineChartData = {
            expectedData: [42.1, 42.097, 42.085, 42.080, 42.077, 42.064, 42.061, 42.059, 42.057],
            actualData: [42.1, 42.097, 42.085, 42.080, 42.077, 42.064],
            xData: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026']
        }
        this.lineChartData2 = {
            actualData: [0.2, 0.28, 0.30, 0.30, 0.33, 0.33, 0.37],
            xData: ['2018', '2019', '2020', '2021', '2022', '2023', '2024']
            }
      }
      else if (this.glacier.name == '冰山3') {
        this.lineChartData = {
            expectedData: [33.1,32.977, 32.90, 32.82, 32.74, 32.66, 32.42, 32.21, 32.11],
            actualData: [33.1, 32.977, 32.90, 32.82, 32.74, 32.66],
            xData: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026']
        }
        this.lineChartData2 = {
            actualData: [0.2, 0.28, 0.34, 0.32, 0.36, 0.4, 0.39],
            xData: ['2018', '2019', '2020', '2021', '2022', '2023', '2024']
            }
      }
      else if (this.glacier.name == '玉龙雪山'){
        this.lineChartData = {
            expectedData: [960.1, 959.5, 959.7, 959.3, 959.6, 959.7, 960.1, 960.5, 960.7],
            actualData: [960.1, 959.5, 959.7, 959.3, 959.6, 959.7],
            xData: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026']
            }

            this.lineChartData2 = {
            actualData: [0.1, 0, 0.2, 0.3, 0.4, 0.3, 0.35],
            xData: ['2018', '2019', '2020', '2021', '2022', '2023', '2024']
            }
      }
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

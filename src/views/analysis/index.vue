<template>
  <div class="app-container">
    <el-card>
      <el-descriptions title="User Info">
        <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
        <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
        <el-descriptions-item label="Place">Suzhou</el-descriptions-item>
        <el-descriptions-item label="Remarks">
          <el-tag size="small">School</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="Address">
          No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
    <LineChart class="wrapper" :chart-data="lineChartData" />

    <div class="wrapper">
      <h2>其它冰川</h2>
      <glacier-list :data="tableData" />
    </div>
  </div>
</template>

<script>
import { getList } from '@/api/table'
import GlacierList from '@/components/GlacierList/index.vue'
import LineChart from './components/LineChart'
// import { ElDescriptions } from 'element-plus'

const tableData = [
  {
    name: '玉龙雪山',
    glacierID: 13245,
    address: '云南省丽江市玉龙雪山',
    longitude: 100.2383,
    latitude: 27.1149
  },
  {
    name: '玉龙雪山',
    glacierID: 13245,
    address: '云南省丽江市玉龙雪山',
    longitude: 100.2383,
    latitude: 27.1149
  },
  {
    name: '玉龙雪山',
    glacierID: 13245,
    address: '云南省丽江市玉龙雪山',
    longitude: 100.2383,
    latitude: 27.1149
  },
  {
    name: '玉龙雪山',
    glacierID: 13245,
    address: '云南省丽江市玉龙雪山',
    longitude: 100.2383,
    latitude: 27.1149
  }
]

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
    LineChart,
    GlacierList
    // GithubCorner,
    // PanelGroup,
    // LineChart,
    // RaddarChart,
    // PieChart,
    // BarChart,
    // TransactionTable,
    // TodoList,
    // BoxCard
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      lineChartData: lineChartData.newVisitis,
      tableData: tableData
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    }
  }
}
</script>

<style scoped>
.wrapper {
  padding: 16px;
  margin-bottom: 16px;
}
</style>

<template>
  <div class="dashboard-editor-container">

    <h1>冰川消融监测系统</h1>

    <el-card id="map">
      <map-container :glaciers="glaciers" />
    </el-card>

    <div class="info">
      <h2>冰川信息</h2>
      <glacier-list :data="glaciers" />
    </div>
  </div>
</template>

<script>
import GlacierList from '@/components/GlacierList/index.vue'
import MapContainer from './components/MapContainer'
const glaciers = [
  {
    name: '玉龙雪山',
    glacierID: 13245,
    address: '云南省丽江市玉龙雪山',
    longitude: 100.2383,
    latitude: 27.1149
  },
  {
    name: '冰山1',
    glacierID: 132,
    address: '太平洋',
    longitude: 160,
    latitude: 26
  },
  {
    name: '冰山2',
    glacierID: 262,
    address: '太平洋',
    longitude: 177,
    latitude: -23
  },
  {
    name: '冰山3',
    glacierID: 15,
    address: '印度洋',
    longitude: 46,
    latitude: -30
  }
]

export default {
  components: {
    GlacierList,
    MapContainer
  },
  data() {
    return {
      glaciers: []
    }
  },
  created() {
    this.$store.dispatch('glaciers/updateGlaciers', glaciers)
    this.glaciers = this.$store.getters.glaciers
    // console.log(this.$store.state.glaciers.glaciers)
    console.log(this.$store.getters.glacier)
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

.dashboard-editor-container {
  padding: 32px;
  // background-color: rgb(240, 242, 245);
  position: relative;

  .info {
    padding: 16px;
  }
}

#map {
  margin: 8px;
}
</style>

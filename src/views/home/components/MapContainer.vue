<template>
  <div id="container" />
</template>
<script>
import AMapLoader from '@amap/amap-jsapi-loader'

export default {
  props: {
    glaciers: {
      type: Array,
      default: () => []
    }
  },
  mounted() {
    this.initAMap()
  },
  unmounted() {
    this.map?.destroy()
  },
  methods: {
    initAMap() {
      window._AMapSecurityConfig = {
        securityJsCode: '03f4bae9cd7a96f590065a32c37999a1'
      }
      AMapLoader.load({
        key: '239e26534fe9ba73020f456ef5e4bfce', // 申请好的Web端开发者Key，首次调用 load 时必填
        version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ['AMap.Scale'] // 需要使用的的插件列表，如比例尺'AMap.Scale'，支持添加多个如：['...','...']
      })
        .then((AMap) => {
          this.map = new AMap.Map('container', {
            // 设置地图容器id
            viewMode: '3D', // 是否为3D地图模式
            zoom: 2, // 初始化地图级别
            center: [116, 0] // 初始化地图中心点位置
          })
          var icon = new AMap.Icon({
            // image: '//a.amap.com/jsapi_demos/static/demo-center/marker/marker-bottom-left.png', // 指定图标的路径
            image: 'https://wimg.588ku.com/gif/21/03/08/913aabb78b2a6b1af240b6bfe7eee242.gif',
            size: new AMap.Size(22, 28), // 图标所占区域的大小
            imageSize: new AMap.Size(22, 28) // 指定图标的尺寸，用于高分辨率屏幕适配
          })
          for (let i = 0; i < this.glaciers.length; i++) {
            var marker = new AMap.Marker({
              icon: icon, // 自定义点标记
              position: [this.glaciers[i].longitude, this.glaciers[i].latitude], // 基点位置
              offset: new AMap.Pixel(0, 0), // 设置点标记偏移量
              anchor: 'bottom-center' // 设置锚点方位
            })
            marker.on('click', () => {
              this.$store.dispatch('glaciers/updateGlacier', this.glaciers[i])
              this.$router.push({ name: 'Analysis' })
            })
            this.map.add(marker)
          }
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }
}
</script>
<style scoped>
#container {
  width: 100%;
  height: 600px;
}

.close-btn {
  position: absolute;
  top: -6px;
  right: -8px;
  width: 15px;
  height: 15px;
  font-size: 12px;
  background: #ccc;
  border-radius: 50%;
  color: #fff;
  text-align: center;
  line-height: 15px;
  box-shadow: -1px 1px 1px rgba(10, 10, 10, .2);
}
</style>

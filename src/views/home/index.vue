<template>
  <div class="dashboard-editor-container">
    <h1>冰川消融监测系统</h1>
    <p>欢迎来到zcZhou制作的数据库课程设计项目：冰川消融监测系统</p>
    <div>
      <el-carousel height="400px" motion-blur>
        <el-carousel-item v-for="item in d" :key="item">
          <el-col :span="6" class="transparent-col"><!-- 这里是透明的占位内容 --></el-col>
          <el-col :span="6">
            <el-image style="width: 700px; height: 400px" :src="item.url" :fit="contain" />
          </el-col>
        </el-carousel-item>
      </el-carousel>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      d: [
        { 'url': 'https://tse1-mm.cn.bing.net/th/id/OLC.RyVbLeYk4kfppQ480x360?&rs=1&pid=ImgDetMain' },
        { 'url': 'https://media-cdn.sygictraveldata.com/media/800x600/612664395a40232133447d33247d383336353933343635' },
        { 'url': 'https://tse1-mm.cn.bing.net/th/id/OIP-C.cGjCuP5ghtV5SuGhFWIqUAHaHa?rs=1&pid=ImgDetMain' },
        { 'url': 'https://b.zol-img.com.cn/desk/bizhi/image/10/960x600/1598319721647.jpg' }
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.transparent-col {
  background-color: transparent; /* 设置背景为透明 */
  /* 可以根据需要添加其他样式，比如高度、边框等 */
  height: 1px;
  // border: 1px solid #ccc; /* 为了可视化，这里添加了边框 */
}

.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>

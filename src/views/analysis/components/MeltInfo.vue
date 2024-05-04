<template>
  <div class="glacier-status-container">
    <div :class="`glacier-status status-${status}`">
      <h2>冰川状态</h2>
      <p>{{ statusText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    status: {
      type: String,
      default: 'stable', // 默认状态
      validator: value => ['stable', 'slow-melting', 'melting', 'rapid-melting'].includes(value)
    }
  },
  computed: {
    statusText() {
      switch (this.status) {
        case 'stable':
          return '稳定'
        case 'slow-melting':
          return '缓慢消融'
        case 'melting':
          return '消融'
        case 'rapid-melting':
          return '迅速消融'
        default:
          return '未知状态'
      }
    }
  }
}
</script>

<style scoped>
.glacier-status-container {
  text-align: center;
  padding: 16px;
}

.glacier-status {
  border-radius: 10px;
  color: white;
  padding: 20px;
  margin: 10px 0;
}

/* 定义四种状态的颜色渐变 */
.status-stable {
  background-image: linear-gradient(to right, #5499da, #5499da);
}

.status-slow-melting {
  background-image: linear-gradient(to right, #5499da, #85c1e9);
}

.status-melting {
  background-image: linear-gradient(to right, #5499da, #b4a7d6);
}

.status-rapid-melting {
  background-image: linear-gradient(to right, #5499da, #e47cbe);
}

h2 {
  margin: 0 0 10px;
}

p {
  margin: 0;
  font-size: 1rem;
}
</style>

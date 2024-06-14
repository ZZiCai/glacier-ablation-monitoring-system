<template>
  <div :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import * as echarts from 'echarts'
require('echarts/theme/infographic') // echarts theme
require('echarts/theme/macarons') // echarts theme
require('echarts/theme/inspired') // echarts theme
import resize from './mixins/resize'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '350px'
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object,
      required: true
    },
    theme: {
      type: String,
      default: 'infographic'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, this.theme)
      this.setOptions(this.chartData)
    },
    setOptions(chartData = { }) {
      const { expectedData, actualData, xData } = chartData
      console.log(xData)
      // { expectedData, actualData, xData } = {}
      this.chart.setOption({
        xAxis: {
          data: xData,
          boundaryGap: false,
          axisTick: {
            show: false
          }
        },
        grid: {
          left: 10,
          right: 10,
          bottom: 20,
          top: 30,
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          padding: [5, 10]
        },
        yAxis: {
          min: 'dataMin',
          max: 'dataMax',
          axisTick: {
            show: false
          }
        }
      })

      if (expectedData && actualData && xData) {
        this.chart.setOption({
          legend: {
            data: ['expected', 'actual']
          },
          series: [{
            name: 'expected',
            smooth: true,
            type: 'line',
            data: expectedData,
            animationDuration: 2800,
            animationEasing: 'cubicInOut'
          },
          {
            name: 'actual',
            smooth: true,
            type: 'line',
            data: actualData,
            animationDuration: 2800,
            animationEasing: 'quadraticOut'
          }]
        })
      } else {
        this.chart.setOption({
          series: [{
            type: 'line',
            data: actualData,
            animationDuration: 2800,
            animationEasing: 'cubicInOut'
          }]
        })
      }
    }
  }
}
</script>

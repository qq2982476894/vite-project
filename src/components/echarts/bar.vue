<template>
  <div class="chart_box"
       ref="chart_bar"></div>
</template>

<script setup>
import * as echarts from 'echarts';
const props = defineProps(['chartData']);
console.log(props.chartData, 'chartData');
const chart_bar = ref(null);
const option = reactive({
  xAxis: {
    type: 'category',
    data: ['一月', '二月', '三月', '四月'],
   
  },
  tooltip: {
    trigger: 'axis',
  },
  yAxis: {
    axisLine: {
      show: true,
    },
    type: 'value',
    splitLine: {
      show: false,
    },
  },
  grid: {
    width: '80%',
    height: '70%',
    left: '35',
    top: '20',
  },
  series: [
    {
      name: '姓名',
      data: [820, 801, 102, 230],
      label: {
        show: true,
        position: 'top',
        color: 'white',
      },
      type: 'bar',
      barWidth: 10,
      smooth: true,
    },
  ],
});
onMounted(() => {
  initChart();
});

// 基础配置一下Echarts
function initChart() {
  let chart = echarts.init(chart_bar.value);
  // 把配置和数据放这里
  option.xAxis.data = props.chartData.x;
  option.series[0].data = props.chartData.y;

  chart.setOption(option);
  window.onresize = function () {
    chart.resize();
  };
}
</script>

<style lang="less" scoped>
.chart_box {
  height: 100%;
}
</style>
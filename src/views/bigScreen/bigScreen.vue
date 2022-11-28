<template>
  <div class="page">
    <header class="header">天气预报</header>
    <div class="container flex_row">
      <section class="left-box flex_column">
        <Card :style="{width:'100%',height:'200px'}" title="天气不错">
            <Bar :chartData="chart1" />
        </Card>
        <div class="base_card">
          <div class="title">标题</div>
          <div class="chart-box">
            <Bar :chartData="chart2" />
          </div>
        </div>
        <div class="base_card">
          <div class="title">标题</div>
          <div class="chart-box">
            <Bar :chartData="chart3" />
          </div>
        </div>
      </section>
      <section class="mid-box flex_column">
        <div class="flex_row">
            <div class="base_card">
          <div class="title">标题</div>
          <div class="chart">图表</div>
        </div>
        </div>
        <div class="flex_row">
            <div class="base_card">
          <div class="title">标题</div>
          <div class="chart">图表</div>
        </div>
        </div>
      </section>
      <section class="right-box flex_column">
        <div class="base_card">
            <div class="title">标题</div>
            <div class="chart">图表</div>
          </div>
          <div class="base_card">
            <div class="title">标题</div>
            <div class="chart">图表</div>
          </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import Bar from '@/components/echarts/bar.vue';
import Card from '@/components/Card.vue'

const chart1 = reactive({
    x:['星期一','星期二','星期三','星期四','星期五']
    ,y:['5','11','22','33','66']
})
</script>

<style lang="less" src="./index.less">
</style>
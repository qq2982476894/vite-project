<template>
    <div class="base_card" :style="style">
    <div class="title">{{title}}</div>
    <div class="chart-box">
        <slot></slot>
    </div>
</div>
</template>
    
<script setup >
    const props = defineProps(
       {
        title:{
            default:'标题'
        },
        style:{
            default:{
                width:400,
                height:400
            }
        }
       }
    )
</script>
    
<style lang="less">
.base_card{
        border: 1px solid rgba(52, 242, 245, 0.1);
        width:100%;
        height: 300px;
        display: flex;
         flex-direction: column;
        box-sizing: border-box;
        .title{
            height: 26px;
        }
        .chart-box{
            flex: 1;
            padding: 10px;
        }
    }
</style>
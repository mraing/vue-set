<template>
  <div class="water-box">
    <ItemTitle :title="title" />
    <div class="water-number-wrapper">
      <span>累计已完成</span>
      <span><dv-digital-flop :config="digitalConfig" style="width:120px;height:50px;" /></span>
      <span>元</span>
    </div>
    <div class="water-wrapper">
      <dv-water-level-pond :config="waterConfig" style="width:100%;height:100%;" />
    </div>
  </div>
</template>

<script>
import ItemTitle from '../common/ItemTitle'
export default {
  data () {
    return {
      title: '计划资金累计完成情况',
      waterConfig: {
        data: [46, 60],
        shape: 'round',
        waveHeight: 10,
        waveNum: 3
      },
      digitalConfig: {
        number: [728914],
        content: '{nt}',
        style: {
          fill: '#68a2f8'
        }
      }
    }
  },
  components: {
    ItemTitle
  }
}
</script>

<style>
.water-wrapper{
  margin-top: 10px;
  width: 200px;
  height: 200px;
}
.dv-water-pond-level canvas {
  margin: 8px;
}
.water-number-wrapper{
  display: flex;
  height: 50px;
  color: #fff;
  /* background: grey; */
  line-height: 50px;
}
.water-number-wrapper>span:nth-child(2){
  flex: 1;
}
</style>

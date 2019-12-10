<template>
  <div class="content-wrapper-left">
    <h1 class="ranking-title">巡查上报记录数量</h1>
    <div class="content-ranking">
      <dv-scroll-ranking-board
        class="ranking-item"
        v-for="(ranking, index) in rankingList"
        :key="index + ranking.name"
        :config="ranking"
        style="width:100%;height:100%"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CententLeft',
  data () {
    return {
      rankingList: [{
        data: [{
          name: '交通事故',
          value: 55
        }, {
          name: '计日工',
          value: 80
        }, {
          name: '路面',
          value: 78
        }, {
          name: '桥通',
          value: 66
        }, {
          name: '桥日常养护',
          value: 66
        }, {
          name: '路基',
          value: 45
        }, {
          name: '交安设施',
          value: 29
        }],
        unit: '件',
        waitTime: 5000
      }]
    }
  }
}
</script>

<style>
.content-wrapper-left{
  margin-right: 10px;
  width: 25%;
  background: #09193f;
}
.content-ranking{
  padding: 20px 25px;
  padding-top: 0;
  height: 100%;
}
.ranking-item{
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}
.ranking-item > div{
  flex: 1;
  width: 100%;
  min-height: 90px;
}
.ranking-title{
  font-size: 20px;
  color: #fff;
  font-weight: 700;
  padding-top: 20px;
}
</style>

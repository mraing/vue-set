<template>
  <div class="content-wrapper-right">
    <div class="content-right-top">
      <div class="content-right-top-item">
        <CententRightConical />
      </div>
      <div class="content-right-top-item">
       <CententRightWaterLevel />
      </div>
      <div class="content-right-top-item">
        <CententRightScrollBoard />
      </div>
    </div>
    <div class="content-right-bottom">
      <CententRightMap/>
      <CententRightRinkChart :ringConfig="ringConfig1" :title="titleArr[0]" />
      <CententRightRinkChart :ringConfig="ringConfig2" :title="titleArr[1]" />
      <CententRightRinkChart :ringConfig="ringConfig3" :title="titleArr[2]" />
    </div>
  </div>
</template>

<script>
import CententRightConical from './CententRightConical'
import CententRightWaterLevel from './CententRightWaterLevel'
import CententRightScrollBoard from './CententRightScrollBoard'
import CententRightMap from './CententRightMap'
import CententRightRinkChart from './CententRightRinkChart'
export default {
  data () {
    return {
      titleArr: ['故障率周排行', '故障率月排行', '故障率年排行'],
      ringConfig1: {
        radius: '65 %',
        activeRadius: '75%',
        lineWidth: 40,
        activeTimeGap: 5000,
        animationCurve: 'easeInOutQuad',
        animationFrame: 60,
        digitalFlopStyle: {
          fontSize: 25,
          fill: '#fff'
        },
        data: [
          {
            name: '西峡',
            value: 37
          },
          {
            name: '周口',
            value: 110
          },
          {
            name: '南阳',
            value: 87
          },
          {
            name: '新乡',
            value: 25
          },
          {
            name: '驻马店',
            value: 57
          }
        ]
      },
      ringConfig2: {
        radius: '65 %',
        activeRadius: '75%',
        lineWidth: 40,
        activeTimeGap: 5000,
        animationCurve: 'easeInOutQuad',
        animationFrame: 60,
        digitalFlopStyle: {
          fontSize: 25,
          fill: '#fff'
        },
        data: [
          {
            name: '驻马店',
            value: 29
          },
          {
            name: '南阳',
            value: 82
          },
          {
            name: '新乡',
            value: 98
          },
          {
            name: '西峡',
            value: 36
          },
          {
            name: '周口',
            value: 25
          }
        ]
      },
      ringConfig3: {
        radius: '65 %',
        activeRadius: '75%',
        lineWidth: 40,
        activeTimeGap: 5000,
        animationCurve: 'easeInOutQuad',
        animationFrame: 60,
        digitalFlopStyle: {
          fontSize: 25,
          fill: '#fff'
        },
        data: [
          {
            name: '新乡',
            value: 55
          },
          {
            name: '西峡',
            value: 120
          },
          {
            name: '周口',
            value: 78
          },
          {
            name: '驻马店',
            value: 66
          },
          {
            name: '南阳',
            value: 80
          }
        ]
      }
    }
  },
  components: {
    CententRightConical,
    CententRightWaterLevel,
    CententRightScrollBoard,
    CententRightMap,
    CententRightRinkChart
  }
}
</script>

<style scoped>
  .content-wrapper-right{
    margin-left: 10px;
    width: 75%;
    /* background: #09193f; */
  }
  .content-right-top{
    display: flex;
    justify-content: flex-start;
  }
  .content-right-top-item{
    padding: 10px;
    padding-top: 0;
    margin: 0 10px;
    background: #09193f;
  }
  .content-right-top-item:nth-child(1){
    margin-left: 0;
  }
  .content-right-top-item:nth-child(3){
    flex: 1;
    padding: 0;
  }
  .content-right-bottom{
    display: flex;
    margin-top: 20px;
    width: 100%;
    height: 100%;
    /* background: grey; */
  }
</style>

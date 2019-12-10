<template>
  <div>
    <ItemTitle :title="title" />
    <div class="flyine-map">
      <dv-conical-column-chart :config="conicalConfig" style="width:400px;height:200px;" />
    </div>
  </div>
</template>

<script>
import ItemTitle from '../common/ItemTitle'
export default {
  name: 'CententRightConical',
  data () {
    return {
      title: '施工故障率解决效率',
      conicalConfig: {
        data: [
          {
            name: '桥护',
            value: 55
          },
          {
            name: '路基',
            value: 120
          },
          {
            name: '计日工',
            value: 71
          },
          {
            name: '交通事故',
            value: 66
          },
          {
            name: '交安设施',
            value: 80
          },
          {
            name: '涵洞隧道',
            value: 35
          },
          {
            name: '桥通',
            value: 15
          }
        ],
        img: [
          require('../../assets/1st.png'),
          require('../../assets/2st.png'),
          require('../../assets/3st.png'),
          require('../../assets/4st.png'),
          require('../../assets/5st.png'),
          require('../../assets/6st.png'),
          require('../../assets/7st.png')
        ],
        showValue: true
      }
    }
  },
  components: {
    ItemTitle
  }
}
</script>

<style scoped>
.ranking-title {
  font-size: 20px;
  color: #fff;
  font-weight: 700;
  padding-top: 20px;
}
.flyine-map {
  margin-top: 50px;
  padding-bottom: 10px;
  width: 400px;
  /* height: 400px; */
}
</style>

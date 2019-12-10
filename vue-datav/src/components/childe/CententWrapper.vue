<template>
  <div class="content-wrapper">
    <!-- 巡查上报记录 -->
    <CententLeft/>
    <!-- 数据分析 -->
    <CententRight/>
  </div>
</template>

<script>
import CententLeft from './CententLeft'
import CententRight from './CententRight'
export default {
  name: 'Centent',
  data () {
    return {}
  },
  components: {
    CententLeft,
    CententRight
  }
}
</script>

<style scoped>
.content-wrapper{
  margin-top: 20px;
  display: flex;
  height: 100%;
  justify-content: space-between;
}
</style>

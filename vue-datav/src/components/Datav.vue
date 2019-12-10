<template>
  <div>
    <dv-loading v-if="isShow">Loading...</dv-loading>
    <dv-full-screen-container v-else class="body-wrapper">
      <!-- 头部 -->
      <HeaderTop />
      <!-- 头部项目列表 -->
      <HeaderItem/>
      <!-- 内容区 -->
      <CententWrapper/>
    </dv-full-screen-container>
  </div>
</template>

<script>
import HeaderTop from './childe/HeaderTop'
import HeaderItem from './childe/HeaderItem'
import CententWrapper from './childe/CententWrapper'
export default {
  name: 'Datav',
  data () {
    return {
      isShow: false
    }
  },
  components: {
    HeaderTop,
    HeaderItem,
    CententWrapper
  }
}
</script>

<style scoped>
.body-wrapper{
  height: 100%;
  background: #0b0d1e;
}

</style>

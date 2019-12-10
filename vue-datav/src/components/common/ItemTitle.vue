<template>
  <h1 class="ranking-title">{{title}}</h1>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '施工数据'
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
  .ranking-title{
    font-size: 20px;
    color: #fff;
    font-weight: 700;
    padding-top: 10px;
  }
</style>

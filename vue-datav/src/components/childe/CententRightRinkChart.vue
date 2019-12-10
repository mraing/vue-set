<template>
  <div class="ring-list">
    <div class="ring-title"><dv-decoration-7 style="width:100%;height:30px;">&nbsp;{{title}}&nbsp;</dv-decoration-7></div>
    <div class="ring-centent">
      <dv-active-ring-chart :config="ringConfig" style="width:100%;height:100%;" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CententRightRinkChart',
  props: {
    ringConfig: {
      type: Object
    },
    title: {
      type: String,
      default: '测试数据 2'
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
.ring-list{
  margin-left: 20px;
  padding: 0 20px;
  flex: 1;
  height:100%;
  background: #091934;
}
.ring-list-item{
  width: 300px;
  height: 300px;
}
.ring-centent{
  margin-top: 25px;
  width:250px;
  height:250px;
}
.ring-title{
  padding-top: 10px;
  text-align: center;
  font-weight: 700;
  color: #fff;
}
</style>

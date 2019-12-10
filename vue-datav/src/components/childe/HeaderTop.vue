<template>
  <div class="haeder-top">
      <div class="header-top-border">
        <dv-decoration-8 style="width:300px;height:50px;" />
        <dv-decoration-5 style="width:80%;height:60px;"/>
        <dv-decoration-8 :reverse="true" style="width:300px;height:50px;" />
      </div>
      <div class="header-title">施工综合养护数据</div>
    </div>
</template>

<script>
export default {
  name: 'HeaderTop'
}
</script>

<style>
.haeder-top{
  position: relative;
  width: 100%;
}
.header-top-border{
  position: relative;
  display: flex;
}
.header-top-border > div:nth-child(2){
  flex: 1;
  padding-top: 20px;
}
.header-title{
  position: absolute;
  top: 20px;
  left: 50%;
  right: 50%;
  margin: 0 -25%;
  font-size: 32px;
  color: #fff;
  font-weight: 900p;
}
</style>

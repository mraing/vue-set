<template>
  <div>
    <div class="item-top">
      <div class="item-top-detail" v-for="(item, index) in itemList" :key="index + item.title">
        <div class="item-name">{{item.title}}</div>
        <div class="item-number">
            <span><dv-digital-flop :config="item.digital"/></span>
            <span>{{item.unit}}</span>
        </div>
      </div>
    </div>
    <dv-decoration-10 class="item-top-border" style="width:90%;height:5px;" />
  </div>
</template>

<script>
export default {
  name: 'HeaderItem',
  data () {
    return {
      itemList: [{
        title: '管养里程',
        unit: '公里',
        digital: {
          number: [100],
          content: '{nt}',
          textAlign: 'right',
          style: {
            fontSize: 32,
            fill: '#5e9af5'
          }
        }
      }, {
        title: '铁路',
        unit: '座',
        digital: {
          number: [21],
          content: '{nt}',
          textAlign: 'right',
          style: {
            fontSize: 32,
            fill: '#e4703c'
          }
        }
      }, {
        title: '涵洞隧道',
        unit: '个',
        digital: {
          number: [28],
          content: '{nt}',
          textAlign: 'right',
          style: {
            fontSize: 32,
            fill: '#7ef7ee'
          }
        }
      }, {
        title: '匝道',
        unit: '个',
        digital: {
          number: [17],
          content: '{nt}',
          textAlign: 'right',
          style: {
            fontSize: 32,
            fill: '#5e9af5'
          }
        }
      }, {
        title: '隧道',
        unit: '个',
        digital: {
          number: [10],
          content: '{nt}',
          textAlign: 'right',
          style: {
            fontSize: 32,
            fill: '#e4703c'
          }
        }
      }, {
        title: '服务区',
        unit: '个',
        digital: {
          number: [6],
          content: '{nt}',
          textAlign: 'right',
          style: {
            fontSize: 32,
            fill: '#7ef7ee'
          }
        }
      }, {
        title: '收费区',
        unit: '个',
        digital: {
          number: [9],
          content: '{nt}',
          textAlign: 'right',
          style: {
            fontSize: 32,
            fill: '#5e9af5'
          }
        }
      }, {
        title: '限速区',
        unit: '个',
        digital: {
          number: [9],
          content: '{nt}',
          textAlign: 'right',
          style: {
            fontSize: 32,
            fill: '#e4703c'
          }
        }
      }, {
        title: '停车区',
        unit: '个',
        digital: {
          number: [6],
          content: '{nt}',
          textAlign: 'right',
          style: {
            fontSize: 32,
            fill: '#7ef7ee'
          }
        }
      }]
    }
  }
}
</script>

<style>
.item-top{
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  background: #09193f;
}
.item-top-detail{
  flex: 1;
  padding: 0 20px;
  font-size: 20px;
  color: #fff;
  text-align: center;
  border-right: 5px solid #0a205a;
}
.item-top > .item-top-detail:last-child{
  border-right: none;
}
.item-name{
  padding: 15px 0;
}
.item-number {
  padding: 10px 0;
  display: flex;
  height: 30px;
  align-items: center;
  justify-content: space-between;
}
.item-number > span:first-child{
  flex: 1;
  position: relative;
  top: 2px;
  margin-right: 5px;
}
.item-top-border{
  margin: auto;
}
</style>

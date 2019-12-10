<template>
  <div class="scroll-wrapper">
    <dv-scroll-board :config="scrollConfig" style="width:100%;height:100%;" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      scrollConfig: {
        header: ['时间', '隐害信息', '数量', '标段'],
        data: [
          ['2019-03-01 15:13:00', '路面危害-松散', '34', 'xxxxx'],
          ['2019-03-04 12:24:00', '路面危害-松散', '12', 'xxxxx'],
          ['2019-04-06 09:16:00', '路面危害-松散', '43', 'xxxxx'],
          ['2019-04-07 01:35:00', '路面危害-松散', '15', 'xxxxx'],
          ['2019-05-07 15:42:00', '路面危害-松散', '45', 'xxxxx'],
          ['2019-06-11 11:35:00', '路面危害-松散', '25', 'xxxxx'],
          ['2019-07-15 13:11:00', '路面危害-松散', '35', 'xxxxx'],
          ['2019-08-17 18:26:00', '路面危害-松散', '45', 'xxxxx'],
          ['2019-09-19 15:32:00', '路面危害-松散', '12', 'xxxxx'],
          ['2019-10-20 20:26:00', '路面危害-松散', '84', 'xxxxx']
        ],
        index: true,
        align: ['center'],
        headerBGC: '#3983ee',
        oddRowBGC: '#0b2543',
        evenRowBGC: '#0c182a',
        waitTime: 3000,
        headerHeight: 45,
        columnWidth: [50, 180, 180, 50, 50]
      }
    }
  }
}
</script>

<style>
  .scroll-wrapper{
    width: 100%;
    height: 100%;
  }
</style>

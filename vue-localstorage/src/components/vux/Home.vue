<template>
  <div>
    <h1>VUX</h1>
    <x-button
      type="default"
      :text="value2"
      @click.native="showPlugin"
    >
    </x-button>
  </div>
</template>

<script>
import { XButton } from 'vux'
export default {
  data () {
    return {
      isShow: false,
      value1: '',
      value2: '按钮C'
    }
  },
  components: {
    // Datetime,
    XButton
    // Group
  },
  methods: {
    showPlugin () {
      this.$vux.datetime.show({
        cancelText: '取消',
        confirmText: '确定',
        format: 'YYYY-MM-DD HH',
        value: '2017-05-20 18',
        onConfirm (val) {
          console.log('plugin confirm', val)
          this.value2 = val
        },
        onShow () {
          console.log('plugin show')
        },
        onHide () {
          console.log('plugin hide')
        }
      })
    }
  }
}
</script>

<style scoped>
</style>

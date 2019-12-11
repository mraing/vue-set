<template>
  <div>
    <h2>格式化</h2>
    <div>具名参数：<span>{{ $t('message.hello', { msg: '绪锋' }) }}</span></div>
    <div>列表参数：<span>{{ $t('message.helloT', ['剑颖']) }}</span></div>
    <div>列表参数：<span>{{ $t('message.helloT', {'0':'剑颖呀'}) }}</span></div>
    <div>HTML 格式化：<span>{{ $t('message.helloH') }}</span></div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

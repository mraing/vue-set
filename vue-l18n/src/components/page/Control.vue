<template>
  <div>
    <button class="select-lang-btn" @click="selectLang()">中文/日文</button>
  </div>
</template>

<script>
export default {
  name: 'Control',
  data () {
    return {}
  },
  methods: {
    selectLang (lang) {
      this.$i18n.locale = this.$i18n.locale === 'zh' ? 'ja' : 'zh'
    }
  }
}
</script>

<style>
  .select-lang-btn{
    margin: 10px;
    padding: 0 20px;
    line-height: 30px;
    border-radius: 5px;
    color: #fff;
    background: #2196F3;
    border: none;
    outline: none;
  }
</style>

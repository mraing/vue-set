<template>
  <div>
    <h2>本地存储</h2>
    <div>
      <input type="text" v-model="msg" placeholder="等待输入">
      <button @click="addClick()">新增</button>
    </div>
    <ul>
      <li v-for="(item, index) in msgList" :key="index">
        {{item}} <button @click="removeClick(index)">remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 双向绑定 msg
      msg: '',
      // 列表循环msgList
      msgList: []
    }
  },
  watch: {
    // 监听 msgList，每次变动就去做存储数据这个事情
    msgList () {
      this.savaClick()
    }
  },
  methods: {
    // 新增
    addClick () {
      // 如果 msg 为空，直接 return 结束
      if (!this.msg) return
      this.msgList.push(this.msg)
      this.msg = ''
    },
    // 删除
    removeClick (x) {
      this.msgList.splice(x, 1)
    },
    savaClick () {
      localStorage.setItem('locaMsgList', JSON.stringify(this.msgList))
    }
  },
  created () {
    // 判断本地存储中是否有值,有值的话赋予给msgList,没有的话，删除本地存储的locaMsgList进一步防止有东西乱入
    if (localStorage.getItem('locaMsgList')) {
      this.msgList = JSON.parse(localStorage.getItem('locaMsgList'))
    } else {
      localStorage.removeItem('locaMsgList')
    }
  }
}
</script>

<style>
</style>

<template>
  <div>
    <h2>本地存储</h2>
    <div v-for="(cat, n) in cats" :key="n">
      <p>
        <span class="cat">{{ cat.name }}</span>
        <button @click="removeCat(n)">Remove</button>
      </p>
    </div>
    <p>
      <input v-model="newCat" class="my-input">
      <button @click="addCat">Add Cat</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      // 定义一个空数组
      cats: [],
      // 双向绑定
      newCat: ''
    }
  },
  mounted () {
    // 在页面即将被挂载的时候加载 JSON 数据，如果本地存储有数据的话，就先从本地存储里面拿，如果没有的话，清空本地存储
    if (localStorage.getItem('cats')) {
      try {
        // 将本地存储中的数据拷贝到cats中
        this.cats = JSON.parse(localStorage.getItem('cats'))
      } catch (e) {
        localStorage.removeItem('cats')
      }
    }
  },
  watch: {
    cats () {
      // 监听数组是否发生了变化，每次增加后清空输入框
      console.log('watch')
      this.newCat = ''
    }
  },
  methods: {
    addCat () {
      console.log('执行新增')
      // 确保他们输入了一些东西
      if (!this.newCat) {
        return
      }
      this.cats.push({
        name: this.newCat,
        id: this.cats.length
      })
      this.saveCats()
    },
    removeCat (x) {
      console.log('执行删除')
      this.cats.splice(x, 1)
      this.saveCats()
    },
    saveCats () {
      console.log('执行保存')
      const parsed = JSON.stringify(this.cats)
      localStorage.setItem('cats', parsed)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my-input{
  border: 1px solid #eee;
  outline: none;
}
</style>

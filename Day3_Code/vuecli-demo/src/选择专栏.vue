<template>
  <div>
    <p>请选择你喜欢的专栏</p>
    <input type="checkbox" value="科幻" v-model="column">科幻
    <input type="checkbox" value="喜剧" v-model="column">喜剧
    <input type="checkbox" value="动漫" v-model="column">动漫
    <input type="checkbox" value="冒险" v-model="column">冒险
    <input type="checkbox" value="科技" v-model="column">科技
    <input type="checkbox" value="军事" v-model="column">军事
    <input type="checkbox" value="娱乐" v-model="column">娱乐
    <input type="checkbox" value="奇闻" v-model="column">奇闻

    <ul>
      <li v-for="(item,index) in column" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      column:[],
    }
  }
}
</script>

<style>

</style>
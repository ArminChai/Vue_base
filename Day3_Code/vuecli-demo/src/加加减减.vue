<template>
  <div>
    <ul>
      <li v-for="(item,index) in count" :key="index">{{item}}<button @click="del(index)">删除</button></li>
    </ul>
    <button @click="add">增加</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count :[1,5,8]
    }
  },
  methods: {
    del(index){
      this.count.splice(index,1)
    },
    add(){
      this.count.push(Math.ceil(Math.random()*100))
    }
  }
}
</script>

<style>

</style>
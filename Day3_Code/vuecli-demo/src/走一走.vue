<template>
  <div>
    <ul>
      <li v-for="item in person" :key="item">{{item}}</li>
    </ul>
    <button @click="btn">走一走</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      person:['帅哥','美女','程序员']
    }
  },
  methods: {
    btn(){
      this.person.push(this.person[0])
      this.person.shift()
    }
  }
}
</script>

<style>

</style>
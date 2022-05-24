<template>
  <div>
      <span>年龄：</span>
      <input type="text" v-model.number="age">
      <br>
      <span>人生格言：</span>
      <input type="text" v-model.trim="motto">
      <br>
      <span>自我介绍：</span>
      <input type="text" v-model.lazy="intro">
  </div>
</template>

<script>
export default {
    data () {
        return {
            age:'',
            motto:'',
            intro:'',
        }
    }
}
</script>

<style>

</style>
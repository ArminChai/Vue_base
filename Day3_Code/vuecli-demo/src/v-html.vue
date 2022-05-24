<template>
  <div>
      <p v-text="str">{{num}}</p>
      <p v-html="str">{{age}}</p>
      
  </div>
</template>

<script>
export default {
    data () {
        return {
            str:'<span>我是一个span标签</span>',
            num:20,
            age:22,
        }
    }
}
</script>

<style>

</style>
<template>
  <div>
      <a @click="one" href="https://www.baidu.com/">去百度</a>
      <a @click="two(10,$event)" href="https://www.taobao.com/">去淘宝</a>
  </div>
</template>

<script>
export default {
    methods:{
        one(e){
            e.preventDefault()
        },
        two(num,e){
            e.preventDefault()
        }
    }
}
</script>

<style>

</style>
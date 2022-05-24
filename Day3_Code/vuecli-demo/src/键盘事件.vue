<template>
  <div>
      <input type="text" @keyup.enter="enter">
      <input type="text" @keyup.esc="esc">
  </div>
</template>

<script>
export default {
    
    methods:{
        enter(){
            console.log('回车键被触发')
        },
        esc(){
          console.log('取消键被触发')  
        }
    }
}
</script>

<style>

</style>
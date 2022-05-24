<template>
  <div>
      <a v-bind:href="url" target="_blank">去百度</a>
      <img :src="imgUrl">
  </div>
</template>

<script>
export default {
    data(){
        return{
            url:'https://www.baidu.com/',
            imgUrl:'https://img.alicdn.com/bao/uploaded/i1/311551495/O1CN011MukZUddFIEidxY_!!311551495.jpg_200x200q90.jpg_.webp',
        }
    }
}
</script>

<style scoped>

</style>
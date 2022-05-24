<template>
  <div>
      <p>您要要购买的商品数量是：{{count}}件</p>
      <button v-on:click='count = count + 1'>+1</button>
      <button v-on:click='add'>+1</button>
      <button v-on:click='addCount(5)'>5</button>
      <button @click="subFn">-1</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            count:1
        }
    },
    methods:{
        add(){
            this.count++
        },
        addCount(num){
            this.count += num
        },
        subFn(){
            this.count--
        }
    }
}
</script>

<style>

</style>
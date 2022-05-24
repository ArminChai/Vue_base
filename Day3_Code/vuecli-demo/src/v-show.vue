<template>
  <div>
      <h1 v-show="isOk">v-show</h1>
      <h1 v-if="isOk">v-if</h1>

      <div>
          <p v-if="age >= 18">我免费了</p>
          <p v-else>还得吃饭长高高</p>
      </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            isOk:true,
            age:18
        }
    }
}
</script>

<style>

</style>
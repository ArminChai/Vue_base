<template>
    <div>
        <p>{{content}}</p>
        <button @click="reverse">逆转文字</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            content :'HELLO VUE'
        }
    },
    methods:{
        reverse(){
           this.content = this.content.split('').reverse().join('')
        }
    }
}
</script>

<style>

</style>
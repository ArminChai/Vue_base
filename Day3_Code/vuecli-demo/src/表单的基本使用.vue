<template>
  <div>
      <span>用户名：</span>
      <input type="text" value="userName" v-model="user">
      <span>密码：</span>
      <input type="password" value="password" v-model="pass">
      <br>
      <span>来自于：</span>
      <select v-model="city">
          <option value="北京市">北京</option>
          <option value="上海市">上海</option>
          <option value="广州市">广州</option>
          <option value="深圳市">深圳</option>
      </select>
      <br>
      <span>爱好：</span>
      <input type="checkbox" value="抽烟" v-model="hobby">抽烟
      <input type="checkbox" value="喝酒" v-model="hobby">喝酒
      <input type="checkbox" value="烫头" v-model="hobby">烫头
      <br>
      <span>性别:</span>
      <input type="radio" value="男" name="sex" v-model="gender">男
      <input type="radio" value="女" name="sex" v-model="gender">女
      <br>
      <span>自我介绍：</span>
      <textarea v-model="intro"></textarea>
  </div>
</template>

<script>
export default {
    data(){
        return{
            user:'',
            pass:'',
            city:'',
            hobby:[],
            gender:'',
            intro:'',
        }
    }
}
</script>

<style>

</style>
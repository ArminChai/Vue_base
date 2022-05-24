<template>
  <div>
      <ul>
          <li v-for="(item,index) in arr" :key = index>
              {{item}}-----{{index}}
          </li>
      </ul>

      <ul>
          <li v-for="obj in stuArr" :key="obj.id">
              <span>{{obj.name}}</span>
              <br>
              <span>{{obj.sex}}</span>
              <br>
              <span>{{obj.hobby}}</span>
          </li>
      </ul>

      <div>
          <p v-for="(value,key) in tObj" :key="key">
              <span>{{value}}</span>
              ======
              <span>{{key}}</span>
          </p>
      </div>

      <div v-for="i in count" :key="i">
          {{i}}
      </div>
  </div>
</template>

<script>
export default {
data () {
        return {
            arr: ["小明", "小欢欢", "大黄"],
      stuArr: [
        {
          id: 1001,
          name: "孙悟空",
          sex: "男",
          hobby: "吃桃子",
        },
        {
          id: 1002,
          name: "猪八戒",
          sex: "男",
          hobby: "背媳妇",
        },
      ],
      tObj: {
        name: "小黑",
        age: 18,
        class: "1期",
      },
      count: 10,
        }
    }
}
</script>

<style>

</style>
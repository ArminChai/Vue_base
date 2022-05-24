<template>
  <div id="app">
    <table class="tb">
      <caption>欢迎光临_vue开发的收银系统_水果店</caption>
      <tr>
        <th>苹果 10 ¥ /斤，折扣(8折) </th>
      </tr>
      <tr>
        <td>
          <span>请输入你要购买的斤数</span>
          <input type="text" v-model.number="count">
        </td>
      </tr>
      <tr>
        <td><button @click="maidan(10)">结账买单</button></td>
      </tr>
      <tr>
        <td>
          结账单：总价：<span>{{total}}</span> ¥元 折后价：<span>{{jia}}</span> ¥元 省了：<span>{{she}}</span> ¥元
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count:'0',
      total:0,
      jia:0,
      she:0
    };
  },
  methods: {
    maidan(num){
      this.total = this.count * num
      this.jia = this.total * 0.8
      this.she = this.total - this.jia
    }
  }
};
</script>

<style>
#app {
  width: 600px;
  margin: 10px auto;
}

.tb {
  /* border-collapse: collapse; */
  width: 100%;
}


.tb td,
.tb th {
  padding: 5px;
  border: 1px solid black;
  text-align: center;
}

.add {
  padding: 5px;
  border: 1px solid black;
  margin-bottom: 10px;
}
</style>
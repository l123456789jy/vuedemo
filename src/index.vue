<template>
  <div id="app">
    <h4 v-bind:title="message">鼠标悬停几秒钟查看此处动态绑定的提示信息！</h4>
    <p v-if="seen">如果是true你就能看到我</p>
    <p v-else>如果是fale你就能看到我</p>
    <h4>{{ mag }}</h4>
    <!-- v-bind:publicpath="publicPath"可以简写成 :publicpath="publicPath"-->
    <HelloWorld v-bind:publicpath="publicPath"/>
    <li v-for="todo in todos" :key="todo.tex" :style="[{color:(seen==true?'#CE0808':'#e2bcbc')},{fontSize:'20px'}]">
      {{ todo.tex }}
    </li>
    <p>{{ reverseDataMessage }}</p>
    <button  :style="styleObject" v-on:click="reverseMessage">反转消息</button>
    <input v-model="inputMessage" placeholder="edit me">
    <p>Message is: {{ inputMessage}}</p>

    <!-- 显示路由组件的位置 -->
    <router-view></router-view>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      conFontColor:"",
      inputMessage:"",
      seen: true,
      mag: "我是Data里面传递数据",
      publicPath: "我是传递给组件的",
      message: '页面加载于 ' + new Date().toLocaleString(),
      todos: [
        {tex: "我是数组1"},
        {tex: "我是数组2"}
      ],
      reverseDataMessage: "我是点击事件",

      styleObject: {
        backgroundColor:"yellow",
        color: 'red',
        fontSize: '13px',
        activeColor: 'red',
      },
    }
  },
  methods: {
    reverseMessage: function () {
      this.reverseDataMessage = this.reverseDataMessage.split('').reverse().join('')
    }
  },



  created() {

  }

}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

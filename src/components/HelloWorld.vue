<template>
  <div class="hello">
    <h4>{{ publicpath }}</h4>
    <van-cell is-link @click="showPopup">展示弹出层</van-cell>
    <van-popup v-model="show" round position="bottom" :style="{ height: '30%' }"  closeable  close-icon-position="top-right">
     <h5>我是弹出层哦，哦是吗</h5>
    </van-popup>
  </div>
</template>

<script>
import { Popup } from 'vant';
import Vue from 'vue';
Vue.use(Popup);
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    publicpath: String
  },

  data() {
    return {
      show: false,
    };
  },

  methods: {
    showPopup() {
      this.show = true;
    },
  },
}
</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<style>
body {
  background: #f7f8fa;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 0.2rem;
}
</style>

<style lang="less" scoped>
.header {
  position: fixed;
  left: 0; top: 0; right: 0;
  height: 60px;
  background-color: #041938;
  .logo {
    height: 100%;
    color: #fff;
    display: flex;
    font-size: 20px; font-weight: bold;
    align-items: center;
    .logo-img {
      margin-right: 10px;
    }
  }
}
.left {
  position: fixed;
  left: 0; top: 60px; bottom: 0;
  padding-top: 20px;
  width: 220px;
  background: #fff; box-shadow: 0 8px 12px #ebedf0;
  font-size: 14px;
  .group {
    margin-bottom: 20px;
    padding-left: 20px;
    .group-title {
      font-weight: bold;
      padding: 10px 0;
    }
    .group-item {
      padding: 10px 0;
      cursor: pointer;
      &.active, &:hover {
        color: #4fc08d;
      }
      &.active {
        font-weight: bold;
      }
    }
  }
}
.center {
  padding: 80px 400px 40px 230px;
  .content {
    padding: 20px;
    background: #fff;
    border-radius: 12px;
  }
}
.right {
  position: fixed;
  right: 0; top: 60px; bottom: 0;
  width: 390px;
  .card {
    position: absolute;
    top: 30px;
    right: 30px;
    z-index: 1;
    box-sizing: border-box;
    width: 360px;
    min-width: 360px;
    min-height: 600px;
    overflow: hidden;
    background: #fff;
    border-radius: 12px;
    box-shadow: #ebedf0 0 4px 12px;
    iframe {
      width: 100%;
      height: 600px;
    }
  }
}
</style>

<template>
  <div class="header">
    <div class="logo">
      <div class="logo-img">👑</div>
      <span>KingUI</span>
    </div>
  </div>
  <div class="left">
    <div class="group" v-for="group in componentsList">
      <div class="group-title">{{group.name}}</div>
      <div
        class="group-item"
        v-for="com in group.childen"
        @click="onItemClick(com)">{{com.name}}</div>
    </div>
  </div>
  <div class="center">
    <router-view class="content"></router-view>
  </div>
  <div class="right">
    <div class="card">
      <iframe ref="mobile" src="./mobile.html" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance } from "vue";
import { useRouter } from 'vue-router'
const router = useRouter();

const componentsList = [
  {
    name: '开发指南',
    childen: [
      { name:  '介绍', id: 'home'},
      { name:  '快速上手', id: 'quickstart'},
    ]
  },
  {
    name: '基础组件',
    childen: [
      { name:  'Button按钮', id: 'button'},
      { name:  'Loading加载', id: 'loading'},
      { name:  'Icon图标'},
    ]
  },
]

const mobile = ref(null)

const onItemClick = (item) => {
  if (item.id) {
    let mobileWindow = mobile.value.contentWindow
    mobileWindow.postMessage({
      type: 'go-route',
      routeName: item.id
    })
    router.push({
      name: item.id
    })
  }
}
</script>

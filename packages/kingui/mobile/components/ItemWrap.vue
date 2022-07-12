<style lang="less" scoped>
.item-wrap {
  display: inline-block;
  text-align: center;
  width: 20%;
  vertical-align: top;
  font-size: 0.4rem;
  .title {
    font-size: 0.24rem;
    line-height: 0.3rem;
    height: 0.6rem;
  }
}
</style>

<template>
  <div class="item-wrap" :style="{'verticalAlign': align}">
    <slot></slot>
    <div class="title">{{title}}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    align: String,
  }
}
</script>
<script setup>
const props = defineProps({
  name: {
    type: String,
    default: 'chat-o'
  },
  type: {
    type: String,
    default: 'default',
    validator(value) {
      return ['success', 'primary', 'warning', 'danger', 'default'].includes(value)
    }
  },
  size: {
    type: String,
    default: 'inherit',
  }
})
</script>

<template>
  <i
    class="k-icon"
    :class="{
      [`k-icon-${name}`]: true,
      [`k-icon--${type}`]: true,
    }"
    :style="{
      'fontSize': size
    }"
  ></i>
</template>

<style lang="less" scoped>
@import '../../css/vars.less';
@import "./font-woff2.less";
.k-icon {
  each(@type-list, .(@type){
    &--@{type} {
      @color-key: ~'color-@{type}';
      color: @@color-key;
    }
  })
}
</style>

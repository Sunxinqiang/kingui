<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'default',
    validator (value) {
      return ['success', 'primary', 'warning', 'danger', 'default'].includes(value)
    }
  },
  fluid: Boolean,
  outline: Boolean,
  disabled: Boolean,
})
</script>

<template>
  <button
    class="k-btn"
    :disabled="disabled"
    :class="{
      [`k-${type}`]: true,
      fluid,
      outline,
      disabled,
    }">
    <slot></slot>
  </button>
</template>

<style lang="less" scoped>
@import '../../css/colors.less';
@border-width: 0.02rem;
.k-btn {
  position: relative;
  font-size: 0.32rem;
  padding: 0.2rem 0.3rem;
  border-radius: 0.06rem;
  color: @color-default;
  border: @border-width solid @color-default;
  cursor: pointer;
  each(@type-list, .(@type){
    &.k-@{type} {
      @color-key: ~'color-@{type}';
      color: #fff;
      border-color: @@color-key;
      background-color:  @@color-key;
      &.outline {
        color: @@color-key;
        background-color: #fff;
      }
    }
  })
  &.k-default {
    color: @color-default;
    border-color: lighten(@color-default, 50%);
    background-color: #fff;
  }
  &.fluid {
    width: 100%;
  }
  &::before {
    content: ' ';
    opacity: 0;
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    background: #000;
    border-color: #000;
  }
  &:active::before {
    opacity: 0.1;
  }
  &.disabled::before {
    opacity: 0.5;
    top: -@border-width; right: -@border-width; bottom: -@border-width; left: -@border-width;
    background: #fff;
    border-color: #fff;
    cursor: not-allowed;
  }
}
</style>

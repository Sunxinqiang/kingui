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
  size: {
    type: String,
    default: 'normal',
    validator (value) {
      return ['large', 'normal', 'small', 'mini'].includes(value)
    }
  }
})
</script>

<template>
  <button
    class="k-btn"
    :disabled="disabled?'disabled':false"
    :class="{
      [`k-btn--${type}`]: true,
      [`k-btn--${size}`]: true,
      'k-btn--fluid': fluid,
      'k-btn--outline': outline,
      'k-btn--disabled': disabled,
    }">
    <slot></slot>
  </button>
</template>

<style lang="less" scoped>
@import '@css/vars.less';
@import './vars.less';
.k-btn {
  position: relative;
  border-radius: @border-radius;
  color: @color-default;
  border: @border-width solid @color-default;
  cursor: pointer;
  -webkit-appearance: none;
  outline: none;
  each(@size-list, .(@size){
    &--@{size} {
      @height-key: ~'btn-height-@{size}';
      @padding-key: ~'btn-padding-@{size}';
      @font-key: ~'font-size-@{size}';
      height: @@height-key;
      padding: 0 @@padding-key;
      font-size: @@font-key;
    }
  })
  each(@type-list, .(@type){
    &--@{type} {
      @color-key: ~'color-@{type}';
      color: #fff;
      border-color: @@color-key;
      background-color:  @@color-key;
      &--outline {
        color: @@color-key;
        background-color: #fff;
      }
    }
  })
  &--default {
    color: @color-default;
    border-color: lighten(@color-default, 50%);
    background-color: #fff;
  }
  &--fluid {
    width: 100%;
  }
  &::before {
    content: ' ';
    opacity: 0;
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    background: #000;
    border-color: #000;
    transition: opacity @transition-fast;
  }
  &:active::before {
    opacity: 0.1;
  }
  &--disabled::before {
    opacity: 0.5;
    top: -@border-width; right: -@border-width; bottom: -@border-width; left: -@border-width;
    background: #fff;
    border-color: #fff;
    cursor: not-allowed;
  }
}
</style>

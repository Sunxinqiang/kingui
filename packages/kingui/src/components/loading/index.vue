<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'default',
    validator(value) {
      return ['success', 'primary', 'warning', 'danger', 'default'].includes(value)
    }
  },
  form: {
    type: String,
    default: 'form1',
    validator(value) {
      return ['form1', 'form2'].includes(value)
    }
  },
  fluid: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'normal',
    validator(value) {
      return ['large', 'normal', 'small', 'mini'].includes(value)
    }
  },
  color: String,
})
</script>

<template>
  <div
    class="k-loading"
    :class="{
      [`k-loading--${size}`]: true,
      [`k-loading--${form}`]: true,
      [`k-loading--${type}`]: true
    }"
    :style="{
      'backgroundColor': color,
      'borderColor': color
    }"
  ></div>
</template>

<style lang="less" scoped>
@import "@/css/vars.less";
.k-loading {
  display: inline-block;
  &--large {
    width: 1rem;
    height: 1rem;
  }
  &--normal {
    width: 0.5rem;
    height: 0.5rem;
  }
  &--small {
    width: 0.3rem;
    height: 0.3rem;
  }
  &--mini {
    width: 0.2rem;
    height: 0.2rem;
  }
  @form-color: @color-default;
  each(@type-list, .(@type){
    &--@{type} {
      @color-key: ~'color-@{type}';
      border-color:  @@color-key;
      background-color: @@color-key;
    }
  })
  &--form1 {
    border-width: 1px;
    border-style: solid;
    border-radius: 50%;
    border-top-color: transparent !important;
    background: transparent !important;
    animation: loading-form1 infinite 0.75s linear;
  }
  &--form2 {
    border-radius: 50%;
    border: none !important;
    animation: loading-form2 infinite 0.75s linear;
  }
}

@keyframes loading-form1 {
  0% {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes loading-form2 {
  0% {
    transform: scale(0.1);
    opacity: 1;
  }
  to {
    transform: scale(1);
    opacity: 0;
  }
}
</style>

<script setup>
const types = ['success', 'primary', 'warning', 'danger', 'default']
</script>

<template>
  <h2 class="text-center">按钮组件</h2>
  <SectionWrap title="类型">
    <Button
      class="mg-bottom-8 mg-right-4"
      v-for="type in types"
      :type="type">{{type}}</Button>
  </SectionWrap>
  <SectionWrap title="fluid">
    <Button
      class="mg-bottom-8 mg-right-4"
      v-for="type in types"
      :type="type"
      fluid>{{type}}</Button>
  </SectionWrap>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 0.28rem;
}
</style>

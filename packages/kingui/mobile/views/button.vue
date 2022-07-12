<style lang="less" scoped>
.mg-bottom-8 {
  margin-bottom: 0.2rem;
}
.mg-right-8 {
  margin-right: 0.2rem;
}
</style>

<template>
  <h2 class="text-center">按钮组件</h2>
  <SectionWrap title="类型：type">
    <Button
      class="mg-bottom-8 mg-right-8"
      v-for="type in types"
      :type="type">{{type}}</Button>
  </SectionWrap>
  <SectionWrap title="延展：fluid">
    <Button
      class="mg-bottom-8"
      v-for="type in types"
      :type="type"
      fluid>{{type}}</Button>
  </SectionWrap>
  <SectionWrap title="边框按钮：outline">
    <Button
      class="mg-bottom-8 mg-right-8"
      v-for="type in types"
      :type="type"
      outline>{{type}}</Button>
  </SectionWrap>
  <SectionWrap title="禁用：disabled">
    <Button
      class="mg-bottom-8 mg-right-8"
      v-for="type in types"
      :type="type"
      disabled>{{type}}</Button>
  </SectionWrap>
  <SectionWrap title="大小：size">
    <Button
      class="mg-bottom-8 mg-right-8"
      v-for="(size, index) in sizes"
      :size="size"
      :type="types[index]"
      >{{size}}</Button>
  </SectionWrap>
</template>

<script setup>
const types = ['success', 'primary', 'warning', 'danger', 'default']
const sizes = ['large', 'normal', 'small', 'mini']
</script>

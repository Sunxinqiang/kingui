<style lang="less" scoped>
.mg-bottom-8 {
  margin-bottom: 0.2rem;
}
.mg-right-8 {
  margin-right: 0.2rem;
}
</style>

<template>
  <h2 class="text-center">Loading组件</h2>
  <SectionWrap title="形式：form">
    <Loading
      class="mg-bottom-8 mg-right-8"
      v-for="form in forms"
      :form="form"></Loading>
  </SectionWrap>
  <SectionWrap title="类型：type">
    <Loading
      class="mg-bottom-8 mg-right-8"
      v-for="type in types"
      :type="type"
      form="form2"></Loading>
  </SectionWrap>
  <SectionWrap title="自定义颜色：color">
    <Loading
      class="mg-bottom-8 mg-right-8"
      color="pink"
      form="form2"></Loading>
    <Loading
      class="mg-bottom-8 mg-right-8"
      color="purple"
      form="form2"></Loading>
  </SectionWrap>
  <SectionWrap title="大小：size">
    <Loading
      class="mg-bottom-8 mg-right-8"
      v-for="size in sizes"
      :size="size"></Loading>
  </SectionWrap>
</template>

<script setup>
const types = ['success', 'primary', 'warning', 'danger', 'default']
const forms = ['form1', 'form2']
const sizes = ['large', 'normal', 'small', 'mini']
</script>

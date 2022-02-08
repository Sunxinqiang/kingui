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
    <ItemWrap
      class="mg-bottom-8 mg-right-8"
      v-for="form in forms"
      :title="form">
      <Loading :form="form"></Loading>
    </ItemWrap>
  </SectionWrap>
  <SectionWrap title="类型：type">
    <ItemWrap
      class="mg-bottom-8 mg-right-8"
      v-for="type in types"
      :title="type">
      <Loading :type="type" form="form2"></Loading>
    </ItemWrap>
  </SectionWrap>
  <SectionWrap title="自定义颜色：color">
    <ItemWrap title="pink" class="mg-bottom-8 mg-right-8">
      <Loading
        color="pink"
        form="form2"></Loading>
    </ItemWrap>
    <ItemWrap title="#666" class="mg-bottom-8 mg-right-8">
      <Loading
        color="#666"
        form="form2"></Loading>
    </ItemWrap>
  </SectionWrap>
  <SectionWrap title="大小：size">
    <ItemWrap
      class="mg-bottom-8 mg-right-8"
      v-for="(size,index) in sizes"
      :title="size"
      align="bottom">
      <Loading :size="size" :type="types[index]"></Loading>
    </ItemWrap>
  </SectionWrap>
</template>

<script setup>
const types = ['success', 'primary', 'warning', 'danger', 'default']
const forms = ['form1', 'form2']
const sizes = ['large', 'normal', 'small', 'mini']
</script>

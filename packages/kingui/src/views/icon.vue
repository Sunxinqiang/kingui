<style lang="less" scoped>
.mg-bottom-8 {
  margin-bottom: 0.2rem;
}
.mg-right-8 {
  margin-right: 0.2rem;
}
</style>

<template>
  <h2 class="text-center">icon组件</h2>
  <SectionWrap title="类型：type">
    <ItemWrap
      class="mg-bottom-8 mg-right-8"
      v-for="type in types"
      :title="type">
      <Icon :type="type"></Icon>
    </ItemWrap>
  </SectionWrap>
  <SectionWrap title="大小：size">
    <ItemWrap
      class="mg-bottom-8 mg-right-8"
      v-for="(size, index) in sizes"
      :title="size"
      align="bottom">
      <Icon
        :size="size"
        :type="types[index]"></Icon>
    </ItemWrap>
  </SectionWrap>
  <SectionWrap title="基础图标">
    <ItemWrap
      class="mg-bottom-8 mg-right-8"
      v-for="name in names.basic"
      :title="name"
    >
      <Icon :name="name"></Icon>
    </ItemWrap>
  </SectionWrap>
  <SectionWrap title="边框图标">
    <ItemWrap
      class="mg-bottom-8 mg-right-8"
      v-for="name in names.outline"
      :title="name"
    >
      <Icon :name="name"></Icon>
    </ItemWrap>
  </SectionWrap>
  <SectionWrap title="实心图标">
    <ItemWrap
      class="mg-bottom-8 mg-right-8"
      v-for="name in names.filled"
      :title="name"
    >
      <Icon :name="name"></Icon>
    </ItemWrap>
  </SectionWrap>
</template>

<script setup>
import names from '@/components/icon/names'
const types = ['success', 'primary', 'warning', 'danger', 'default']
const sizes = ['0.8rem', '0.6rem', '0.4rem', '0.3rem']
</script>

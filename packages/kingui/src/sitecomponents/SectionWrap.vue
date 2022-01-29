<style lang="less" scoped>
.section-wrap {
    .title {
        line-height: 1rem;
    }
}
</style>

<template>
    <section class="section-wrap">
        <h3 class="title">{{title}}</h3>
        <div>
            <slot></slot>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        title: String
    }
}
</script>
<style lang="less" scoped>
.wrap {
    font-size: 0.28rem;
    padding: 0.4rem;
    .title {
        font-size: 0.5rem;
        line-height: 1rem;
        font-weight: bold;
    }
    .tip {
        font-size: 0.28rem;
        color: rgba(69, 90, 100, 0.6);
    }
}
</style>

<template>
    <div class="wrap">
        <div class="title">👑 KingUI</div>
        <div class="tip">重量、不可靠的移动端组件库</div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>

</script>
<template>
  <PageContainer>
    <SectionTitle title="专题内容" subtitle="目的地专题与主题玩法预留" />
    <view class="subpackage-panel">专题页骨架，后续接 CMS 或内容服务。</view>
  </PageContainer>
</template>

<script setup lang="ts">
import SectionTitle from '@/components/business/SectionTitle/index.vue'
import PageContainer from '@/components/layout/PageContainer/index.vue'
</script>

<style lang="scss" scoped>
.subpackage-panel {
  @include card;

  padding: $space-md;
  color: $color-text-secondary;
}
</style>

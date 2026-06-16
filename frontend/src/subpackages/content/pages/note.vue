<template>
  <PageContainer>
    <SectionTitle title="游记详情" subtitle="用户游记与UGC预留" />
    <view class="subpackage-panel">游记页骨架，后续接 UGC 内容接口。</view>
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

<template>
  <PageContainer>
    <SectionTitle title="营销活动" subtitle="拼团、秒杀、会员权益预留" />
    <view class="subpackage-panel">活动页骨架，后续接营销服务与活动装修组件。</view>
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

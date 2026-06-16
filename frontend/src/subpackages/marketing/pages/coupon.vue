<template>
  <PageContainer>
    <SectionTitle title="领券中心" subtitle="优惠券、会员券、活动券预留" />
    <view class="subpackage-panel">领券页骨架，后续接营销券包接口。</view>
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

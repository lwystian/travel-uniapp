<template>
  <PageContainer>
    <SectionTitle title="常用出行人" />
    <view class="traveler-list">
      <view v-for="traveler in userStore.travelers" :key="traveler.id" class="traveler-card">
        <view class="traveler-card__name">{{ traveler.name }}</view>
        <view class="traveler-card__meta">{{ traveler.phone }} · {{ traveler.idType }}</view>
      </view>
    </view>
    <BaseEmpty v-if="userStore.travelers.length === 0" title="暂无出行人" />
  </PageContainer>
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import BaseEmpty from '@/components/base/BaseEmpty/index.vue'
import SectionTitle from '@/components/business/SectionTitle/index.vue'
import PageContainer from '@/components/layout/PageContainer/index.vue'
import { useUserStore } from '@/stores'

const userStore = useUserStore()

onLoad(() => {
  userStore.fetchTravelers()
})
</script>

<style lang="scss" scoped>
.traveler-list {
  display: flex;
  flex-direction: column;
  gap: $space-md;
}

.traveler-card {
  @include card;

  padding: $space-md;
}

.traveler-card__name {
  font-weight: 700;
}

.traveler-card__meta {
  margin-top: $space-xs;
  color: $color-text-secondary;
  font-size: $font-size-sm;
}
</style>

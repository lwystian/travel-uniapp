<template>
  <PageContainer v-if="destination">
    <view class="destination-detail__cover">
      <BaseImage :src="destination.cover" />
    </view>
    <view class="destination-detail__panel">
      <view class="destination-detail__name">{{ destination.name }}</view>
      <view class="destination-detail__desc">{{ destination.description }}</view>
      <view class="destination-detail__tags">
        <BaseTag v-for="tag in destination.tags" :key="tag" :text="tag" type="primary" />
      </view>
    </view>
    <SectionTitle title="当地亮点" />
    <view class="destination-detail__panel">
      <view v-for="item in destination.highlights" :key="item" class="destination-detail__item">{{
        item
      }}</view>
    </view>
    <button
      class="destination-detail__button"
      @tap="router.navigateTo(ROUTES.TOUR_LIST, { destination: destination.name })"
    >
      查看相关线路
    </button>
  </PageContainer>
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import BaseImage from '@/components/base/BaseImage/index.vue'
import BaseTag from '@/components/base/BaseTag/index.vue'
import SectionTitle from '@/components/business/SectionTitle/index.vue'
import PageContainer from '@/components/layout/PageContainer/index.vue'
import { ROUTES } from '@/constants/routes'
import { destinationApi } from '@/services/modules/destination'
import type { Destination } from '@/types/destination'
import { router } from '@/utils/router'

const destination = ref<Destination>()

onLoad(async (query) => {
  destination.value = await destinationApi.getDestinationDetail({
    id: String(query?.id || 'dest-1')
  })
})
</script>

<style lang="scss" scoped>
.destination-detail__cover {
  height: 360rpx;
  margin: -#{$space-md} -#{$space-md} 0;
}

.destination-detail__panel {
  @include card;

  margin-top: $space-md;
  padding: $space-md;
}

.destination-detail__name {
  font-size: $font-size-xl;
  font-weight: 700;
}

.destination-detail__desc,
.destination-detail__item {
  margin-top: $space-xs;
  color: $color-text-secondary;
}

.destination-detail__tags {
  display: flex;
  gap: $space-xs;
  margin-top: $space-md;
}

.destination-detail__button {
  height: 80rpx;
  margin-top: $space-lg;
  color: #fff;
  font-size: $font-size-md;
  line-height: 80rpx;
  background: $color-primary;
  border-radius: $radius-sm;
}
</style>

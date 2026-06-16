<template>
  <view class="team-custom-article">
    <view class="team-custom-article__body">
      <text class="team-custom-article__title">{{ detail.title }}</text>
      <text
        v-for="paragraph in detail.paragraphs"
        :key="paragraph"
        class="team-custom-article__paragraph"
      >
        {{ paragraph }}
      </text>
    </view>

    <view class="team-custom-article__meta">
      <text>更新日期：{{ detail.updatedAt }}</text>
      <text>阅读量：{{ detail.viewCount }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import type { TeamCustomDetail } from '@/types/team'

defineProps<{
  detail: TeamCustomDetail
}>()
</script>

<style lang="scss" scoped>
.team-custom-article {
  min-height: 100vh;
  padding: 34rpx 40rpx calc(46rpx + env(safe-area-inset-bottom));
  background: #fff;
  box-sizing: border-box;
}

.team-custom-article__body {
  display: flex;
  flex-direction: column;
}

.team-custom-article__title {
  margin-bottom: 28rpx;
  color: #161a22;
  font-size: 34rpx;
  font-weight: 700;
  line-height: 1.45;
}

.team-custom-article__paragraph {
  margin-bottom: 34rpx;
  color: #1f2329;
  font-size: 30rpx;
  line-height: 1.75;
  text-align: justify;
}

.team-custom-article__meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2rpx;
  color: #b7bec9;
  font-size: 28rpx;
  font-weight: 600;
  line-height: 1.4;
}
</style>

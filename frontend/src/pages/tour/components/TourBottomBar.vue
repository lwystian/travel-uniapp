<template>
  <view class="tour-bottom-bar">
    <view class="tour-bottom-bar__minor-actions">
      <view class="tour-bottom-bar__minor" @tap="$emit('home')">
        <text class="tour-bottom-bar__minor-icon">⌂</text>
        <text>首页</text>
      </view>
      <view class="tour-bottom-bar__minor" @tap="$emit('service')">
        <text class="tour-bottom-bar__minor-icon">☎</text>
        <text>客服</text>
      </view>
      <view class="tour-bottom-bar__minor" @tap="$emit('favorite')">
        <text class="tour-bottom-bar__minor-icon">{{ favorite ? '★' : '☆' }}</text>
        <text>{{ favorite ? '已收藏' : '收藏' }}</text>
      </view>
    </view>
    <button class="tour-bottom-bar__submit" @tap="$emit('submit')">立即报名</button>
  </view>
</template>

<script setup lang="ts">
defineProps<{
  favorite: boolean
}>()

defineEmits<{
  home: []
  service: []
  favorite: []
  submit: []
}>()
</script>

<style lang="scss" scoped>
.tour-bottom-bar {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 20;
  display: grid;
  grid-template-columns: 306rpx minmax(0, 1fr);
  gap: 18rpx;
  align-items: center;
  min-height: 104rpx;
  padding: 12rpx 18rpx calc(12rpx + env(safe-area-inset-bottom));
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 -8rpx 24rpx rgba(15, 23, 42, 0.08);
}

.tour-bottom-bar__minor-actions {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8rpx;
}

.tour-bottom-bar__minor {
  @include flex-center;

  flex-direction: column;
  color: #303a49;
  font-size: 21rpx;
  font-weight: 700;
}

.tour-bottom-bar__minor-icon {
  margin-bottom: 4rpx;
  font-size: 34rpx;
  line-height: 1;
}

.tour-bottom-bar__submit {
  height: 82rpx;
  margin: 0;
  padding: 0;
  color: #fff;
  font-size: 29rpx;
  font-weight: 900;
  line-height: 82rpx;
  background: linear-gradient(135deg, #21b66f, #12814b);
  border-radius: 999rpx;
  box-shadow: 0 10rpx 22rpx rgba(24, 160, 88, 0.22);
}

.tour-bottom-bar__submit::after {
  border: 0;
}
</style>

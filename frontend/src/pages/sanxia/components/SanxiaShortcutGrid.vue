<template>
  <view class="sanxia-shortcut-grid">
    <view
      v-for="item in items"
      :key="item.id"
      class="sanxia-shortcut-grid__item"
      @tap="$emit('select', item)"
    >
      <view class="sanxia-shortcut-grid__icon" :class="`sanxia-shortcut-grid__icon--${item.tone}`">
        <view
          class="sanxia-shortcut-grid__glyph"
          :class="`sanxia-shortcut-grid__glyph--${item.actionType}`"
        />
      </view>
      <text class="sanxia-shortcut-grid__title">{{ item.title }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import type { SanxiaShortcut } from '@/types/sanxia'

defineProps<{
  items: SanxiaShortcut[]
}>()

defineEmits<{
  select: [item: SanxiaShortcut]
}>()
</script>

<style lang="scss" scoped>
.sanxia-shortcut-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18rpx;
  padding: 28rpx 8rpx 6rpx;
}

.sanxia-shortcut-grid__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 0;
}

.sanxia-shortcut-grid__icon {
  @include flex-center;

  width: 72rpx;
  height: 72rpx;
  margin-bottom: 14rpx;
  border-radius: 22rpx;
  box-shadow: 0 12rpx 22rpx rgba(15, 89, 132, 0.14);
}

.sanxia-shortcut-grid__icon--blue {
  background: linear-gradient(145deg, #55d4ff, #2e9bff);
}

.sanxia-shortcut-grid__icon--purple {
  background: linear-gradient(145deg, #b181ff, #7d5cff);
}

.sanxia-shortcut-grid__icon--orange {
  background: linear-gradient(145deg, #ffbb49, #ff8b1f);
}

.sanxia-shortcut-grid__icon--teal {
  background: linear-gradient(145deg, #59e4d4, #12b6c9);
}

.sanxia-shortcut-grid__glyph {
  position: relative;
  width: 42rpx;
  height: 42rpx;
}

.sanxia-shortcut-grid__glyph::before,
.sanxia-shortcut-grid__glyph::after {
  position: absolute;
  content: '';
}

.sanxia-shortcut-grid__glyph--schedule::before {
  right: 0;
  bottom: 7rpx;
  left: 0;
  height: 19rpx;
  background: #fff;
  border-radius: 2rpx 2rpx 12rpx 12rpx;
}

.sanxia-shortcut-grid__glyph--schedule::after {
  top: 6rpx;
  left: 12rpx;
  width: 18rpx;
  height: 13rpx;
  background: rgba(255, 255, 255, 0.82);
  border-radius: 4rpx 4rpx 0 0;
}

.sanxia-shortcut-grid__glyph--brand::before {
  top: 9rpx;
  left: 9rpx;
  width: 24rpx;
  height: 24rpx;
  background: #fff;
  border-radius: 7rpx 7rpx 3rpx 3rpx;
  transform: rotate(45deg);
}

.sanxia-shortcut-grid__glyph--guide::before {
  inset: 5rpx 8rpx;
  background: #fff;
  border-radius: 4rpx;
}

.sanxia-shortcut-grid__glyph--guide::after {
  top: 11rpx;
  right: 11rpx;
  width: 7rpx;
  height: 24rpx;
  background: rgba(255, 120, 58, 0.8);
  border-radius: 8rpx;
}

.sanxia-shortcut-grid__glyph--order::before {
  inset: 4rpx 8rpx;
  background: #fff;
  border-radius: 8rpx;
}

.sanxia-shortcut-grid__glyph--order::after {
  top: 14rpx;
  left: 17rpx;
  width: 14rpx;
  height: 5rpx;
  background: rgba(255, 139, 31, 0.72);
  border-radius: 999rpx;
  box-shadow:
    0 10rpx 0 rgba(255, 139, 31, 0.72),
    0 20rpx 0 rgba(255, 139, 31, 0.72);
}

.sanxia-shortcut-grid__title {
  @include text-ellipsis;

  width: 100%;
  color: #4b5565;
  font-size: 24rpx;
  text-align: center;
}
</style>

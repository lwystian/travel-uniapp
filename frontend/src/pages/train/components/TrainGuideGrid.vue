<template>
  <view class="train-guide">
    <view
      v-for="item in items"
      :key="item.id"
      class="train-guide__item"
      @tap="$emit('select', item)"
    >
      <view class="train-guide__icon" :class="`train-guide__icon--${item.tone}`">
        <text class="train-guide__glyph" :class="`train-guide__glyph--${item.actionType}`"></text>
      </view>
      <text class="train-guide__title">{{ item.title }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import type { TrainGuideAction } from '@/types/train'

defineProps<{
  items: TrainGuideAction[]
}>()

defineEmits<{
  select: [item: TrainGuideAction]
}>()
</script>

<style lang="scss" scoped>
.train-guide {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8rpx;
  padding: 30rpx 24rpx 20rpx;
  background: #fff;
}

.train-guide__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 0;
}

.train-guide__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72rpx;
  height: 72rpx;
  border-radius: 24rpx;
  box-shadow: 0 12rpx 24rpx rgba(15, 23, 42, 0.08);
}

.train-guide__icon--cyan {
  background: linear-gradient(135deg, #67e8f9, #22d3ee);
}

.train-guide__icon--green {
  background: linear-gradient(135deg, #a3e635, #22c55e);
}

.train-guide__icon--coral {
  background: linear-gradient(135deg, #ffb199, #fb7185);
}

.train-guide__icon--amber {
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
}

.train-guide__glyph {
  position: relative;
  width: 34rpx;
  height: 34rpx;
}

.train-guide__glyph::before,
.train-guide__glyph::after {
  position: absolute;
  content: '';
}

.train-guide__glyph--booking::before {
  inset: 2rpx 6rpx;
  border: 4rpx solid #fff;
  border-radius: 6rpx;
}

.train-guide__glyph--booking::after {
  top: 12rpx;
  left: 12rpx;
  width: 10rpx;
  height: 4rpx;
  background: #fff;
  box-shadow: 0 10rpx 0 #fff;
}

.train-guide__glyph--condition::before {
  top: 6rpx;
  left: 4rpx;
  width: 8rpx;
  height: 22rpx;
  border-radius: 999rpx;
  background: #fff;
  box-shadow:
    11rpx 0 0 #fff,
    22rpx 0 0 #fff;
}

.train-guide__glyph--carriage::before {
  top: 5rpx;
  left: 4rpx;
  width: 26rpx;
  height: 24rpx;
  border: 4rpx solid #fff;
  border-radius: 5rpx;
}

.train-guide__glyph--carriage::after {
  bottom: 2rpx;
  left: 7rpx;
  width: 6rpx;
  height: 6rpx;
  background: #fff;
  border-radius: 50%;
  box-shadow: 16rpx 0 0 #fff;
}

.train-guide__glyph--refund::before {
  inset: 4rpx;
  border: 4rpx solid #fff;
  border-radius: 6rpx;
}

.train-guide__glyph--refund::after {
  top: 10rpx;
  left: 10rpx;
  width: 14rpx;
  height: 10rpx;
  border-bottom: 4rpx solid #fff;
  border-left: 4rpx solid #fff;
  transform: rotate(-45deg);
}

.train-guide__title {
  display: block;
  width: 100%;
  margin-top: 14rpx;
  color: #667085;
  font-size: 22rpx;
  line-height: 1.35;
  text-align: center;
}
</style>

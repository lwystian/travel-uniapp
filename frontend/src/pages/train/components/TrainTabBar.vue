<template>
  <view class="train-tab-bar">
    <view
      v-for="item in items"
      :key="item.key"
      class="train-tab-bar__item"
      :class="{ 'train-tab-bar__item--active': item.key === active }"
      @tap="$emit('select', item.key)"
    >
      <image
        class="train-tab-bar__icon"
        :src="item.key === active ? item.activeIcon : item.icon"
        mode="aspectFit"
      />
      <text class="train-tab-bar__text">{{ item.label }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
export type TrainTabBarKey = 'home' | 'order' | 'user'

withDefaults(
  defineProps<{
    active?: TrainTabBarKey
  }>(),
  {
    active: 'home'
  }
)

defineEmits<{
  select: [key: TrainTabBarKey]
}>()

const items: Array<{
  key: TrainTabBarKey
  label: string
  icon: string
  activeIcon: string
}> = [
  {
    key: 'home',
    label: '首页',
    icon: '/static/tabbar/home.png',
    activeIcon: '/static/tabbar/home-active.png'
  },
  {
    key: 'order',
    label: '订单',
    icon: '/static/tabbar/order.png',
    activeIcon: '/static/tabbar/order-active.png'
  },
  {
    key: 'user',
    label: '我的',
    icon: '/static/tabbar/user.png',
    activeIcon: '/static/tabbar/user-active.png'
  }
]
</script>

<style lang="scss" scoped>
.train-tab-bar {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 20;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  min-height: 100rpx;
  padding: 8rpx 0 calc(8rpx + env(safe-area-inset-bottom));
  background: #fff;
  border-top: 1rpx solid rgba(238, 240, 244, 0.96);
}

.train-tab-bar__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 0;
  color: #9aa0a8;
}

.train-tab-bar__item--active {
  color: #111;
}

.train-tab-bar__icon {
  width: 48rpx;
  height: 48rpx;
  margin-bottom: 2rpx;
}

.train-tab-bar__text {
  font-size: 22rpx;
  line-height: 1.2;
}
</style>

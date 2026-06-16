<template>
  <view class="xisha-bottom-nav">
    <view
      v-for="item in items"
      :key="item.key"
      class="xisha-bottom-nav__item"
      :class="{ 'xisha-bottom-nav__item--active': item.key === active }"
      @tap="$emit('select', item.key)"
    >
      <image
        class="xisha-bottom-nav__icon"
        :src="item.key === active ? item.activeIcon : item.icon"
        mode="aspectFit"
      />
      <text class="xisha-bottom-nav__text">{{ item.label }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
export type XishaBottomNavKey = 'xisha' | 'compare' | 'order'

withDefaults(
  defineProps<{
    active?: XishaBottomNavKey
  }>(),
  {
    active: 'xisha'
  }
)

defineEmits<{
  select: [key: XishaBottomNavKey]
}>()

const items: Array<{
  key: XishaBottomNavKey
  label: string
  icon: string
  activeIcon: string
}> = [
  {
    key: 'xisha',
    label: '西沙',
    icon: '/static/tabbar/home.png',
    activeIcon: '/static/tabbar/home-active.png'
  },
  {
    key: 'compare',
    label: '邮轮对比',
    icon: '/static/tabbar/compare.png',
    activeIcon: '/static/tabbar/compare-active.png'
  },
  {
    key: 'order',
    label: '订单',
    icon: '/static/tabbar/order.png',
    activeIcon: '/static/tabbar/order-active.png'
  }
]
</script>

<style lang="scss" scoped>
.xisha-bottom-nav {
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

.xisha-bottom-nav__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 0;
  color: #9aa0a8;
  transition: color 0.18s ease;
}

.xisha-bottom-nav__item--active {
  color: #111;
}

.xisha-bottom-nav__icon {
  width: 48rpx;
  height: 48rpx;
  margin-bottom: 2rpx;
}

.xisha-bottom-nav__text {
  font-size: 22rpx;
  line-height: 1.2;
}
</style>

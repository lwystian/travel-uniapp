<template>
  <view class="user-menu-panel">
    <view v-if="title" class="user-menu-panel__title">{{ title }}</view>
    <view
      v-for="item in items"
      :key="item.key"
      class="user-menu-panel__item"
      @tap="$emit('select', item.key)"
    >
      <view class="user-menu-panel__left">
        <view class="user-menu-panel__icon">{{ item.icon }}</view>
        <view>
          <view class="user-menu-panel__label">{{ item.label }}</view>
          <view v-if="item.desc" class="user-menu-panel__desc">{{ item.desc }}</view>
        </view>
      </view>
      <view class="user-menu-panel__right">
        <text v-if="item.extra" class="user-menu-panel__extra">{{ item.extra }}</text>
        <text class="user-menu-panel__arrow">›</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
export interface UserMenuItem {
  key: string
  label: string
  icon: string
  desc?: string
  extra?: string
}

withDefaults(
  defineProps<{
    title?: string
    items: UserMenuItem[]
  }>(),
  {
    title: ''
  }
)

defineEmits<{
  select: [key: string]
}>()
</script>

<style lang="scss" scoped>
.user-menu-panel {
  margin: $space-md $space-md 0;
  padding: 6rpx 0;
  background: #fff;
  border: 1rpx solid rgba(219, 226, 236, 0.92);
  border-radius: 28rpx;
  box-shadow: 0 14rpx 34rpx rgba(18, 31, 56, 0.05);
}

.user-menu-panel__title {
  padding: 22rpx $space-md 8rpx;
  color: #101828;
  font-size: $font-size-md;
  font-weight: 900;
}

.user-menu-panel__item {
  @include flex-between;

  min-height: 100rpx;
  padding: 0 $space-md;
}

.user-menu-panel__item + .user-menu-panel__item {
  border-top: 1rpx solid #f0f2f6;
}

.user-menu-panel__left {
  display: flex;
  align-items: center;
  min-width: 0;
  gap: $space-sm;
}

.user-menu-panel__icon {
  @include flex-center;

  flex: 0 0 auto;
  width: 58rpx;
  height: 58rpx;
  color: #1d6fd3;
  font-size: $font-size-sm;
  font-weight: 900;
  background: #eef4ff;
  border-radius: 18rpx;
}

.user-menu-panel__label {
  color: #182230;
  font-size: $font-size-md;
  font-weight: 800;
}

.user-menu-panel__desc {
  @include text-ellipsis;

  max-width: 430rpx;
  margin-top: 4rpx;
  color: #98a2b3;
  font-size: $font-size-xs;
}

.user-menu-panel__right {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  gap: $space-xs;
  margin-left: $space-md;
}

.user-menu-panel__extra {
  color: #98a2b3;
  font-size: $font-size-xs;
}

.user-menu-panel__arrow {
  color: #c0c6d0;
  font-size: 38rpx;
  line-height: 1;
}
</style>

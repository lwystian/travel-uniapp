<template>
  <view class="user-profile-header">
    <view class="user-profile-header__main">
      <view class="user-profile-header__avatar">
        <BaseImage v-if="isLogin && user?.avatar" :src="user.avatar" />
        <text v-else>旅</text>
      </view>
      <view class="user-profile-header__info">
        <view class="user-profile-header__name">{{
          isLogin ? user?.nickname : '登录开启旅行服务'
        }}</view>
        <view class="user-profile-header__desc">
          {{ isLogin ? user?.memberLevel || '会员权益待完善' : '微信一键登录，查看订单与会员权益' }}
        </view>
      </view>
      <button
        v-if="!isLogin"
        class="user-profile-header__login"
        :loading="loading"
        @tap="$emit('login')"
      >
        微信登录
      </button>
      <view v-else class="user-profile-header__level">会员</view>
    </view>

    <view class="user-profile-header__meta">
      <view class="user-profile-header__meta-item">
        <text class="user-profile-header__meta-value">{{
          isLogin ? user?.city || '未设置' : '游客'
        }}</text>
        <text class="user-profile-header__meta-label">所在城市</text>
      </view>
      <view class="user-profile-header__divider" />
      <view class="user-profile-header__meta-item">
        <text class="user-profile-header__meta-value">{{ isLogin ? maskedPhone : '未绑定' }}</text>
        <text class="user-profile-header__meta-label">手机号</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseImage from '@/components/base/BaseImage/index.vue'
import type { UserInfo } from '@/types/user'

const props = defineProps<{
  isLogin: boolean
  loading: boolean
  user?: UserInfo | null
}>()

defineEmits<{
  login: []
}>()

const maskedPhone = computed(() => {
  const phone = props.user?.phone
  if (!phone || phone.length < 7) return '未绑定'
  return `${phone.slice(0, 3)}****${phone.slice(-4)}`
})
</script>

<style lang="scss" scoped>
.user-profile-header {
  padding: 34rpx $space-md $space-md;
  color: #fff;
  background: linear-gradient(135deg, #123766 0%, #1d6fd3 58%, #24a4cc 100%);
  border-radius: 0 0 36rpx 36rpx;
}

.user-profile-header__main {
  display: flex;
  align-items: center;
  gap: $space-md;
}

.user-profile-header__avatar {
  @include flex-center;

  flex: 0 0 auto;
  width: 118rpx;
  height: 118rpx;
  overflow: hidden;
  color: #1d6fd3;
  font-size: 42rpx;
  font-weight: 900;
  background: #fff;
  border: 6rpx solid rgba(255, 255, 255, 0.38);
  border-radius: 50%;
  box-shadow: 0 16rpx 36rpx rgba(7, 18, 34, 0.18);
}

.user-profile-header__info {
  flex: 1;
  min-width: 0;
}

.user-profile-header__name {
  @include text-ellipsis;

  font-size: 38rpx;
  font-weight: 900;
  line-height: 1.24;
}

.user-profile-header__desc {
  @include text-ellipsis;

  margin-top: 8rpx;
  font-size: $font-size-sm;
  opacity: 0.86;
}

.user-profile-header__login {
  flex: 0 0 auto;
  width: 154rpx;
  height: 62rpx;
  padding: 0;
  color: #123766;
  font-size: $font-size-sm;
  font-weight: 900;
  line-height: 62rpx;
  background: #fff;
  border-radius: 999rpx;
}

.user-profile-header__login::after {
  border: 0;
}

.user-profile-header__level {
  flex: 0 0 auto;
  padding: 10rpx 18rpx;
  color: #fff;
  font-size: $font-size-xs;
  font-weight: 900;
  background: rgba(255, 255, 255, 0.18);
  border: 1rpx solid rgba(255, 255, 255, 0.28);
  border-radius: 999rpx;
}

.user-profile-header__meta {
  display: flex;
  align-items: center;
  margin-top: $space-lg;
  padding: 20rpx 0;
  background: rgba(255, 255, 255, 0.13);
  border: 1rpx solid rgba(255, 255, 255, 0.2);
  border-radius: 24rpx;
}

.user-profile-header__meta-item {
  display: flex;
  flex: 1;
  min-width: 0;
  flex-direction: column;
  align-items: center;
}

.user-profile-header__meta-value {
  @include text-ellipsis;

  max-width: 250rpx;
  font-size: $font-size-md;
  font-weight: 900;
}

.user-profile-header__meta-label {
  margin-top: 6rpx;
  font-size: 20rpx;
  opacity: 0.72;
}

.user-profile-header__divider {
  width: 1rpx;
  height: 42rpx;
  background: rgba(255, 255, 255, 0.28);
}
</style>

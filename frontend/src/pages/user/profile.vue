<template>
  <PageContainer>
    <SectionTitle title="用户资料" />
    <view class="profile-panel">
      <view class="profile-row">
        <text>昵称</text>
        <text>{{ userStore.profile?.nickname || authStore.userInfo?.nickname }}</text>
      </view>
      <view class="profile-row">
        <text>手机号</text>
        <text>{{ userStore.profile?.phone || authStore.userInfo?.phone }}</text>
      </view>
      <view class="profile-row">
        <text>会员等级</text>
        <text>{{ userStore.profile?.memberLevel || authStore.userInfo?.memberLevel }}</text>
      </view>
    </view>
  </PageContainer>
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import SectionTitle from '@/components/business/SectionTitle/index.vue'
import PageContainer from '@/components/layout/PageContainer/index.vue'
import { useAuthStore, useUserStore } from '@/stores'

const authStore = useAuthStore()
const userStore = useUserStore()

onLoad(() => {
  userStore.fetchProfile()
})
</script>

<style lang="scss" scoped>
.profile-panel {
  @include card;
}

.profile-row {
  @include flex-between;

  min-height: 92rpx;
  padding: 0 $space-md;
  border-bottom: 1rpx solid $color-border;
}

.profile-row:last-child {
  border-bottom: 0;
}
</style>

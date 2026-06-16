<template>
  <PageContainer>
    <view class="login-page">
      <view class="login-page__title">欢迎登录 travel-uniapp</view>
      <view class="login-page__desc">登录后可报名线路、管理订单和收藏内容</view>

      <button class="login-page__button" :loading="loading" @tap="handleLogin">一键登录</button>
      <view class="login-page__sms">
        <input v-model="phone" placeholder="H5 手机号登录预留" type="number" />
        <input v-model="smsCode" placeholder="验证码" type="number" />
        <button @tap="handleSmsLogin">验证码登录</button>
      </view>
    </view>
  </PageContainer>
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import PageContainer from '@/components/layout/PageContainer/index.vue'
import { ROUTES } from '@/constants/routes'
import { useAuthStore } from '@/stores'
import { router } from '@/utils/router'

const authStore = useAuthStore()
const loading = ref(false)
const redirect = ref('')
const phone = ref('')
const smsCode = ref('')

onLoad((query) => {
  redirect.value = String(query?.redirect || '')
})

async function handleLogin() {
  loading.value = true
  try {
    await authStore.login()
    goAfterLogin()
  } finally {
    loading.value = false
  }
}

async function handleSmsLogin() {
  loading.value = true
  try {
    await authStore.loginBySms(phone.value, smsCode.value)
    goAfterLogin()
  } finally {
    loading.value = false
  }
}

function goAfterLogin() {
  if (redirect.value) {
    uni.redirectTo({ url: decodeURIComponent(redirect.value) })
    return
  }
  router.switchTab(ROUTES.USER_CENTER)
}
</script>

<style lang="scss" scoped>
.login-page {
  padding-top: 120rpx;
}

.login-page__title {
  font-size: $font-size-xl;
  font-weight: 700;
}

.login-page__desc {
  margin-top: $space-sm;
  color: $color-text-secondary;
}

.login-page__button {
  height: 88rpx;
  margin-top: $space-xl;
  color: #fff;
  font-size: $font-size-md;
  line-height: 88rpx;
  background: $color-primary;
  border-radius: $radius-sm;
}

.login-page__sms {
  @include card;

  display: flex;
  flex-direction: column;
  gap: $space-sm;
  margin-top: $space-lg;
  padding: $space-md;
}

.login-page__sms input {
  height: 72rpx;
  padding: 0 $space-sm;
  background: $color-bg;
  border-radius: $radius-sm;
}

.login-page__sms button {
  height: 72rpx;
  color: $color-primary;
  line-height: 72rpx;
  background: $color-primary-light;
  border-radius: $radius-sm;
}
</style>

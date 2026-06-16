<template>
  <view class="home-page">
    <template v-if="homeData">
      <HomeHeroSearch
        :hero="homeData.hero"
        :banners="homeData.banners"
        :menu-button-layout="menuButtonLayout"
        @search="router.navigateTo(ROUTES.SEARCH_INDEX)"
        @select="handleLink"
      />

      <view class="home-page__intro">
        <HomeServiceGrid :items="primaryCategories" @select="handleLink" />
      </view>

      <view class="home-page__notice">
        <HomeBookingNotice :notice="homeData.signupNotice" @select="handleLink" />
      </view>

      <view class="home-page__section home-page__section--cream">
        <HomeSectionHeader
          title="发现重庆"
          tag="网红景点"
          more-text="更多"
          @more="goSearch('重庆')"
        />
        <HomeDiscoveryCards :items="homeData.discoveryCards" @select="handleLink" />
      </view>

      <view
        v-for="section in productSections"
        :key="section.id"
        class="home-page__section"
        :class="section.tone === 'cream' ? 'home-page__section--cream' : 'home-page__section--blue'"
      >
        <HomeSectionHeader
          :title="section.title"
          :subtitle="section.subtitle"
          :more-text="section.moreText || '更多'"
          :tone="section.tone === 'cream' ? 'cream' : 'blue'"
          @more="handleLink(section)"
        />
        <HomeCityTourGrid :items="section.items" @select="handleLink" />
      </view>
    </template>
    <BaseLoading v-else />
  </view>
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { computed, ref } from 'vue'
import BaseLoading from '@/components/base/BaseLoading/index.vue'
import { platformAdapter } from '@/adapters/platform'
import { ROUTES } from '@/constants/routes'
import { homeApi } from '@/services/modules/home'
import type { HomeData, HomeLinkTarget } from '@/types/home'
import { router } from '@/utils/router'
import HomeBookingNotice from './components/HomeBookingNotice.vue'
import HomeCityTourGrid from './components/HomeCityTourGrid.vue'
import HomeDiscoveryCards from './components/HomeDiscoveryCards.vue'
import HomeHeroSearch from './components/HomeHeroSearch.vue'
import HomeSectionHeader from './components/HomeSectionHeader.vue'
import HomeServiceGrid from './components/HomeServiceGrid.vue'

const homeData = ref<HomeData>()
const menuButtonLayout = platformAdapter.getMenuButtonLayout()

const primaryCategories = computed(() => homeData.value?.categories.slice(0, 5) || [])
const productSections = computed(() =>
  homeData.value?.productSections?.length
    ? homeData.value.productSections
    : [
        {
          id: 'fallback-city-tour',
          title: '重庆游',
          tone: 'blue' as const,
          linkType: 'tour' as const,
          linkId: 'tour-1004',
          items: homeData.value?.cityTourCards || []
        }
      ]
)

onLoad(async () => {
  homeData.value = await homeApi.getHomeData()
})

function goSearch(keyword: string) {
  router.navigateTo(ROUTES.SEARCH_RESULT, { keyword })
}

function handleLink(target: HomeLinkTarget) {
  if (target.linkType === 'tour' && target.linkId) {
    router.navigateTo(ROUTES.TOUR_DETAIL, { id: target.linkId })
    return
  }

  if (target.linkType === 'destination') {
    if (target.linkId) {
      router.navigateTo(ROUTES.DESTINATION_DETAIL, { id: target.linkId })
      return
    }
    router.navigateTo(ROUTES.DESTINATION_LIST)
    return
  }

  if (target.linkType === 'article' && target.linkId) {
    router.navigateTo(ROUTES.ARTICLE_DETAIL, { id: target.linkId })
    return
  }

  if (target.linkType === 'marketing') {
    const path = target.linkId === 'coupon' ? ROUTES.MARKETING_COUPON : ROUTES.MARKETING_ACTIVITY
    router.navigateTo(path, target.linkId ? { id: target.linkId } : undefined)
    return
  }

  if (target.linkType === 'content') {
    router.navigateTo(ROUTES.CONTENT_TOPIC, target.linkId ? { id: target.linkId } : undefined)
    return
  }

  if (target.linkType === 'page') {
    if (target.linkId === 'chongqing') {
      router.navigateTo(ROUTES.CHONGQING_HOME)
      return
    }
    if (target.linkId === 'sanxia') {
      router.navigateTo(ROUTES.SANXIA_HOME)
      return
    }
    if (target.linkId === 'train') {
      router.navigateTo(ROUTES.TRAIN_HOME)
      return
    }
    if (target.linkId === 'team-custom') {
      router.navigateTo(ROUTES.TEAM_CUSTOM_DETAIL)
      return
    }
    if (target.linkId === 'xisha') {
      router.navigateTo(ROUTES.XISHA_HOME)
      return
    }
    if (target.linkId === 'cruise-compare') {
      router.navigateTo(ROUTES.CRUISE_COMPARE)
      return
    }
  }

  goSearch(target.keyword || '')
}
</script>

<style lang="scss" scoped>
.home-page {
  min-height: 100vh;
  padding-bottom: calc(40rpx + env(safe-area-inset-bottom));
  background: #f1faf8;
}

.home-page__intro {
  position: relative;
  z-index: 3;
  margin-top: -10rpx;
  padding: 0 $space-md 24rpx;
  background: #fff;
  box-shadow: 0 14rpx 38rpx rgba(31, 41, 55, 0.04);
}

.home-page__notice {
  padding: 18rpx $space-md 0;
  background: #f1faf8;
}

.home-page__section {
  position: relative;
  margin-top: 18rpx;
  padding: 26rpx 0 30rpx $space-md;
  overflow: hidden;
}

.home-page__section--cream {
  background:
    radial-gradient(circle at 99% 0, rgba(20, 184, 166, 0.1) 0, transparent 166rpx),
    linear-gradient(180deg, #f8fbfa 0%, #fff 76%);
}

.home-page__section--blue {
  background:
    radial-gradient(circle at 98% 0, rgba(15, 118, 110, 0.11) 0, transparent 180rpx),
    linear-gradient(180deg, #eef7f6 0%, #f8fbfa 72%);
}
</style>

<template>
  <view v-if="detail" class="tour-detail">
    <TourDetailNav
      title="活动详情"
      :solid="isNavSolid"
      :menu-button-layout="menuButtonLayout"
      @back="router.navigateBack()"
    />
    <TourDetailHero
      :title="detail.destination"
      :category-label="detail.categoryLabel || defaultCategoryLabel"
      :images="heroImages"
      @preview="previewImage"
    />

    <view class="tour-detail__body">
      <TourDetailSummary :detail="detail" :price="selectedPrice" />
      <TourDetailGuarantee :items="detail.serviceGuarantees || []" @select="openGuarantee" />
      <TourBookingPanel
        :detail="detail"
        :schedules="packageSchedules"
        :selected-schedule="selectedSchedule"
        :selected-package-key="selectedPackageKey"
        :quantity="quantity"
        @select-schedule="selectSchedule"
        @select-package="selectPackage"
        @change-quantity="changeQuantity"
        @more-date="showSchedulePopup = true"
      />
      <TourTravelerPanel
        :limit="detail.travelerLimit || 1"
        :traveler="selectedTraveler"
        @select="showTravelerPopup = true"
      />
      <TourDetailContent
        :detail="detail"
        :active-tab="activeTab"
        :selected-date="selectedSchedule?.date"
        @change-tab="activeTab = $event"
      />
    </view>

    <TourBottomBar
      :favorite="isFavorite"
      @home="goHome"
      @service="openCustomerService"
      @favorite="toggleFavorite"
      @submit="goConfirm"
    />

    <TourCalendarPicker
      v-model="showSchedulePopup"
      :schedules="packageSchedules"
      :selected-schedule="selectedSchedule"
      @select="selectSchedule"
    />

    <TourDetailPopup v-model="showTravelerPopup">
      <view class="tour-detail-popup">
        <view class="tour-detail-popup__title">选择游客</view>
        <view class="tour-detail-popup__traveler-list">
          <view
            v-for="traveler in travelers"
            :key="traveler.id"
            class="tour-detail-popup__traveler"
            :class="{ 'tour-detail-popup__traveler--active': selectedTraveler?.id === traveler.id }"
            @tap="selectTraveler(traveler)"
          >
            <view class="tour-detail-popup__traveler-avatar">{{ traveler.name.slice(0, 1) }}</view>
            <view class="tour-detail-popup__traveler-info">
              <view class="tour-detail-popup__traveler-name">
                {{ traveler.name }}
                <text v-if="traveler.isDefault">默认</text>
              </view>
              <view class="tour-detail-popup__traveler-id">{{ traveler.idNo }}</view>
            </view>
          </view>
          <button class="tour-detail-popup__add-traveler" @tap="addTempTraveler">
            新增临时游客
          </button>
        </view>
      </view>
    </TourDetailPopup>

    <TourDetailPopup v-model="showNoticePopup">
      <view class="tour-detail-popup">
        <view class="tour-detail-popup__title">购买须知</view>
        <view
          v-for="notice in detail.purchaseNotice || detail.bookingNotice"
          :key="notice"
          class="tour-detail-popup__notice"
        >
          {{ notice }}
        </view>
      </view>
    </TourDetailPopup>
  </view>
  <BaseLoading v-else />
</template>

<script setup lang="ts">
import { onLoad, onPageScroll } from '@dcloudio/uni-app'
import { computed, ref } from 'vue'
import BaseLoading from '@/components/base/BaseLoading/index.vue'
import { platformAdapter } from '@/adapters/platform'
import { ROUTES } from '@/constants/routes'
import { tourApi } from '@/services/modules/tour'
import { userApi } from '@/services/modules/user'
import { useFavoriteStore } from '@/stores'
import type { TourDetail, TourPackage, TourSchedule } from '@/types/tour'
import type { Traveler } from '@/types/user'
import { router } from '@/utils/router'
import TourBookingPanel from './components/TourBookingPanel.vue'
import TourBottomBar from './components/TourBottomBar.vue'
import TourCalendarPicker from './components/TourCalendarPicker.vue'
import TourDetailContent from './components/TourDetailContent.vue'
import TourDetailGuarantee from './components/TourDetailGuarantee.vue'
import TourDetailHero from './components/TourDetailHero.vue'
import TourDetailNav from './components/TourDetailNav.vue'
import TourDetailPopup from './components/TourDetailPopup.vue'
import TourDetailSummary from './components/TourDetailSummary.vue'
import TourTravelerPanel from './components/TourTravelerPanel.vue'

type DetailTab = 'highlight' | 'itinerary' | 'fee' | 'notice'

const favoriteStore = useFavoriteStore()
const detail = ref<TourDetail>()
const selectedSchedule = ref<TourSchedule>()
const selectedPackage = ref<TourPackage>()
const selectedPackageKey = ref('')
const selectedTraveler = ref<Traveler>()
const travelers = ref<Traveler[]>([])
const quantity = ref(1)
const activeTab = ref<DetailTab>('highlight')
const showSchedulePopup = ref(false)
const showTravelerPopup = ref(false)
const showNoticePopup = ref(false)
const isNavSolid = ref(false)
const menuButtonLayout = platformAdapter.getMenuButtonLayout()

const heroImages = computed(() =>
  detail.value?.images?.length ? detail.value.images : [detail.value?.cover || '']
)
const defaultCategoryLabel = computed(() =>
  detail.value
    ? `${detail.value.departureCity}出发 · ${detail.value.days}天${detail.value.nights}晚`
    : ''
)
const isFavorite = computed(() =>
  Boolean(detail.value && favoriteStore.tourIds.includes(detail.value.id))
)
const selectedPrice = computed(() => selectedSchedule.value?.adultPrice || detail.value?.price)
const packages = computed<TourPackage[]>(() => {
  if (!detail.value) return []
  if (detail.value.packages?.length) return detail.value.packages
  return (detail.value.ticketTypes || []).map((ticket) => ({
    id: ticket.id,
    tourId: detail.value!.id,
    name: ticket.name,
    days: detail.value!.days,
    nights: detail.value!.nights,
    departureCity: detail.value!.departureCity,
    destination: detail.value!.destination,
    description: ticket.description,
    price: ticket.price,
    stock: ticket.stock,
    tags: detail.value!.tags.slice(0, 2)
  }))
})
const packageSchedules = computed(() => {
  if (!detail.value) return []
  if (!selectedPackage.value) return detail.value.schedules
  const matched = detail.value.schedules.filter(
    (schedule) => schedule.packageId === selectedPackage.value?.id
  )
  return matched.length ? matched : detail.value.schedules
})

onLoad(async (query) => {
  const id = String(query?.id || 'tour-1001')
  detail.value = await tourApi.getTourDetail({ id })
  travelers.value = await userApi.getTravelers()
  selectedPackage.value = packages.value[0]
  selectedPackageKey.value = getPackageKey(packages.value[0], 0)
  selectedSchedule.value = getDefaultSchedule(packageSchedules.value)
  selectedTraveler.value =
    travelers.value.find((traveler) => traveler.isDefault) || travelers.value[0]
})

onPageScroll(({ scrollTop }) => {
  const nextSolid = scrollTop > 140
  if (isNavSolid.value !== nextSolid) {
    isNavSolid.value = nextSolid
  }
})

function selectSchedule(schedule: TourSchedule) {
  selectedSchedule.value = schedule
  if (quantity.value > maxQuantity()) {
    quantity.value = maxQuantity()
  }
}

function selectPackage(item: TourPackage, key: string) {
  const shouldCancel = selectedPackageKey.value === key
  selectedPackage.value = shouldCancel ? undefined : item
  selectedPackageKey.value = shouldCancel ? '' : key
  selectedSchedule.value = getDefaultSchedule(packageSchedules.value)
  quantity.value = Math.min(quantity.value, maxQuantity())
}

function changeQuantity(value: number) {
  quantity.value = Math.min(Math.max(value, 1), maxQuantity())
}

function maxQuantity() {
  return Math.max(1, Math.min(selectedSchedule.value?.stock || 1, 9))
}

function getDefaultSchedule(schedules: TourSchedule[]) {
  return schedules.find((schedule) => schedule.status === 'open') || schedules[0]
}

function getPackageKey(item: TourPackage | undefined, index: number) {
  if (!item) return ''
  return `${item.id || 'package'}-${index}`
}

function selectTraveler(traveler: Traveler) {
  selectedTraveler.value = traveler
  showTravelerPopup.value = false
}

function addTempTraveler() {
  const index = travelers.value.length + 1
  const traveler: Traveler = {
    id: `temp-traveler-${index}`,
    name: `游客${index}`,
    phone: '',
    idType: 'id_card',
    idNo: '待补充'
  }
  travelers.value = [...travelers.value, traveler]
  selectTraveler(traveler)
}

function previewImage(image: string) {
  const images = heroImages.value.filter(Boolean)
  if (!images.length) return
  platformAdapter.previewImage(images, image)
}

function openGuarantee() {
  uni.showToast({ title: '已展示退款和退订保障', icon: 'none' })
}

function goHome() {
  router.switchTab(ROUTES.HOME)
}

function openCustomerService() {
  platformAdapter.openCustomerService({ url: 'https://work.weixin.qq.com/kfid/kfc000000000' })
}

function toggleFavorite() {
  if (!detail.value) return
  favoriteStore.toggleTour(detail.value.id)
  uni.showToast({
    title: isFavorite.value ? '已收藏' : '已取消收藏',
    icon: 'none'
  })
}

function goConfirm() {
  if (!detail.value || !selectedSchedule.value) {
    uni.showToast({ title: '请先选择出行日期', icon: 'none' })
    return
  }
  if (packages.value.length && !selectedPackage.value) {
    uni.showToast({ title: '请先选择出行套餐', icon: 'none' })
    return
  }
  if (!selectedTraveler.value) {
    showTravelerPopup.value = true
    uni.showToast({ title: '请先选择游客', icon: 'none' })
    return
  }
  router.navigateTo(
    ROUTES.ORDER_CONFIRM,
    {
      tourId: detail.value.id,
      scheduleId: selectedSchedule.value.id,
      packageId: selectedPackage.value?.id,
      ticketId: selectedPackage.value?.id,
      quantity: quantity.value,
      travelerId: selectedTraveler.value.id
    },
    { auth: true }
  )
}
</script>

<style lang="scss" scoped>
.tour-detail {
  min-height: 100vh;
  padding-bottom: calc(122rpx + env(safe-area-inset-bottom));
  background: #f2f4f8;
}

.tour-detail__body {
  position: relative;
  z-index: 2;
}

.tour-detail-popup__title {
  color: #101828;
  font-size: 32rpx;
  font-weight: 900;
}

.tour-detail-popup__traveler-list {
  margin-top: 22rpx;
}

.tour-detail-popup__traveler {
  display: flex;
  align-items: center;
  margin-top: 14rpx;
  padding: 20rpx;
  background: #f7f8fb;
  border: 1rpx solid transparent;
  border-radius: 10rpx;
}

.tour-detail-popup__traveler--active {
  background: #fff2ed;
  border-color: #ff6b4a;
}

.tour-detail-popup__traveler-avatar {
  @include flex-center;

  width: 74rpx;
  height: 74rpx;
  color: #6b7280;
  font-size: 28rpx;
  font-weight: 900;
  background: #e9edf3;
  border-radius: 50%;
}

.tour-detail-popup__traveler-info {
  flex: 1;
  min-width: 0;
  margin-left: 18rpx;
}

.tour-detail-popup__traveler-name {
  color: #263344;
  font-size: 27rpx;
  font-weight: 900;
}

.tour-detail-popup__traveler-name text {
  margin-left: 10rpx;
  padding: 2rpx 8rpx;
  color: #ff4d2e;
  font-size: 20rpx;
  background: #fff0eb;
  border-radius: 4rpx;
}

.tour-detail-popup__traveler-id {
  @include text-ellipsis;

  margin-top: 8rpx;
  color: #8a93a3;
  font-size: 23rpx;
}

.tour-detail-popup__add-traveler {
  height: 76rpx;
  margin-top: 22rpx;
  color: #ff4d2e;
  font-size: 27rpx;
  font-weight: 900;
  line-height: 76rpx;
  background: #fff2ed;
  border-radius: 10rpx;
}

.tour-detail-popup__add-traveler::after {
  border: 0;
}

.tour-detail-popup__notice {
  margin-top: 18rpx;
  padding: 18rpx 20rpx;
  color: #4f5b6b;
  font-size: 26rpx;
  line-height: 1.55;
  background: #f7f8fb;
  border-radius: 8rpx;
}
</style>

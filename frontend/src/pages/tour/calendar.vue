<template>
  <PageContainer>
    <SectionTitle title="价格日历" subtitle="选择合适的出发日期" />
    <PriceCalendar :schedules="schedules" @select="selectSchedule" />
  </PageContainer>
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import PriceCalendar from '@/components/business/PriceCalendar/index.vue'
import SectionTitle from '@/components/business/SectionTitle/index.vue'
import PageContainer from '@/components/layout/PageContainer/index.vue'
import { tourApi } from '@/services/modules/tour'
import type { TourSchedule } from '@/types/tour'

const schedules = ref<TourSchedule[]>([])

onLoad(async (query) => {
  schedules.value = await tourApi.getTourSchedules({ tourId: String(query?.tourId || 'tour-1001') })
})

function selectSchedule(schedule: TourSchedule) {
  uni.showToast({ title: `已选择 ${schedule.date}`, icon: 'none' })
}
</script>

<template>
  <PageContainer>
    <SectionTitle title="目的地" subtitle="发现适合当季出发的地方" />
    <view class="destination-list">
      <DestinationCard
        v-for="destination in destinations"
        :key="destination.id"
        :destination="destination"
        @click="goDetail"
      />
    </view>
  </PageContainer>
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import DestinationCard from '@/components/business/DestinationCard/index.vue'
import SectionTitle from '@/components/business/SectionTitle/index.vue'
import PageContainer from '@/components/layout/PageContainer/index.vue'
import { ROUTES } from '@/constants/routes'
import { destinationApi } from '@/services/modules/destination'
import type { Destination } from '@/types/destination'
import { router } from '@/utils/router'

const destinations = ref<Destination[]>([])

onLoad(async () => {
  const result = await destinationApi.getDestinationList()
  destinations.value = result.list
})

function goDetail(destination: Destination) {
  router.navigateTo(ROUTES.DESTINATION_DETAIL, { id: destination.id })
}
</script>

<style lang="scss" scoped>
.destination-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: $space-md;
}
</style>

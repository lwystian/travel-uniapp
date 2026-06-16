<template>
  <view class="team-detail-page">
    <TeamCustomArticle v-if="detail" :detail="detail" />
    <BaseLoading v-else />
  </view>
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import BaseLoading from '@/components/base/BaseLoading/index.vue'
import { teamApi } from '@/services/modules/team'
import type { TeamCustomDetail } from '@/types/team'
import TeamCustomArticle from './components/TeamCustomArticle.vue'

const detail = ref<TeamCustomDetail>()

onLoad(async () => {
  detail.value = await teamApi.getTeamCustomDetail()
})
</script>

<style lang="scss" scoped>
.team-detail-page {
  min-height: 100vh;
  background: #fff;
}
</style>

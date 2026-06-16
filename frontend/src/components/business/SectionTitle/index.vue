<template>
  <view class="section-title">
    <view>
      <text class="section-title__main">{{ title }}</text>
      <text v-if="subtitle" class="section-title__sub">{{ subtitle }}</text>
    </view>
    <view v-if="moreText" class="section-title__more" @tap="$emit('more')">{{ moreText }}</view>
  </view>
</template>

<script setup lang="ts">
defineEmits<{
  more: []
}>()

withDefaults(
  defineProps<{
    title: string
    subtitle?: string
    moreText?: string
  }>(),
  {
    subtitle: '',
    moreText: ''
  }
)
</script>

<style lang="scss" scoped>
.section-title {
  @include flex-between;

  margin: $space-lg 0 $space-md;
}

.section-title__main {
  color: $color-text;
  font-size: $font-size-lg;
  font-weight: 700;
}

.section-title__sub {
  display: block;
  margin-top: 4rpx;
  color: $color-text-muted;
  font-size: $font-size-sm;
}

.section-title__more {
  color: $color-primary;
  font-size: $font-size-sm;
}
</style>

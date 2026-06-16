<template>
  <image class="base-image" :src="src || fallback" :mode="mode" @error="handleError" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(
  defineProps<{
    src?: string
    mode?: 'scaleToFill' | 'aspectFit' | 'aspectFill' | 'widthFix' | 'heightFix'
  }>(),
  {
    src: '',
    mode: 'aspectFill'
  }
)

const fallback = ref('/static/images/placeholder.png')

function handleError() {
  fallback.value = '/static/images/placeholder.png'
}

void props
</script>

<style lang="scss" scoped>
.base-image {
  width: 100%;
  height: 100%;
  background: #eef2f6;
}
</style>

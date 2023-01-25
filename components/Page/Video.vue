<script lang="ts" setup>
defineProps({
  source: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'video/mp4',
  },
})
</script>

<template>
  <video playsinline autoplay muted loop>
    <source :src="source" :type="type" />
    Your browser is old lol
  </video>
</template>

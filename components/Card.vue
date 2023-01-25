<script lang="ts" setup>
// micro compiler
const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  image: {
    type: String,
    default: '',
  },
  link: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <!-- Container -->
  <div class="container mt-32 mx-auto p-4 md:p-0">
    <div
      class="flex sm:flex-row flex-col-reverse p-2 gap-5 border-2 border-black dark:border-white"
    >
      <div class="w-full p-8 text-center self-center sm:mt-0 sm:w-1/2 sm:py-16">
        <h5 class="max-w-xs mx-auto text-lg font-bold sm:text-base break-words">
          {{ props.text }}
        </h5>

        <Button
          text="Learn More"
          size="md"
          class="font-extrabold capitalize w-36 m-auto"
          :href="props.link ? props.link : undefined"
        />
      </div>
      <img class="mr-0 sm:w-1/2 sm:object-center h-auto" :src="props.image" />
    </div>
  </div>
  <!-- ./Container -->
</template>

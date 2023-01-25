<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
</script>

<template>
  <PageWrapper class="flex flex-col justify-center items-center">
    <PageHeader>
      <PageTitle :text="$t('pages.about.title')" class="capitalize" />
    </PageHeader>
    <PageBody>
      <div class="flex flex-col items-center gap-y-4">
        <div
          class="font-bold sm:text-xl md:text-2xl sm:w-full md:w-80 lg:w-[60%] text-center pb-2"
        >
          {{ $t('pages.about.description') }}
          <p>Happy Birthday Cat!</p>
        </div>
        <img
          src="/hb2u.jpg"
          class="inline-block rounded-full"
          alt="cck37"
          width="150"
          height="150"
        />
        <Button
          size="xs"
          text="Chris Kennedy (@cck37)"
          class="font-extrabold mt-4"
          href="https://github.com/cck37"
        />
      </div>
    </PageBody>
  </PageWrapper>
</template>

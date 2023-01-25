<script lang="ts" setup>
const { t } = useLang()
const { theme } = useCurrentTheme()

// meta
definePageMeta({
  layout: 'page',
})

// vars
const titlesText = computed<string[]>(() => t('pages.index.title').split(','))
const sourcePath = computed<string>(() =>
  theme.value === 'dark' ? '/night_time.mp4' : '/sea_girt_drone_vid.mp4'
)
const firstCardText = computed<string>(() => t('pages.index.first_card'))
const firstCardImage = computed<string>(() => t('pages.index.first_image'))
</script>

<template>
  <div class="flex-1 relative pb-4">
    <div
      class="flex justify-center items-center h-screen w-screen overflow-hidden"
    >
      <div class="video-wrapper w-full h-full">
        <PageVideo
          :key="theme"
          :source="sourcePath"
          type="video/mp4"
          class="min-w-full min-h-full max-w-fit xl:min-w-0 xl:min-h-0"
        />
        <h1 class="text-center flex flex-col z-10 gap-11">
          <span
            v-for="(item, i) in titlesText"
            :key="i"
            class="fire-text text-shadow text-gray-200 text-5xl sm:text-7xl md:text-7xl lg:text-7xl xl:text-7xl 2xl:text-8xl dark:uppercase dark:dark-title block"
          >
            {{ item }}
          </span>
        </h1>
      </div>
    </div>
    <PageBody>
      <div>
        <div data-aos="fade-left">
          <card
            :text="`${t('pages.index.first_card')}`"
            :image="`${t('pages.index.first_image')}`"
            :link="`${t('pages.index.first_link') ?? ''}`"
          />
        </div>
        <div data-aos="fade-right">
          <card
            :text="`${t('pages.index.second_card')}`"
            :image="`${t('pages.index.second_image')}`"
            :link="`${t('pages.index.second_link') ?? ''}`"
          />
        </div>
        <div data-aos="fade-left">
          <card
            :text="`${t('pages.index.third_card')}`"
            :image="`${t('pages.index.third_image')}`"
            :link="`${t('pages.index.third_link') ?? ''}`"
          />
        </div>
        <div data-aos="fade-right">
          <card
            :text="`${t('pages.index.fourth_card')}`"
            :image="`${t('pages.index.fourth_image')}`"
            :link="`${t('pages.index.fourth_link') ?? ''}`"
          />
        </div>
        <div data-aos="fade-left">
          <card
            :text="`${t('pages.index.fifth_card')}`"
            :image="`${t('pages.index.fifth_image')}`"
            :link="`${t('pages.index.fifth_link') ?? ''}`"
          />
        </div>
        <div data-aos="fade-right">
          <card
            :text="`${t('pages.index.sixth_card')}`"
            :image="`${t('pages.index.sixth_image')}`"
            :link="`${t('pages.index.sixth_link') ?? ''}`"
          />
        </div>
        <div data-aos="fade-bottom">
          <card
            :text="`${t('pages.index.seventh_card')}`"
            :image="`${t('pages.index.seventh_image')}`"
            :link="`${t('pages.index.seventh_link') ?? ''}`"
          />
        </div>
      </div>
    </PageBody>
  </div>
</template>

<style lang="scss">
$padding: 0.05em;

html.dark {
  .fire-text {
    color: rgb(255, 115, 0);
    text-shadow: 0 3px 20px red, 0 0 20px red, 0 0 10px orange,
      4px -5px 6px yellow, -4px -10px 10px yellow, 0 -10px 30px yellow;
    animation: 2s Blazing infinite alternate linear;
  }
  @keyframes Blazing {
    0% {
      text-shadow: 0 3px 20px red, 0 0 20px red, 0 0 10px orange, 0 0 0 yellow,
        0 0 5px yellow, -2px -5px 5px yellow, 4px -10px 10px yellow;
    }
    25% {
      text-shadow: 0 3px 20px red, 0 0 30px red, 0 0 20px orange, 0 0 5px yellow,
        -2px -5px 5px yellow, 3px -10px 10px yellow, -4px -15px 20px yellow;
    }
    50% {
      text-shadow: 0 3px 20px red, 0 0 20px red, 0 -5px 10px orange,
        -2px -5px 5px yellow, 3px -10px 10px yellow, -4px -15px 20px yellow,
        2px -20px 30px rgba(255, 255, 0, 0.5);
    }
    75% {
      text-shadow: 0 3px 20px red, 0 0 20px red, 0 -5px 10px orange,
        3px -5px 5px yellow, -4px -10px 10px yellow,
        2px -20px 30px rgba(255, 255, 0, 0.5),
        0px -25px 40px rgba(255, 255, 0, 0);
    }
    100% {
      text-shadow: 0 3px 20px red, 0 0 20px red, 0 0 10px orange, 0 0 0 yellow,
        0 0 5px yellow, -2px -5px 5px yellow, 4px -10px 10px yellow;
    }
  }
}

.text-shadow {
  text-shadow: 0 2px 4px theme('colors.slate.800');
}

video {
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.video-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

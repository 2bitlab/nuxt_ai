<template>
  <div class="container mx-auto flex flex-col gap-4 p-4">
    <div class="">
      <div class="overflow-hidden">
        <div class="flex gap-4 overflow-x-auto">
          <div
            v-for="videoType in showVideoTypeParentListRef"
            :key="videoType.id"
            :checked="videoType.checked"
            :class="{
              'text-primary': videoType.checked,
              'text-gray-300': !videoType.checked,
              'cursor-pointer': true,
              'text-lg': true,
              'font-bold': true,
              'py-2': true,
            }"
            @click="() => checkVideoTypeParent(videoType)"
          >
            {{ videoType.label }}({{ videoType.count }})
          </div>
        </div>
      </div>
      <div v-if="showVideoTypeListRef.length > 0" class="overflow-hidden">
        <div class="flex gap-4 overflow-x-auto">
          <NTag checkable :checked="isAllVideoTypeRef" @click="checkVideoTypeAll">
            {{ i18nRef.useVideoListAll }}
          </NTag>
          <NTag
            v-for="videoType in showVideoTypeListRef"
            :key="videoType.id"
            checkable
            :checked="videoType.checked"
            @click="() => checkVideoType(videoType.id)"
          >
            {{ videoType.label }}({{ videoType._count.videos }})
          </NTag>
        </div>
      </div>
    </div>
    <div class="flex gap-4">
      <div class="flex-1 overflow-hidden">
        <NSpin :show="videoListPendingRef">
          <NEmpty v-if="isListEmptyRef" />
          <div v-else class="overflow-y-auto">
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <NCard v-for="video in videoListRef" :key="video.id" hoverable @click="() => selectVideo(video.id)">
                <template #cover>
                  <div class="aspect-[266/357] cursor-pointer overflow-hidden">
                    <img :src="video.coverUrl" class="transform transition duration-300 hover:scale-110" />
                  </div>
                </template>
                <div class="flex cursor-pointer flex-col gap-1">
                  <NText tag="div" depth="1" strong class="line-clamp-2 pt-1 text-base" :title="video.summary">
                    {{ video.summary }}
                  </NText>
                  <NText tag="div" depth="3" class="text-ellipsis text-xs">
                    <template v-for="tag in video.videoTags" :key="tag.label">{{ `#${tag.label}  ` }}</template>
                  </NText>
                </div>
              </NCard>
            </div>
          </div>
        </NSpin>
      </div>

      <div class="flex max-w-xs flex-col gap-2">
        <div class="text-lg font-bold">{{ i18nRef.useVideoListVideoTagTitle }}</div>
        <div class="flex flex-wrap gap-2">
          <NTag
            v-for="videoTag in showVideoTagListRef"
            :key="videoTag.id"
            round
            checkable
            :checked="videoTag.checked"
            @click="() => checkVideo(videoTag.id)"
          >
            #{{ videoTag.label }}({{ videoTag._count.videos }})
          </NTag>
        </div>
      </div>
    </div>

    <div
      :class="{
        'fixed left-0 top-0 z-50 h-screen w-screen justify-center bg-black/50': showVideoPlayerRef,
        hidden: !showVideoPlayerRef,
      }"
    >
      <div class="absolute left-4 top-4 z-10">
        <NButton circle size="large" @click="closeVideoPlayer">
          <Icon name="material-symbols:close-rounded" size="24" />
        </NButton>
      </div>

      <div class="absolute bottom-20 left-4 right-4 z-10 flex items-end justify-between gap-10">
        <div v-if="selectedVideoRef" class="flex flex-col gap-4">
          <div
            class="text-base font-bold"
            :class="{ 'whitespace-pre-wrap': summaryMoreRef, 'line-clamp-2 whitespace-normal': !summaryMoreRef }"
            @click="() => summaryMoreToggle()"
          >
            {{ selectedVideoRef.summary }}
          </div>
          <NText tag="div" depth="3" class="flex flex-wrap gap-2 text-xs">
            <span v-for="tag in selectedVideoRef.videoTags" :key="tag.label">#{{ tag.label }}</span>
          </NText>
        </div>
        <div class="flex flex-col items-center gap-4">
          <NButtonGroup vertical>
            <NButton round class="h-10 w-9 px-0.5" :disabled="!showPrevVideoBtnRef" @click="playPrevVideo">
              <Icon name="material-symbols:keyboard-arrow-up" size="24" />
            </NButton>
            <NButton round class="h-10 w-9 px-0.5" :disabled="!showNextVideoBtnRef" @click="playNextVideo">
              <Icon name="material-symbols:keyboard-arrow-down" size="24" />
            </NButton>
          </NButtonGroup>

          <NTooltip trigger="hover" placement="left">
            <template #trigger>
              <NButton v-if="orderStatusRef === 'CANCEL'" round class="h-10 w-9 px-0.5" text @click="addOrder">
                <Icon name="material-symbols:playlist-add-rounded" size="24" />
              </NButton>
              <NButton
                v-else-if="orderStatusRef === 'WAIT_HANDEL'"
                round
                class="h-10 w-9 px-0.5"
                text
                @click="gotoOrderPage"
              >
                <Icon name="material-symbols:playlist-add-check-rounded" size="24" />
              </NButton>
              <NButton
                v-else-if="orderStatusRef === 'PROCESSING'"
                round
                class="h-10 w-9 px-0.5"
                text
                @click="gotoOrderPage"
              >
                <Icon name="material-symbols:cinematic-blur-outline" size="24" />
              </NButton>
              <NButton
                v-else-if="orderStatusRef === 'WAIT_CONFIRM'"
                round
                class="h-10 w-9 px-0.5"
                text
                @click="gotoOrderPage"
              >
                <Icon name="material-symbols:playlist-play-rounded" size="24" />
              </NButton>
              <NButton v-else-if="orderStatusRef === 'DONE'" round class="h-10 w-9 px-0.5" text @click="gotoOrderPage">
                <Icon name="material-symbols:ar-on-you-outline-rounded" size="24" />
              </NButton>
            </template>
            {{ orderStatusBtnTextRef }}
          </NTooltip>

          <NPopover trigger="hover" placement="left-end">
            <template #trigger>
              <NButton text>
                <Icon name="material-symbols:more-horiz" size="24" />
              </NButton>
            </template>
            <div v-if="selectedVideoRef" class="flex gap-2">
              <NButton @click="() => editVideo(selectedVideoRef.id)">{{ i18nRef.useVideoListVideoEdit }}</NButton>
              <NPopconfirm @positive-click="() => removeVideo(selectedVideoRef.id)">
                <template #trigger>
                  <NButton>{{ i18nRef.useVideoListVideoRemove }}</NButton>
                </template>
                {{ i18nRef.useVideoListVideoRemoveConfirm }}
              </NPopconfirm>
            </div>
          </NPopover>
        </div>
      </div>

      <VideoPlayer
        v-if="mulQualityVideoOptionsRef"
        :key="queryVideoIdRef"
        class="h-screen w-screen"
        :options="mulQualityVideoOptionsRef"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { NTag, NCard, NText, NEmpty, NButton, NButtonGroup, NPopover, NPopconfirm, NSpin, NTooltip } from 'naive-ui'

const {
  i18nRef,

  videoListRef,
  isListEmptyRef,
  // videoListRefresh,
  videoListPendingRef,

  showVideoTypeParentListRef,
  showVideoTypeListRef,
  // videoTypeListPendingRef,
  isAllVideoTypeRef,
  checkVideoTypeAll,
  checkVideoType,
  checkVideoTypeParent,

  showVideoTagListRef,
  // videoTagListPendingRef,
  checkVideo,

  queryVideoIdRef,
  showVideoPlayerRef,
  mulQualityVideoOptionsRef,
  showNextVideoBtnRef,
  showPrevVideoBtnRef,
  selectedVideoRef,
  summaryMoreRef,
  orderStatusRef,
  orderStatusBtnTextRef,
  summaryMoreToggle,
  selectVideo,
  closeVideoPlayer,
  playNextVideo,
  playPrevVideo,
  removeVideo,
  editVideo,
  addOrder,
  gotoOrderPage,
} = useVideoList()
</script>

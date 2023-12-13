<template>
  <div class="container mx-auto p-4">
    <div :class="formWarperClassRef">
      <div v-if="stepRef === 2" class="flex-1">
        <NForm ref="formRef" :model="formValue" :rules="rulesRef">
          <NFormItem :label="i18nRef.creatorContentUploadFormTitle" path="title">
            <NInput
              v-model:value="formValue.title"
              :placeholder="i18nRef.creatorContentUploadFormTitlePlaceholder"
              show-count
              clearable
              maxlength="30"
            />
          </NFormItem>
          <NFormItem :label="i18nRef.creatorContentUploadFormSummary" path="summary">
            <NInput
              v-model:value="formValue.summary"
              type="textarea"
              maxlength="1000"
              show-count
              clearable
              :placeholder="i18nRef.creatorContentUploadFormSummaryPlaceholder"
              :autosize="{
                minRows: 3,
                maxRows: 10,
              }"
            />
          </NFormItem>

          <NFormItem :label="i18nRef.creatorContentUploadFormCoverUrl" path="coverUrl">
            <AvatarCropperFileUpload
              v-model:value="formValue.coverUrl"
              class="h-[12.5rem] w-[9.375rem] rounded"
              :cropper-size="'h-[22.315rem] w-[16.625rem]'"
              :cropper-options="{ aspectRatio: 266 / 357 }"
            />
          </NFormItem>

          <NFormItem :label="i18nRef.creatorContentUploadFormVideoTypeId" path="videoTypeId">
            <NCascader
              v-model:value="formValue.videoTypeId"
              :placeholder="i18nRef.creatorContentUploadFormVideoTypeIdPlaceholder"
              :options="videoTypeCascaderOptionsRef"
              :loading="videoTypeCascaderOptionsLoadingRef"
              check-strategy="child"
              separator=" | "
              show-path
              filterable
            />
          </NFormItem>

          <NFormItem :label="i18nRef.creatorContentUploadFormVideoTags" path="videoTags">
            <NSelect
              v-model:value="formValue.videoTags"
              multiple
              filterable
              tag
              :placeholder="i18nRef.creatorContentUploadFormVideoTagsPlaceholder"
              :options="videoTagsOptionsRef"
              :loading="videoTagsOptionsLoadingRef"
              clearable
              remote
              :clear-filter-after-select="true"
              @search="handleSearchVideoTags"
            />
          </NFormItem>

          <NFormItem :label="i18nRef.creatorContentUploadFormVideoSetId" path="videoSetId">
            <NSelect
              v-model:value="formValue.videoSetId"
              :placeholder="i18nRef.creatorContentUploadFormVideoSetIdPlaceholder"
              :options="videoSetsOptionsRef"
              :loading="videoSetsOptionsLoadingRef"
              clearable
            />
          </NFormItem>

          <NButton :loading="loadingRef" @click="handleSaveButtonClick">{{
            i18nRef.creatorContentUploadFormPublishBtn
          }}</NButton>
        </NForm>
      </div>
      <div>
        <div v-if="formValue.url">
          <div class="flex h-[23.1875rem] w-[15.1875rem] flex-col justify-end rounded bg-black">
            <video width="243" height="371" muted autoplay>
              <source :src="formValue.url" :type="videoTypeRef" />
            </video>
          </div>
          <NUpload
            key="resetUploadBtn"
            class="mt-4 flex justify-center"
            :custom-request="customRequest"
            :show-file-list="false"
          >
            <NButton quaternary size="small">{{ i18nRef.creatorContentUploadFormResetUploadBtn }}</NButton>
          </NUpload>
        </div>
        <NUpload v-else key="uploadBtn" :custom-request="customRequest" directory-dnd :show-file-list="false">
          <NUploadDragger :class="uploadDraggerClassRef">
            <template v-if="noFileRef">
              <div v-if="stepRef === 1">
                <div>
                  <Icon name="ic:baseline-cloud-upload" size="32" />
                </div>
                <div class="pb-2 pt-4 font-semibold">
                  {{ i18nRef.creatorContentUploadDraggerTipsTitle }}
                </div>
                <div class="text-xs">
                  {{ i18nRef.creatorContentUploadDraggerTipsContent }}
                </div>
              </div>
              <template v-else>
                <div>
                  <Icon name="ic:baseline-cloud-upload" size="32" />
                </div>
                <div class="pt-4 font-semibold">
                  {{ i18nRef.creatorContentUploadDraggerStep2TipsTitle1 }}
                </div>
                <div class="pb-4 pt-1 font-semibold">
                  {{ i18nRef.creatorContentUploadDraggerStep2TipsTitle2 }}
                </div>
                <div class="text-xs">
                  {{ i18nRef.creatorContentUploadDraggerStep2TipsContent }}
                </div>
              </template>
            </template>
            <template v-else>
              <div
                class="absolute inset-0 z-[1] flex cursor-default flex-col items-center justify-center gap-2 px-4"
                @click.stop="() => ({})"
              >
                <div v-if="fileRef" class="max-w-full truncate">{{ fileRef.name || '' }}</div>
                <NProgress type="line" :percentage="percentageRef" />
                <NButton quaternary size="tiny" @click="cancelUploadTask">{{
                  i18nRef.creatorContentUploadFormCancelUploadBtn
                }}</NButton>
              </div>
            </template>
          </NUploadDragger>
        </NUpload>

        {{ taskIdRef }}
      </div>
    </div>

    <div v-if="stepRef === 1" class="flex gap-4">
      <div class="rounded p-4" :style="bgRef">
        <div>{{ i18nRef.creatorContentUploadDraggerVideoTypeTipsTitle }}</div>
        <div class="pt-2 text-xs">{{ i18nRef.creatorContentUploadDraggerVideoTypeTipsContent }}</div>
      </div>
      <div class="rounded p-4" :style="bgRef">
        <div>{{ i18nRef.creatorContentUploadDraggerVideoSizeTipsTitle }}</div>
        <div class="pt-2 text-xs">{{ i18nRef.creatorContentUploadDraggerVideoSizeTipsContent }}</div>
      </div>
      <div class="rounded p-4" :style="bgRef">
        <div>{{ i18nRef.creatorContentUploadDraggerVideoResolutionTipsTitle }}</div>
        <div class="pt-2 text-xs">{{ i18nRef.creatorContentUploadDraggerVideoResolutionTipsContent }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NUpload, NButton, NCascader, NForm, NFormItem, NInput, NUploadDragger, NSelect, NProgress } from 'naive-ui'

const {
  formValue,
  formRef,
  rulesRef,
  stepRef,
  percentageRef,
  uploadDraggerClassRef,
  customRequest,
  handleSaveButtonClick,
  cancelUploadTask,
  noFileRef,
  videoTypeRef,
  formWarperClassRef,
  bgRef,
  handleSearchVideoTags,
  videoSetsOptionsRef,
  videoTypeCascaderOptionsRef,
  videoTypeCascaderOptionsLoadingRef,
  i18nRef,
  fileRef,
  videoTagsOptionsRef,
  videoTagsOptionsLoadingRef,
  videoSetsOptionsLoadingRef,
  loadingRef,
  taskIdRef,
} = useVideoUploadForm()
</script>

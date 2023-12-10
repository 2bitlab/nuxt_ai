<template>
  <div class="container mx-auto p-4">
    <NSpin :show="videoPendingRef">
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

        <div class="flex justify-between gap-4">
          <NButton @click="back">{{ i18nRef.creatorContentUploadFormBack }}</NButton>
          <NButton :loading="loadingRef" @click="handleSaveButtonClick">{{
            i18nRef.creatorContentUploadFormPublishBtn
          }}</NButton>
        </div>
      </NForm>
    </NSpin>
  </div>
</template>

<script setup lang="ts">
import { NSpin, NButton, NCascader, NForm, NFormItem, NInput, NSelect } from 'naive-ui'

const {
  formValue,
  formRef,
  rulesRef,

  handleSearchVideoTags,
  videoSetsOptionsRef,
  videoTypeCascaderOptionsRef,
  videoTypeCascaderOptionsLoadingRef,
  i18nRef,
  videoTagsOptionsRef,
  videoTagsOptionsLoadingRef,
  videoSetsOptionsLoadingRef,
  loadingRef,
  videoPendingRef,

  handleSaveButtonClick,
  back,
} = useVideoEditForm()
</script>

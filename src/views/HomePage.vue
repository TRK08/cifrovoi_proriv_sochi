<template>
  <div class="home-page">
    <n-card style="margin-bottom: 4rem;">
      <h3 style="margin-bottom: 2rem;">Загрузите изображение вагона:</h3>
      <n-upload
          directory-dnd
          :on-change="downloadFile"
          :show-file-list="false"
          :disabled="fetchStatus === 'loading'"
      >
        <n-upload-dragger>
          <div style="margin-bottom: 12px">
            <n-icon size="48" :depth="3" :component="ArchiveOutline" />
          </div>
          <n-text style="font-size: 16px">
            Кликните или перетащите файл
          </n-text>
          <n-p depth="3" style="margin: 8px 0 0 0">
            Доступный формат файла: .png, .jpg, .jpeg
          </n-p>
        </n-upload-dragger>
      </n-upload>
    </n-card>

    <n-grid :cols="3" x-gap="16" y-gap="16">
      <n-gi>
        <ResultCard />
      </n-gi>
      <n-gi>
        <n-card>2</n-card>
      </n-gi>
      <n-gi>
        <n-card>2</n-card>
      </n-gi>
    </n-grid>

  </div>
</template>

<script setup lang="ts">
import type {InputProps} from "naive-ui";
import {storeToRefs} from "pinia";
import {useGlobalStore} from "@/stores";
import {useNotification} from "naive-ui";
import { ArchiveOutline } from '@vicons/ionicons5'
import ResultCard from "@/components/ResultCard.vue";
import {useResultsStore} from "@/stores/results";
type InputThemeOverrides = NonNullable<InputProps['themeOverrides']>

const notification = useNotification()

const {fetchStatus} = storeToRefs(useResultsStore())

const inputThemeOverridesLight: InputThemeOverrides = {
  color: '#FFFFFF'
}
const inputThemeOverridesDark: InputThemeOverrides = {
  color: '#333333'
}

const downloadFile = (file: File) => {
  console.log(file)
}


</script>

<style lang="scss">
.home-page {
  .n-card {
    border-radius: 1rem;
  }
}
</style>

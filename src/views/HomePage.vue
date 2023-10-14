<template>
  <div class="home-page">
    <n-card style="margin-bottom: 3rem;">
      <h3 style="margin-bottom: 2rem;">Загрузите изображение вагона:</h3>
      <div class="home-page__upload">
        <n-spin v-if="fetchStatus === 'loading'" size="large" style="width: 100%;" />
        <n-upload
            v-else
            directory-dnd
            :on-change="sendImage"
            :show-file-list="false"
            accept="image/*"
        >
          <n-upload-dragger>
            <div style="margin-bottom: 12px">
              <n-icon size="48" :depth="3" :component="ArchiveOutline" />
            </div>
            <n-text style="font-size: 16px">
              Кликните или перетащите файл
            </n-text>
            <n-p depth="3" style="margin: 8px 0 0 0">
              Доступный формат файла: .png, .jpg, .jpeg, .svg
            </n-p>
          </n-upload-dragger>
        </n-upload>

      </div>
    </n-card>

    <template v-if="results?.length">
      <n-scrollbar style="max-height: calc(100vh - 550px)">
        <n-grid :cols="5" x-gap="16" y-gap="16">
          <n-gi v-for="res in results" :key="res.number">
            <ResultCard :data="res" />
          </n-gi>
        </n-grid>
      </n-scrollbar>

    </template>

  </div>
</template>

<script setup lang="ts">
import {storeToRefs} from "pinia";
import { ArchiveOutline } from '@vicons/ionicons5'
import ResultCard from "@/components/ResultCard.vue";
import {useResultsStore} from "@/stores/results";
import type {UploadFileInfo} from "naive-ui";
import {useNotification} from "naive-ui";

const {fetchStatus, results} = storeToRefs(useResultsStore())
const { loadInfo } = useResultsStore()
const notification = useNotification()


const sendImage = async (file: UploadFileInfo) => {
  const res = await loadInfo(file)
  if (res?.status === 'error') {
    notification.error({
      content: 'Что-то пошло не так',
      duration: 3000
    })
  }
}

const setDefaultResults = () => {
  results.value = JSON.parse(localStorage.getItem('results' ) || '[]')
}

setDefaultResults()


</script>

<style lang="scss">
.home-page {
  &__upload {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
  }
  .n-card {
    border-radius: 1rem;
  }
}
</style>

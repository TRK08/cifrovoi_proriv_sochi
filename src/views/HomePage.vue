<template>
  <div class="home-page">
    <n-card style="margin-bottom: 4rem;">
      <h3 style="margin-bottom: 2rem;">Загрузите изображение вагона:</h3>
      <n-upload
          directory-dnd
          :on-change="loadInfo"
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

    <template v-if="results">
      <h3 style="margin-bottom: 1rem">Результаты</h3>
      <n-grid :cols="3" x-gap="16" y-gap="16">
        <n-gi v-for="res in results" :key="res.number">
          <ResultCard :data="res" />
        </n-gi>
      </n-grid>
    </template>

  </div>
</template>

<script setup lang="ts">
import {storeToRefs} from "pinia";
import { ArchiveOutline } from '@vicons/ionicons5'
import ResultCard from "@/components/ResultCard.vue";
import {useResultsStore} from "@/stores/results";

const {fetchStatus, results} = storeToRefs(useResultsStore())
const { loadInfo } = useResultsStore()


const setDefaultResults = () => {
  results.value = JSON.parse(localStorage.getItem('results' ) || '[]')
}

setDefaultResults()


</script>

<style lang="scss">
.home-page {
  .n-card {
    border-radius: 1rem;
  }
}
</style>

<template>
  <n-card
    class="result-card"
    :content-style="{
      padding: 0,
      'min-height': '250px',
      height: '250px',
      position: 'relative',
    }"
    :footer-style="{
      'padding-top': '1rem',
      position: 'relative'
    }"
  >
    <template #default>
      <img class="result-card__img" :src="data.img" alt="">
      <div class="result-card__number">{{data.number}}</div>
    </template>
    <template #footer>
      <n-space style="max-width: 80%;" vertical>
        <span>Тип вагона: {{data.wagon_type}}</span>
        <span>Дата: {{data.datetime}}</span>
        <span style="display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
          Имя файла: {{data.filename}}
        </span>
      </n-space>
      <span class="result-card__remove" @click="removeItem(data.id)">
        <n-icon size="20" :depth="3" color="#FFF" :component="TrashOutline" />
      </span>
    </template>
  </n-card>
</template>

<script setup lang="ts">
import { TrashOutline} from '@vicons/ionicons5'
import type {IResult} from "@/shims-vue";
import {useResultsStore} from "@/stores/results";

interface IProps {
  data: IResult
}
defineProps<IProps>()

const {removeItem} = useResultsStore()
</script>

<style lang="scss">
.result-card {
  overflow: hidden;
  &__img {
    width: 100%;
    height: inherit;
    object-fit: contain;
  }
  &__number {
    position: absolute;
    bottom: 15px;
    right: 10px;
    width: fit-content;
    background-color: #D97E2A;
    border-radius: .5rem;
    padding: .5rem 1rem;
    font-size: 1.15rem;
    letter-spacing: .1rem;
  }
  &__remove {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    padding: 5px;
    background-color: gray;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

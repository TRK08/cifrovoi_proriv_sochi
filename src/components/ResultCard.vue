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
      'padding-top': '1rem'
    }"
  >
    <template #default>
      <img class="result-card__img" :src="data.img" alt="">
      <div class="result-card__number">{{data.number}}</div>
    </template>
    <template #footer>
      <n-space vertical>
        <span>Тип вагона: {{data.wagon_type}}</span>
        <span>Дата: {{data.datetime}}</span>
        <span>Имя файла: {{data.filename}}</span>
      </n-space>
    </template>
  </n-card>
</template>

<script setup lang="ts">

import type {IResult} from "@/shims-vue";

interface IProps {
  data: IResult
}

defineProps<IProps>()
</script>

<style lang="scss">
.result-card {
  overflow: hidden;
  &__img {
    width: 100%;
    height: inherit;
    object-fit: cover;
  }
  &__number {
    position: absolute;
    bottom: 15px;
    right: 10px;
    width: fit-content;
    background-color: var(--n-color);
    border-radius: .5rem;
    padding: .5rem 1rem;
    font-size: 1.15rem;
    letter-spacing: .1rem;
  }
}
</style>

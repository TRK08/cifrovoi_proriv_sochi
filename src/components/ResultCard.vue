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
      <img class="result-card__img" src="src/assets/img/train.jpg" alt="">
      <div class="result-card__number">12345678</div>
    </template>
    <template #footer>
      <n-space vertical>
        <span>Дата: {{date}}</span>
        <span>Имя файла: train.jpg</span></n-space>
    </template>
  </n-card>
</template>

<script setup lang="ts">


const date = new Date().toLocaleString()
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

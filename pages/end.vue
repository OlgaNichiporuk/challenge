<script setup lang="ts">
import { useCounterStore } from '@/store/counter'
const counter = useCounterStore()

</script>
<template>
     <div>правельных ответов: {{ counter.win }}</div>
    <div>неправельных ответов: {{ counter.lose }}</div>
    <h1>GAME OVER</h1>
    <NuxtLink to="/">
        На главную
    </NuxtLink>
</template>
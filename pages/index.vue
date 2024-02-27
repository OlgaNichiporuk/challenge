<template>
     <NuxtLink to="/game" class="mt-4 text-blue-500">
        <button class="hello" id="button" @click="test">Старт</button>
    </NuxtLink>
    <NuxtLink to="/admin" class="mt-4 text-blue-500">
        создать вопросы
    </NuxtLink>
</template>
  

<style lang="css">



#button {
    margin-top: 50px;
    width: 400px;
    font-size: 45px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    background-color: blueviolet;
    border-radius: 20px;
    align-items: center;
    color: white;
    cursor: pointer;
    letter-spacing: 0.4mm;
}
</style>


<template>
    <div class="container">
     <NuxtLink to="/game" class="mt-4 text-blue-500">
        <button class="hello" id="button" @click="test">Старт</button>
    </NuxtLink>
    <NuxtLink to="/admin" class="mt-4 text-blue-500">
        создать свои вопросы
    </NuxtLink>
</div>
</template>
  

<style lang="css">

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1280px;
    height: 800px;
    background-image: url(../images/backg.jpg);
    background-repeat: no-repeat;

}

#button {
    margin-top: 400px;
    width: 200px;
    font-size: 45px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    background-color: red;
    border-radius: 20px;
    align-items: center;
    color: white;
    cursor: pointer;
    letter-spacing: 0.4mm;
}
</style>


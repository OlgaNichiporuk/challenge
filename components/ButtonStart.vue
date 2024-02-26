<script setup>
function test() {
    document.querySelectorAll('.hello').forEach(element => {
        element.style.display = 'none';
    });
    document.querySelector('.container').style.display = 'flex';
    
}

</script>
<template>
        <button class="hello" id="button" @click="test">Старт</button>
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


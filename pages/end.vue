<script setup lang="ts">
import { useCounterStore } from '@/store/counter'
const counter = useCounterStore()

</script>
<template>
    <div class="back">
        <div class="modal">
            <div class="text">Поздравляем!</div>
            <div class="end">
                <div class="img"><img src="../images/kubok.png"></div>
                    <font color="green"> правильных ответов: {{ counter.win }}</font>
                    <font color="red"> неправильных ответов: {{ counter.lose }}</font>             
</div>
    <div class="text">Спасибо за игру!</div>
    <NuxtLink to="/">
        <font color="blue" size="4px">На главную</font>
    </NuxtLink>
    </div>
</div>
</template>

<style lang="css">
.text {
    margin-top: 10px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 40px;
}
.back {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1280px;
    height: 800px;
    background-image: url(../images/hollywood.jpg);
    background-repeat: no-repeat;

}

.modal {
    background-color: white;
    width: 400px;
    height: 520px;
    border-radius: 20px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    padding-bottom: 20px;
    gap: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 45px;
    align-items: center;
}
.img {
    width: 130px;
    height: 130px;
    margin-bottom: 30px;
    
}

.end{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 20px;
    gap: 20px;

}
</style>
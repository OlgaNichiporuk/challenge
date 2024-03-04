<script setup lang="ts">

async function sendData() {
    const question = document.getElementById('question')?.value;
    const trueAnswer = document.getElementById('select')?.value;

    const answers = [
        {
            answer: document.getElementById('answer_1')?.value,
            correct: false,
        },
        {
            answer: document.getElementById('answer_2')?.value,
            correct: false,
        },
        {
            answer: document.getElementById('answer_3')?.value,
            correct: false,
        },
        {
            answer: document.getElementById('answer_4')?.value,
            correct: false,
        }
    ];

    answers[trueAnswer].correct = true;

    await $fetch('http://localhost:8000/question', {
        method: 'POST',
        body: {
            question,
            answers
        }
    });

}



</script>

<template>
    <div class="backg">
    <form id="form">

    <div class="text">Заполни все поля:</div>
        <label for="question">Вопрос:</label>
        <input type="text" id="question" />
        <label for="answer_1">Ответ_1:</label>
        <input type="text" id="answer_1" />
        <label for="answer_2">Ответ_2:</label>
        <input type="text" id="answer_2" />
        <label for="answer_3">Ответ_3:</label>
        <input type="text" id="answer_3" />
        <label for="answer_4">Ответ_4:</label>
        <input type="text" id="answer_4" />
       <span> <font color="green">Выбери правильный ответ:</font></span> <select id="select">
            <option value="0">1</option>
            <option value="1">2</option>
            <option value="2">3</option>
            <option value="3">4</option>
        </select>
        <button type="button" @click="sendData">Отправить</button>
    
    <NuxtLink to="/">
        На главную
    </NuxtLink>
</form>
</div>
</template>

<style>

#form {
    background-color: white;
    width: 400px;
    height: 680px;
    border-radius: 20px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    padding-bottom: 20px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    align-items: center;
}

.backg {
    display: flex;
    align-items: center;
    width: 1280px;
    height: 800px;
    background-image: url(../images/hollywood.jpg);
    background-repeat: no-repeat;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    padding-bottom: 20px;
    gap: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
}

button {
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

input {
    margin-left: 20px;
    text-align: center;
    width: 300px;
    height: 40px;
    border-radius: 10px;
    border: 1.5px solid #535051;
    cursor: pointer;
    letter-spacing: 0.2mm;
}
</style>
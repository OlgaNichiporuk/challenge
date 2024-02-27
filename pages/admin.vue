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
    <form id="form">
        <label for="question">question</label>
        <input type="text" id="question" />
        <label for="answer_1">answer_1</label>
        <input type="text" id="answer_1" />
        <label for="answer_2">answer_2</label>
        <input type="text" id="answer_2" />
        <label for="answer_3">answer_3</label>
        <input type="text" id="answer_3" />
        <label for="answer_4">answer_4</label>
        <input type="text" id="answer_4" />
        <select id="select">
            <option value="0">1</option>
            <option value="1">2</option>
            <option value="2">3</option>
            <option value="3">4</option>
        </select>
        <button type="button" @click="sendData">Send</button>
    </form>
    <NuxtLink to="/">
        На главную
    </NuxtLink>
</template>

<style>
button {
    color: red;
}
</style>
<script setup lang="ts">
import { useCounterStore } from '@/store/counter'
import { useDataStore } from '@/store/data'
const counter = useCounterStore()
const Items = useDataStore()


async function getIds() {
    const question: any = await $fetch('http://localhost:8000/question');
    return question['data'];
}
let index = 0;
const data = await getIds()
const countQuestions = data.length - 1;

await Items.fetch(data[index])

async function sendAsnwer(e) {
    const answerId = e.target.getAttribute('id');

    const result = Items.get().answers.find(i => i._id === answerId);

    result.correct ? counter.incrementWin() : counter.incrementLose();

    if (index < countQuestions) {
        index += 1;
        await Items.fetch(data[index])
    } else {
        Items.clear();
        await navigateTo('/end')
    }
}

</script>

<template>
    <div class="container">
        <div class="background">
            <div class="count">
                <div>
                    <font color="green"> правильных ответов: {{ counter.win }}</font>
                </div>
                <div>
                    <font color="red"> неправильных ответов: {{ counter.lose }}</font>
                </div>
            </div>
            <div class="question">{{ Items.get().question }}</div>
            <div class="answer" :id="Items.get().answers[0]._id" @click="sendAsnwer">{{ Items.get().answers[0].answer }}
            </div>
            <div class="answer" :id="Items.get().answers[1]._id" @click="sendAsnwer">{{ Items.get().answers[1].answer }}
            </div>
            <div class="answer" :id="Items.get().answers[2]._id" @click="sendAsnwer">{{ Items.get().answers[2].answer }}
            </div>
            <div class="answer" :id="Items.get().answers[3]._id" @click="sendAsnwer">{{ Items.get().answers[3].answer }}
            </div>
        </div>
    </div>
</template>


<style lang="css">
.background {
    background-color: white;
    width: 800px;
    height: 475px;
    border-radius: 20px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    padding-bottom: 20px;
    gap: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
}

.count {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 20px;
    display: inline-flex;
    gap: 52px;
    margin-top: 30px;
}

.number {
    font-size: 35px;
    text-align: center;
    letter-spacing: 0.2mm;
}

.question {
    font-size: 35px;
    text-align: center;
    letter-spacing: 0.2mm;
}

.answer {
    padding-top: 5px;
    font-size: 20px;
    text-align: center;
    width: 400px;
    height: 50px;
    border-radius: 10px;
    border: 1.5px solid #535051;
    cursor: pointer;
    letter-spacing: 0.2mm;

}

.button {
    width: 100px;
    font-size: 25px;
    background-color: blueviolet;
    border-radius: 10px;
    text-align: center;
    color: white;
    cursor: pointer;
    letter-spacing: 0.4mm;

}</style>
<script lang="ts">
import TheGame from './components/TheGame.vue';


const data = {
  question:'В скольких номинациях получил «Оскара» фильм «Титаник»?',
  answer_1: '11',
  answer_2: '10',
  answer_3: '12',
  answer_4: '7',
}
export default {
  components: {
    TheGame
  },
  data: () => (data)
}
</script>

<template>
    <div class="container1">
      <HelloQuiz />
      <ButtonStart />
      <TheGame 
      :question="question"
      :answer_1="answer_1" 
      :answer_2="answer_2" 
      :answer_3="answer_3" 
      :answer_4="answer_4"/>
  </div>
</template>


<style lang="css">
#main {
  background-image: url('..\image\wallpaper.jpg');
  background-repeat: no-repeat;
  width: 1280px;
  height: 900px;
  padding: 270px;
  padding-top: 10px;
  align-items: center;

}
.container1 {
  background-image: url('../image/movie.png');
  background-repeat: no-repeat;
  padding: 150px 150px;
  width: 1280px;
  height: 2900px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
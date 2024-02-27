import { IAnswer, Question } from "~~/core"

export const useDataStore = defineStore('dataStore', {
    state: () => ({
      question: '',
      answers: []
    }),
    actions: {
      async fetch(_id: string) {
        const infos = await $fetch(`http://localhost:8000/question/${_id}`)
        
        this.question = infos.data.question
        this.answers = infos.data.answers
      },
      get() {
        return {
            question: this.question,
            answers: this.answers
        }
      },
      clear() {
        return {
           question: '',
           answers: []
        }
      }
    },
  })
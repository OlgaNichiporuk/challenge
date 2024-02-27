import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { win: 0, lose: 0 }
  },
  actions: {
    incrementWin() {
      this.win++
    },
    incrementLose() {
      this.lose++
    },
  },
})

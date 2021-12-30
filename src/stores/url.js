import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'url',
  state: () => ({
    url: []
  })
})

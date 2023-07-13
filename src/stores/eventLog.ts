import { defineStore } from 'pinia'


export const useEventStore = defineStore('eventLog', () => {
    const events: object[] = []

    return { events }
})

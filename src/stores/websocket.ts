import { defineStore } from 'pinia'

import ReconnectingWebSocket from 'reconnecting-websocket'

import { useEventStore } from './eventLog'

export const useWsStore = defineStore('ws', () => {

    const eventStore = useEventStore()

    const socket = new ReconnectingWebSocket('ws://bureau-local-server.localdomain:7007')

    socket.onopen = () => {
        socket.send('{"subscribe":"robots"}')
        console.log('Connected to WS!')
    }

    socket.onmessage = (msg) => {
        console.log(JSON.parse(msg.data))

        if (Array.isArray(eventStore.events)) {
            (eventStore.events as any[]).push(msg.data)
        }
    }

    return { socket }
})

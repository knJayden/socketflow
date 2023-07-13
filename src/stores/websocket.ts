import { defineStore } from 'pinia'

import ReconnectingWebSocket from 'reconnecting-websocket'

export const useWsStore = defineStore('ws', () => {
    const socket = new ReconnectingWebSocket('ws://bureau-local-server.localdomain:7007')

    socket.onopen = () => {
        socket.send('{"subscribe":"robots"}')
        console.log('Connected to WS!')
    }

    socket.onmessage = (msg) => {
        console.log(JSON.parse(msg.data))
    }

    return { socket }
})

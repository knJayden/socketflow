<script lang="ts">

import WebSocketConsole from '../components/WebSocketConsole.vue';

import { useWsStore } from '../stores/websocket'

export default {
    setup() {
        const wsStore = useWsStore()

        return { wsStore }
    },
    name: 'ProfileView',
    components: {
        WebSocketConsole
    }
}

</script>

<template>
    
    <main>
        <h1>Profile</h1>
        <WebSocketConsole />
    </main>

</template>

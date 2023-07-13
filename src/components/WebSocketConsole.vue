<script lang="ts">

import { useEventStore } from '../stores/eventLog'

export default {
    setup() {
        const eventStore = useEventStore()

        return { eventStore }
    },
    name: 'WebSocketConsole'
}

</script>

<template>

    Websocks
    {{ eventStore.events }}

</template>
<script lang="ts">

import WebSocketConsole from '../components/WebSocketConsole.vue';

export default {
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
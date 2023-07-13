<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheNavBar from './components/TheNavBar.vue'

export default {
  name: 'App',
  components: {
    RouterLink,
    RouterView,
    TheNavBar
  }
}
</script>

<template>

  <TheNavBar />

  <RouterView />

</template>
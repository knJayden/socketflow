<script lang="ts">

import { RouterLink } from 'vue-router'

export default {
  name: 'TheNavBar',
  components: {
    RouterLink
  }
}

</script>

<template>

    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/profile">Profile</router-link>
    </nav>

</template>
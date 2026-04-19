<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <nav style="padding: 20px;">
      <RouterLink to="/">Home</RouterLink>
      |
      <RouterLink to="/new">Add Contact</RouterLink>
    </nav>

    <main style="padding: 20px;">
      <RouterView />
    </main>
  </div>
</template>
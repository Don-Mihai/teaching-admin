<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/teacher">Teacher</RouterLink>
      <RouterLink to="/students">Students</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>

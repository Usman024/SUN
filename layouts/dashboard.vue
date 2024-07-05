<script setup lang="ts">
const selectedItem = ref("dashboard");
</script>

<template>
  <v-card>
    <v-layout>
      <DashboardNavigationDrawer />

      <v-main style="height: 400px">
        <slot></slot>
      </v-main>
    </v-layout>
  </v-card>
</template>

<style scoped>
.hover-list-item {
  transition: background-color 0.3s;
}

.hover-list-item:hover {
  background-color: var(--color-light-primary);
}

.selected-list-item {
  background-color: #f5edf5;
  color: var(--color-light-primary);
}

.selected-icon {
  color: var(--color-light-primary);
}
</style>

<script setup lang="ts">
</script>

<template>
  <v-card>
    <v-layout>
      <DashboardNavigationDrawer />
      <v-main>
        <slot></slot>
      </v-main>
    </v-layout>
  </v-card>
</template>

<style scoped></style>

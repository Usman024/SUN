<script setup lang="ts">

const route = useRoute();

const showProfileSideBar = computed(() => {
  const path = route.path;
  return path === '/dashboard/users' || path === '/dashboard/reviews';
});
</script>

<template>
  <v-card>
    <v-layout>
      <DashboardNavigationDrawer />
      <v-main>
        <slot></slot>
      </v-main>
      <DashboardProfileSideBar v-if="showProfileSideBar" />
    </v-layout>
  </v-card>
</template>

<style scoped></style>

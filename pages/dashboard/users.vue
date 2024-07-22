<script setup lang="ts">
import Colors from "~/constants/Colors";
import { HEADER, USERS_DATA } from "~/constants/data";

definePageMeta({
  layout: "dashboard",
});
</script>

<template>
  <section class="w-100 h-100 pt-7 px-10 bg-light-3">
    <DashboardHeader :title="'Users'" :isSearchBar="true" />

    <div>
      <DashboardUsersListCard :users="USERS_DATA" />
    </div>
  </section>
</template>

<style scoped>
.table-row {
  border-bottom: 16px solid transparent; 
}

.table-cell {
  padding: 16px 0; 
  background-color: var(--v-amber-darken-1); 
}

.table-row:last-child {
  border-bottom: none;
}
</style>

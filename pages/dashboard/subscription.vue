<template>
  <section class="w-100 h-100 pt-7 px-10 bg-light-3">
    <DashboardHeader :title="'Subscription'" />
    <div class="w-100 mt-13">
      <v-row>
        <v-col cols="12" md="8">
         
          <div class="bg-white">
            <DashboardSubscriptionStats class="w-100"  :title="'All Subscriptions'" />
          </div>
        </v-col>
        <v-col cols="12" md="4">
          
          <div class="bg-white ">
            <DashboardAnalyticsStats class="w-100 ml-md-3 ml-0" />
          </div>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});
</script>

<style scoped></style>

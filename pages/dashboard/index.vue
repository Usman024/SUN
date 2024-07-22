<script setup lang="ts">
import SvgsIconsUserIcon from "@/components/svgs/dashboard/UserIcon.vue";
import SvgsIconsReviewIcon from "@/components/svgs/dashboard/ReviewIcon.vue";
definePageMeta({
  layout: "dashboard",
});

const cardData = [
  {
    title: "New Users",
    statsNumber: 245,
    icon: SvgsIconsUserIcon,
  },
  {
    title: "Active Users",
    statsNumber: 123,
    icon: SvgsIconsReviewIcon,
  },
  {
    title: "Total Users",
    statsNumber: 56,
    icon: SvgsIconsUserIcon,
  },
  {
    title: "Inactive Users",
    statsNumber: 500,
    icon: SvgsIconsUserIcon,
  },
];
</script>

<template>
  <section class="w-100 h-100 pt-7 px-10 bg-light-3">
    <DashboardHeader :title="'Dashboard'" />

    <div class="d-flex justify-space-between mt-16 items-center ga-10">
      <DashboardStatsCard
        v-for="(card, index) in cardData"
        :key="index"
        :statsTitle="card.title"
        :statsNumber="card.statsNumber"
        :icon="card.icon"
      />
    </div>

    <v-row class="mt-10">
      <v-col cols="12" md="8">
        <DashboardReportStats class="w-100" />
      </v-col>
      <v-col cols="12" md="4">
        <DashboardAnalyticsStats class="w-100 ml-md-3 ml-0" />
      </v-col>
    </v-row>



    <v-row class="mt-10 mb-16">
      <v-col cols="12" md="8">
        <DashboardSubscriptionStats class="w-100" />
      </v-col>
      <v-col cols="12" md="4">
        <DashboardTutorsStats class="w-100 ml-md-3 ml-0" />
      </v-col>
    </v-row>
  </section>
</template>

<style scoped></style>

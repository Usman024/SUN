<script setup lang="ts">
import { REVIEWS_DATA } from "~/constants/data";


definePageMeta({
  layout: "dashboard",
});
</script>

<template>
  <section class="w-100 h-100 pt-7 px-10 bg-light-3">
    <DashboardHeader :title="'Reviews'" />

    <DashboardReviewsCard  :reviews="REVIEWS_DATA" />
  </section>
</template>

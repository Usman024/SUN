<script lang="ts" setup>
import Colors from "~/constants/Colors";
import {TUTORS_STATS_DATA} from "~/constants/data"

</script>

<template>
  <div class="container bg-white rounded-lg pa-10">
    <v-row class="justify-lg-space-between align-center">
      <p class="txt-light-100 txt-subTitle">Top AI Tutors</p>

      <v-btn
        class="text-none"
        :color="Colors.light.blueDark"
        rounded="xs"
        variant="text"
      >
        View All
      </v-btn>
    </v-row>

    <div v-for="(item, index) in TUTORS_STATS_DATA" :key="index">
      <DashboardListItem :item="item" />
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 410px;
}

</style>

<script lang="ts" setup>
import Colors from "~/constants/Colors";
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
  </div>
</template>

<style scoped>
.container {
  height: 410px;
}


</style>

<script lang="ts" setup>
import { defineProps } from "vue";
import Colors from "~/constants/Colors";

const props = defineProps({
  icon: Object,
  statsNumber: String,
  statsTitle: String,
});
</script>

<template>
  <div class="pa-5 w-100 pa-md-10 bg-white rounded-lg">
    <v-row align="center" no-gutters>
      <v-icon
        class="d-flex justify-center align-center rounded-circle icon-container"
      >
        <component :is="icon" :fillColor="Colors.light.primary" />
      </v-icon>

      <v-col class="ml-4 ml-md-5">
        <p class="text-h6 text-md-h5 font-weight-bold stats-text txt-light-10">
          {{ statsNumber }}
        </p>
        <p class="text-body-2 text-md-subtitle-2 txt-light-50">
          {{ statsTitle }}
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.icon-container {
  width: 40px;
  height: 40px;
  background-color: var(--color-light-pink);
}
.stats-text {
  font-family: "Nunito", sans-serif;
}
@media (min-width: 600px) {
  .icon-container {
    width: 60px;
    height: 60px;
  }
}
</style>

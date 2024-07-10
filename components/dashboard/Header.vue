<script setup lang="ts">
import Colors from "~/constants/Colors";

const props = defineProps({
  title: String,
});
</script>

<template>
  <v-row class="justify-space-between mt-5 align-center pl-2">
    <p class="txt-title txt-light-100">{{ title }}</p>
    <v-btn
      class="text-none"
      :color="Colors.white"
      size="large"
      rounded="xs"
      variant="flat"
    >
      My Account

      <template v-slot:append>
        <v-icon>
          <SvgsDashboardBtnUserIcon />
        </v-icon>
      </template>
    </v-btn>
  </v-row>
</template>

<style scoped>

</style>

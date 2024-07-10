<script lang="ts" setup>
import Colors from "~/constants/Colors";
</script>

<template>
  <div class="container bg-white rounded-lg pa-10">
    <v-row class="justify-lg-space-between align-center">
      <v-row class="items-center ga-2">
        <p class="txt-light-100 txt-subTitle">Analytics</p>

        <v-btn
          class="text-none mt-1"
          :color="Colors.light.background4"
          rounded="xs"
          size="small"
          variant="flat"
        >
          Start Date

          <template v-slot:append>
            <v-icon>
              <SvgsDashboardChevronDownIcon />
            </v-icon>
          </template>
        </v-btn>

        <v-btn
          class="text-none mt-1"
          :color="Colors.light.background4"
          rounded="xs"
          size="small"
          variant="flat"
        >
          End Date

          <template v-slot:append>
            <v-icon>
              <SvgsDashboardChevronDownIcon />
            </v-icon>
          </template>
        </v-btn>
      </v-row>

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

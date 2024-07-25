<script lang="ts" setup>
import Colors from "~/constants/Colors";
import { ref, onMounted } from 'vue';
import Chart from 'chart.js/auto';
import type { ChartConfiguration } from 'chart.js';

const chartCanvas = ref<HTMLCanvasElement | null>(null);

const data = {
  labels: ["New Subscribers" , "New Users" , "Total Users"],
  datasets: [
    {
      label: 'Sales',
      data: [40, 20, 10],
      backgroundColor: [
        Colors.light.blue,
        '#f6ba17',
        '#9c4e9d',
      ],
    },
  ],
};

const config: ChartConfiguration<'doughnut', number[], string> = {
  type: 'doughnut',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    
    },
  },
};

onMounted(() => {
  if (chartCanvas.value) {
    const ctx = chartCanvas.value.getContext('2d');
    if (ctx) {
      new Chart(ctx, config);
    }
  }
});
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

    <div class="d-flex justify-center align-center h-100 mt-6 px-16 ">

      <canvas ref="chartCanvas"></canvas>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 410px
}
</style>

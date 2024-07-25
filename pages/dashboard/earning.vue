<script setup lang="ts">
import { ref, onMounted } from "vue";
import Chart from "chart.js/auto";
import DollarIcon from "@/components/svgs/icons/DollarIcon.vue";
import Colors from "~/constants/Colors";

const generateMonths = () => {
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  return months;
};


const generateMonthlyData = () => {
  return [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65];
};


const chartCanvas = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
  if (chartCanvas.value) {
    const ctx = chartCanvas.value.getContext("2d");
    if (ctx) {
      new Chart(ctx, {
        type: "line",
        data: {
          labels: generateMonths(),
          datasets: [
            {
              label: "Sales",
              backgroundColor: "rgb(156,78,157, 0.2)",
              borderColor: "#9c4e9d",
              data: [0, 10, 5, 25, 10, 5, 35, 20, 5, 23, 9, 29],
              tension: 0.4,
              borderWidth: 5,
              fill: true,
              pointRadius: 0,
              pointHoverRadius: 0,
              
             
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
            },
            
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
              ticks: {
                display: true,
              },
              border: {
                display: false,
              },
            },
            y: {
              grid: {
                display: true,
              },
              ticks: {
                display: true,
              },
              border: {
                display: false,
              },
              beginAtZero: true,
            },
          },
        },
      });
    }
  }
});

const cardData = [
  {
    title: "Total Revenue",
    statsNumber: "$200.00",
    icon: DollarIcon,
  },
  {
    title: "Owner Earning",
    statsNumber: "$76.00",
    icon: DollarIcon,
  },
  {
    title: "Referrals Earnings",
    statsNumber: "$124.00",
    icon: DollarIcon,
  },
];

definePageMeta({
  layout: "dashboard",
});
</script>

<template>
  <section class="w-100 h-100 bg-light-3 pt-7 px-10">
    <DashboardHeader :title="'Earning'" />

    <div class="d-flex justify-space-between mt-16 items-center ga-10">
      <DashboardStatsCard
        v-for="(card, index) in cardData"
        :key="index"
        :statsTitle="card.title"
        :statsNumber="card.statsNumber"
        :icon="card.icon"
      />
    </div>

    <v-row class="mt-10 container px-4">
      <canvas ref="chartCanvas" class="w-full mt-8"></canvas>
    </v-row>
  </section>
</template>



<style scoped>
.container {
  height: 510px;
  width: 100%;
}
</style>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import Chart from "chart.js/auto";
import Colors from "~/constants/Colors";

const generateLastMonthDates = () => {
  const dates = [];
  for (let i = 30; i >= 0; i -= 5) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    dates.push(
      date.toLocaleDateString("en-US", { day: "numeric", month: "short" })
    );
  }
  return dates;
};

const chartCanvas = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
  if (chartCanvas.value) {
    const ctx = chartCanvas.value.getContext("2d")!;
    new Chart(ctx, {
      type: "line",
      data: {
        labels: generateLastMonthDates(),
        datasets: [
          {
            label: "Sales",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "#df2de2",
            data: [0, 10, 5, 20, 15, 5, 15, 10, 20, 25, 28, 30],
            tension: 0.3,
            borderWidth: 5,
            fill: false,
            pointStyle: "circle",
            pointRadius: 6.5,
            pointBackgroundColor: Colors.white,
            pointBorderColor: "#ae8ff7",
            pointBorderWidth: 4,
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
          tooltip: {
            backgroundColor: "#030229",
            titleColor: "#fff",
            titleAlign: "center",
            bodyColor: "#fff",
            borderColor: "#fff",
            bodyAlign: "left",
            borderWidth: 1,
            padding: 10,
            boxPadding: 10,
            
            titleFont: {
              size: 14,
            },
            bodyFont: {
              size: 12,
            },
            callbacks: {
              title: function (tooltipItems) {
                return tooltipItems[0].dataset.label;
              },
              label: function (tooltipItem) {
                return ` ${tooltipItem.raw}`;
              },
              footer: function () {
                return "";
              },
              beforeLabel: function () {
                return "";
              },
            },
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
});
</script>

<template>
  <div class="container bg-white w-100 rounded-lg pa-10">
    <v-row class="justify-lg-space-between align-center">
      <p class="txt-light-100 txt-subTitle">Reports</p>

      <v-btn
        class="text-none"
        :color="Colors.light.blueDark"
        rounded="xs"
        variant="text"
      >
        View All
      </v-btn>
    </v-row>

    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<style scoped>
.container {
  height: 410px;
  width: 100%;
}
</style>

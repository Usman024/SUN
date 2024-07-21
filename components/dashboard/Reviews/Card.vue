<script lang="ts" setup>
import Colors from "~/constants/Colors";
import type { Reviews } from "~/types/review";

const props = defineProps<{
  reviews: Reviews[];
}>();
</script>

<template>
  <div class="mt-16">
    <div v-for="(item, index) in reviews" :key="index">
      <v-card class="my-5 rounded-lg d-flex pa-5 bg-white " elevation="0">
        <v-avatar :image="item.avatar" size="70" class="mt-3"></v-avatar>

        <div class="w-100">
          <div class="d-flex justify-space-between">
            <div class="d-flex ga-5 align-center px-4">
              <p class="txt-subTitle2">{{ item.name }}</p>

              <v-rating
                :model-value="item.rating"
                :color="Colors.star"
                size="24"
                half-increments
                :disabled="true"
              ></v-rating>
            </div>

            <DashboardMenuListItem />
          </div>

          <div class="px-4 pb-4">
           {{ item.text }}
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<style></style>

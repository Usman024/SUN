<script lang="ts" setup>
import Colors from "~/constants/Colors";

const props = defineProps<{
  item: {
    prependAvatar: string;
    title: string;
  };
}>();
</script>


<template>
    <div class="mt-8">
      <v-row class="align-center ga-1">
        <img :src="item.prependAvatar" class="image-container" alt="" />
        <v-col>
          <p class="text-subtitle-1">{{ item.title }}</p>
          <v-rating
            :model-value="3.5"
            :color="Colors.light.yellow"
            size="24"
            half-increments
          ></v-rating>
        </v-col>
      </v-row>
      <v-divider class="my-4"></v-divider>
    </div>
  </template>
  

  
  <style scoped>
  .image-container {
    width: 60px;
    height: 60px;
    border-radius: 12px;
  }
  </style>
  
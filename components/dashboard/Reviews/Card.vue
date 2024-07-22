<script lang="ts" setup>
import Colors from "~/constants/Colors";
import type { Reviews } from "~/types/review";

import type { MenuItem } from "~/types/dashboard";
import ShareIcon from "@/components/svgs/dashboard/ShareIcon.vue";
import PinIcon from "@/components/svgs/dashboard/PinIcon.vue";
import DeleteIcon from "@/components/svgs/dashboard/DeleteIcon.vue";

const props = defineProps<{
  reviews: Reviews[];
}>();

const reviews = ref([...props.reviews]);

const shareAction = () => {
  console.log("Response action triggered");
};

const pinAction = () => {
  console.log("Pin action triggered");
};


const deleteAction = (index: number) => {
  reviews.value.splice(index, 1);
  console.log("Delete action triggered, item removed at index:", index);
};

 

const menuOptions = (index: number): MenuItem[] => [
  {
    color: "#f8f7ff",
    text: "Response",
    icon: ShareIcon,
    action: shareAction,
  },
  {
    color: "#f7faff",
    text: "Pin",
    icon: PinIcon,
    action: pinAction,
  },
  {
    color: "#fef4f5",
    text: "Delete",
    icon: DeleteIcon,
    action: () => deleteAction(index),
  },
];
</script>

<template>
  <div class="mt-16">
    <div v-for="(item, index) in reviews" :key="index">
      <v-card class="my-5 rounded-lg d-flex pa-5 bg-white" elevation="0">
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

            <DashboardMenuListItem :menuItems="menuOptions(index)" />
          </div>

          <div class="px-4 pb-4 card-content">
            {{ item.text }}
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<style scoped>
.card-content {
  margin-top: -10px;;
  max-width: 88%
}

</style>

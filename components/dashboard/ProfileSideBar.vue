<script setup lang="ts">
import Colors from "~/constants/Colors";

import EmailIcon from "@/components/svgs/user/EmailIcon.vue";
import PhoneIcon from "@/components/svgs/user/PhoneIcon.vue";
import LocationIcon from "@/components/svgs/user/LocationIcon.vue";
import GuiderIcon from "@/components/svgs/user/GuiderIcon.vue";

const contactInfo = ref([
  { label: "Email", value: "nabeelahmad.dev@gmail.com", icon: EmailIcon },
  { label: "Phone Number", value: "33757005467", icon: PhoneIcon },
  { label: "Location", value: "America", icon: LocationIcon },
  { label: "Name", value: "Jessica", icon: GuiderIcon },
]);
</script>

<template>
  <v-navigation-drawer
    class="color-white"
    location="right"
    border="none"
    theme="light"
    :width="350"
  >
    <div class="d-flex justify-center mt-16 pt-8">
      <v-avatar
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7d_7Zaqvs_bHuEURXy0HfRlNbldCNvBiZlA&s"
        size="90"
      ></v-avatar>
    </div>
    <p
      class="align-center d-flex justify-center mt-4 txt-subTitle2 txt-light-100 mt-4 mb-16"
    >
      Babar Azam
    </p>

    <v-divider class="mx-8"></v-divider>

    <div class="px-8 mt-12">
      <p class="txt-subTitle txt-light-100">Contact Info</p>

      <v-row
        v-for="(info, index) in contactInfo"
        :key="index"
        class="mt-5 ga-2 align-center py-4  margin border-b-thin"
      >
        <v-icon>
          <component :is="info.icon" />
        </v-icon>
        <p class="txt-info txt-light-50">{{ info.value }}</p>
      </v-row>
    </div>
  </v-navigation-drawer>
</template>

<style scoped>
.margin {
  margin-left: 1px;
  border-color:var(--color-light-background2);
}
</style>

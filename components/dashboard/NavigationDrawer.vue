<script setup lang="ts">
import { ref } from "vue";
import SvgsIconsDashBoardIcon from "@/components/svgs/icons/DashBoardIcon.vue";

import SvgsIconsSubscriptionIcon from "@/components/svgs/icons/SubscriptionIcon.vue";

import SvgsIconsEarningIcon from "@/components/svgs/icons/EarningIcon.vue";

import SvgsIconsUserIcon from "@/components/svgs/icons/UserIcon.vue";

import SvgsIconsTutorsIcon from "@/components/svgs/icons/TutorsIcon.vue";

import SvgsIconsReviewIcon from "@/components/svgs/icons/ReviewIcon.vue";

import SvgsIconsReportIcon from "@/components/svgs/icons/ReportIcon.vue";

import SvgsIconsMessageIcon from "@/components/svgs/icons/MessageIcon.vue";

import SvgsIconsNotificationIcon from "@/components/svgs/icons/NotificationIcon.vue";

import SvgsIconsSettingIcon from "@/components/svgs/icons/SettingIcon.vue";

const selectedItem = ref("dashboard");

const navigationItems = {
  dashboard: { title: "Dashboard", icon: SvgsIconsDashBoardIcon },
  subscription: { title: "Subscription", icon: SvgsIconsSubscriptionIcon },
  earning: { title: "Earning", icon: SvgsIconsEarningIcon },
  users: { title: "Users", icon: SvgsIconsUserIcon },
  tutors: { title: "Tutors", icon: SvgsIconsTutorsIcon },
  reviews: { title: "Reviews", icon: SvgsIconsReviewIcon },
  reports: { title: "Reports & Statistics", icon: SvgsIconsReportIcon },
  messages: { title: "Messages", icon: SvgsIconsMessageIcon },
  connection: { title: "Connection", icon: SvgsIconsNotificationIcon },
  settings: { title: "Settings", icon: SvgsIconsSettingIcon },
};

const updateSelectedItem = (newValue: string) => {
  console.log("newValue", newValue);
  selectedItem.value = newValue;
};
</script>

<template>
  <v-navigation-drawer class="color-white" theme="light" permanent>
    <div class="d-flex justify-center mt-16 mb-12">
      <SvgsLogo />
    </div>

    <v-list>
      <DashboardNavItem
        v-for="(item, key) in navigationItems"
        :key="key"
        :title="item.title"
        :value="key"
        :is-selected="selectedItem === key"
        :icon-component="item.icon"
        @selectedItem="updateSelectedItem($event)"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
.hover-list-item {
  transition: background-color 0.3s;
}

.hover-list-item:hover {
  background-color: #f5edf5;
}

.selected-list-item {
  background-color: #f5edf5;
  color: var(--color-light-primary);
}

.selected-icon {
  color: var(--color-light-primary);
}
</style>

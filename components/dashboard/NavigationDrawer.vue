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
import type { NavigationItem } from "~/types/dashboard";

const selectedItem = ref("dashboard");
const connectionDropdownOpen = ref(false);
const route = useRoute();

const navigationItems: { [key: string]: NavigationItem } = {
  dashboard: {
    title: "Dashboard",
    icon: SvgsIconsDashBoardIcon,
    link: "/dashboard",
  },
  subscription: {
    title: "Subscription",
    icon: SvgsIconsSubscriptionIcon,
    link: "/dashboard/subscription",
  },
  earning: {
    title: "Earning",
    icon: SvgsIconsEarningIcon,
    link: "/dashboard/earning",
  },
  users: { title: "Users", icon: SvgsIconsUserIcon, link: "/dashboard/users" },
  tutors: {
    title: "Tutors",
    icon: SvgsIconsTutorsIcon,
    link: "/dashboard/tutors",
  },
  reviews: {
    title: "Reviews",
    icon: SvgsIconsReviewIcon,
    link: "/dashboard/reviews",
  },
  reports: {
    title: "Reports & Statistics",
    icon: SvgsIconsReportIcon,
    link: "/dashboard/reports",
  },
  messages: {
    title: "Messages",
    icon: SvgsIconsMessageIcon,
    link: "/dashboard/messages",
  },
  connection: {
    title: "Connection",
    icon: SvgsIconsNotificationIcon,
    link: "/dashboard/connection",

    children: [
      { title: "Facebook", value: "facebook", link: "/dashboard/connection" },
      { title: "TikTok", value: "tiktok", link: "/dashboard/connection" },
      { title: "YouTube", value: "youtube", link: "/dashboard/connection" },
      { title: "Instagram", value: "instagram", link: "/dashboard/connection" },
      { title: "X", value: "x", link: "/dashboard/connection" },
      { title: "Linkedin", value: "linkedin", link: "/dashboard/connection" },
      { title: "WhatsApp", value: "whatsapp", link: "/dashboard/connection" },
      { title: "Email", value: "email", link: "/dashboard/connection" },
      { title: "AI", value: "ai", link: "/dashboard/connection" },
    ],
  },
  settings: {
    title: "Settings",
    icon: SvgsIconsSettingIcon,
    link: "/dashboard/settings",
  },
};

const updateSelectedItem = (newValue: string) => {
  if (newValue === "connection") {
    connectionDropdownOpen.value = !connectionDropdownOpen.value;
    selectedItem.value = selectedItem.value === newValue ? "" : newValue;
  } else {
    selectedItem.value = newValue;
  }
};

onMounted(() => {
  const currentPath = route.path;
  const isSelectedItem = (item: { link: string }) => item.link === currentPath;

  for (const key in navigationItems) {
    const item = navigationItems[key];

    if (isSelectedItem(item)) {
      selectedItem.value = key;
      break;
    }

    if (item.children) {
      const child = item.children.find(isSelectedItem);
      if (child) {
        selectedItem.value = child.value;
        connectionDropdownOpen.value = true;
        break;
      }
    }
  }
});
</script>

<template>
  <v-navigation-drawer
    class="color-white"
    border="none"
    theme="light"
    :width="300"
  >
    <div class="d-flex justify-center mt-10 mb-12">
      <SvgsLogo />
    </div>

    <v-list>
      <div v-for="(item, key) in navigationItems" :key="key">
        <DashboardNavItem
          :title="item.title"
          :value="key as string"
          :isSelected="selectedItem === key"
          :iconComponent="item.icon"
          :link="item.link"
          @selectedItem="updateSelectedItem"
        />
        <v-expand-transition v-if="key === 'connection'">
          <v-list v-if="connectionDropdownOpen">
            <DashboardNavItem
              v-for="(child, index) in item.children"
              :key="index"
              :title="child.title"
              :value="child.value"
              :isSelected="selectedItem === child.value"
              :link="child.link"
              @selectedItem="updateSelectedItem"
            />
          </v-list>
        </v-expand-transition>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped></style>

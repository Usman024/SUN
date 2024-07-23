<script lang="ts" setup>
import { defineProps } from "vue";
import type { MenuItem } from "~/types/dashboard";

const props = defineProps<{
  menuItems: MenuItem[];
}>();
</script>

<template>
  <div>
    <div class="pa-4 text-center">
      <v-btn size="small" icon variant="plain">
        <v-icon class="cursor-pointer">
          <SvgsIconsMenuIcon />
        </v-icon>

        <v-menu
          activator="parent"
          location="bottom start"
          transition="fade-transition"
        >
          <v-list density="compact" min-width="170" rounded="lg" slim>
            <v-list-item v-for="(item, index) in menuItems" :key="index">
              <v-btn
                :color="item.color"
                class="w-100 justify-start text-none"
                rounded="lg"
                @click="item.action"
                :style="{ color: item.textColor }"
              >
                <v-icon left>
                  <component :is="item.icon" />
                </v-icon>
                <span class="pl-2"  >
                  {{ item.text }}
                </span>
              </v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>
    </div>
  </div>
</template>
<script lang="ts" setup></script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>

<script setup lang="ts">
import Colors from "~/constants/Colors";

const props = defineProps({
  title: { type: String, default: "" },
  isSearchBar: { type: Boolean, default: false },
});

const loaded = ref(false);
const loading = ref(false);

const onClick = () => {
  loading.value = true;

  setTimeout(() => {
    loading.value = false;
    loaded.value = true;
  }, 2000);
};
</script>

<template>
  <v-row class="justify-space-between mt-5 align-center pl-2">
    <p class="txt-title txt-light-100">{{ title }}</p>
    <v-btn
      v-if="!isSearchBar"
      class="text-none"
      :color="Colors.white"
      size="large"
      rounded="xs"
      variant="flat"
    >
      My Account

      <template v-slot:append>
        <v-icon>
          <SvgsDashboardBtnUserIcon />
        </v-icon>
      </template>
    </v-btn>

    <div v-else class="w-33">
      <v-row class="ga-4">
        <v-text-field
          :loading="loading"
          density="compact"
          variant="flat"
          hide-details
          :bg-color="Colors.light.background1"
          rounded="lg"
          placeholder="Search"
          single-line
          @click:append-inner="onClick"
        >

        <template v-slot: prepend-inner>
          <v-icon class="mr-1">
            <SvgsIconsSearchIcon />
          </v-icon>
        </template>
      </v-text-field>

        <v-btn
          class="text-none"
          color="#f0eef8"
          size="large"
          rounded="xs"
          variant="flat"
        >
          Export to Excel

          <template v-slot:prepend>
            <v-icon>
              <SvgsIconsExcelIcon />
            </v-icon>
          </template>
        </v-btn>
      </v-row>
    </div>
  </v-row>
</template>

<style scoped></style>

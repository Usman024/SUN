<script lang="ts" setup>
import Colors from "~/constants/Colors";
import { HEADER, TABLEDATA } from "~/constants/data";
</script>

<template>
  <div class="bg-white rounded-lg pa-10">
    <v-row class="justify-lg-space-between align-center">
      <p class="txt-light-100 txt-subTitle">Recent Subscriptions</p>

      <v-btn
        class="text-none"
        :color="Colors.light.blueDark"
        rounded="xs"
        variant="text"
      >
        View All
      </v-btn>
    </v-row>

    <v-table class="mt-6">
      <thead>
        <tr>
          <th v-for="(item, i) in HEADER" :key="i" class="text-left">
            <div class="d-flex justify-space-between items-center">
              <span class="text-subtitle-2">{{ item.title }}</span>
              <v-icon v-if="item.isChevronIcon" class="chevron-icon">
                <SvgsDashboardChevronDownIcon
                  :width="'10'"
                  :height="'9'"
                  :fillColor="Colors.light.text50"
                />
              </v-icon>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in TABLEDATA" :key="i">
          <td class="border-none">{{ item.tutor }}</td>
          <td class="border-none">{{ item.dateOfBuying }}</td>
          <td class="border-none">{{ item.country }}</td>
          <td class="border-none">{{ item.subscriptionPlan }}</td>
          <td class="border-none">{{ item.user }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<style scoped>
.container {
  height: 410px;
}
</style>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import { useRouter } from "vue-router";
import Colors from "~/constants/Colors";

const props = defineProps({
  title: String,
  value: String,
  isSelected: Boolean,
  iconComponent: Object,
  link: {
    type: String,
    required: true,
    default: "",
  },
});
const emits = defineEmits(["selectedItem"]);

const router = useRouter();

const selectItem = () => {
  emits("selectedItem", props.value);
  router.push(props.link);
};
</script>

<template>
  <v-list-item
    :title="title"
    :value="value"
    class="hover-list-item pl-6 my-1"
    :class="{ 'selected-list-item': isSelected }"
    @click="selectItem"
    :active='false'
  >
    <template v-slot:prepend>
      <v-icon :class="{ 'selected-icon': isSelected }">
        <component
          :is="iconComponent"
          :fillColor="isSelected ? Colors.light.primary : Colors.light.text30"
        />
      </v-icon>
    </template>
    <template v-slot:title>
      <span
        :style="{
          color: isSelected ? Colors.light.primary : Colors.light.text50,
        }"
      >
        {{ title }}</span
      >
    </template>

    <template v-if="title === 'Messages'" v-slot:append>
      <v-badge color="red" content="23" inline></v-badge>
    </template>

    <template v-if="title === 'Connection'" v-slot:append>
      <v-icon :class="{ 'selected-icon': isSelected }">
        <SvgsIconsChevronUpIcon
          v-if="isSelected"
          :fillColor="isSelected ? Colors.light.primary : Colors.light.text10"
        />
        <SvgsIconsChevronDownIcon v-else />
      </v-icon>
    </template>
  </v-list-item>
</template>

<style scoped>
.hover-list-item {
  transition: background-color 0.3s;
}

.hover-list-item:hover {
  background-color: var(--color-light-pink);
}

.selected-list-item {
  background: linear-gradient(
    to right,
    #efe2ef 0%,
    rgba(156, 78, 157, 0) 91.25%
  );

  color: var(--color-light-primary);
}

.selected-icon {
  color: var(--color-light-primary);
}
</style>

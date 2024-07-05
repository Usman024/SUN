<script setup lang="ts">
import { ref, defineProps } from "vue";
import Colors from "~/constants/Colors";

const router = useRouter();
const props = defineProps({
  title: String,
  value: String,
  isSelected: Boolean,
  iconComponent: Object,
});
const emits = defineEmits(["selectedItem"]);

const selectItem = () => {
  emits("selectedItem", props.value);
  if (props.value === "dashboard") {
    router.push(`/dashboard`);
  } else {
    router.push(`/dashboard/${props.value}`);
  }
};
</script>

<template>
  <v-list-item
    :title="title"
    :value="value"
    class="hover-list-item"
    :class="{ 'selected-list-item': isSelected }"
    @click="selectItem"
  >
    <template v-slot:prepend>
      <v-icon :class="{ 'selected-icon': isSelected }">
        <component
          :is="iconComponent"
          :fillColor="isSelected ? Colors.light.primary : '#333333'"
        />
      </v-icon>
    </template>
    <template v-slot:title>
      <span :style="{ color: isSelected ? Colors.light.primary : '' }">{{
        title
      }}</span>
    </template>
  </v-list-item>
</template>

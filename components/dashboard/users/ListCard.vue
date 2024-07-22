<script lang="ts" setup>
import { USERS_HEADER } from "~/constants/data";
import Colors from "~/constants/Colors";
import type { User } from "~/types/user";
import type { MenuItem } from "~/types/dashboard";
import EditIcon from "@/components/svgs/dashboard/EditIcon.vue";
import DeleteIcon from "@/components/svgs/dashboard/DeleteIcon.vue";


const props = defineProps<{
  users: User[];
}>();

const users = ref([...props.users]);


const editAction = () => {
  console.log('Edit action triggered');
};

const deleteAction = (index: number) => {
  users.value.splice(index, 1);
  console.log('Delete action triggered', index);
};


const menuOptions = (index: number)  : MenuItem[] => [
  {
    color: '#f7faff',
    text: 'Edit',
    icon: EditIcon,
    action: editAction
  },
  {
    color: '#fef4f5',
    text: 'Delete',
    icon: DeleteIcon,
    action: () => deleteAction(index)

  },
  
];


</script>

<template>
  <div class="w-full mt-10">
    <div class="d-flex justify-space-around mx-4">
      <div v-for="(item, i) in USERS_HEADER" :key="i" class="py-7">
        <v-row class="ga-3  user-cell" align="center">
          <p class="align-center">{{ item.title }}</p>
          <v-icon v-if="item.isChevronIcon" class="mb-1">
            <SvgsDashboardChevronDownIcon
              :width="'10'"
              :height="'9'"
              :fillColor="Colors.light.text50"
            />
          </v-icon>
        </v-row>
      </div>

      <div></div>
    </div>

    <div class="mt-4">
      <div
        v-for="(item, index) in users"
        :key="index"
        class="bg-white rounded-lg mt-4 py-7 px-9"
      >
        <v-row class="justify-space-between" align="center">
          <div class="d-flex ga-3 align-center user-cell">
            <v-avatar :image="item.avatar" size="47"></v-avatar>
            <p>{{ item.name }}</p>
          </div>

          <p class="user-cell">{{ item.email }}</p>
          <p class="user-cell">{{ item.location }}</p>
          <p class="user-cell">{{ item.phone }}</p>

          <div class="user-cell">
            <v-btn
              class="text-none"
              color="#eff4ff"
              size="large"
              rounded="xl"
              variant="flat"
            >
              {{ item.role }}
            </v-btn>
          </div>

          <DashboardMenuListItem :menuItems="menuOptions(index)" />
        </v-row>
      </div>
    </div>
  </div>
</template>

<style scoped>
.user-cell {
  width: 200px;
  text-align: center;
}
</style>

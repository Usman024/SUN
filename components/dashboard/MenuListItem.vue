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
              <v-list-item prepend-icon="mdi-pencil" title="Edit" link></v-list-item>
              <v-list-item prepend-icon="mdi-delete" title="Delete" link></v-list-item>
              <v-list-item prepend-icon="mdi-share" title="Share" link></v-list-item>
            </v-list>
          </v-menu>
        </v-btn>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  </script>
  
  <style scoped>
  .cursor-pointer {
    cursor: pointer;
  }
  </style>
  
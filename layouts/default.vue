<script setup>

const visible = ref(false)



</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-navigation-drawer>
      <v-list style="padding: 20px">
        <v-list-item title="Nabeel Ahmad"></v-list-item>
        <v-btn prepend-icon="$vuetify" variant="outlined"> Button </v-btn>

        <v-text-field
          clearable
          placeholder="Doe"
          persistent-clear
          variant="outlined"
          class="mt-3"
        ></v-text-field>

        <v-text-field
          placeholder="email address"
          type="email"
          variant="outlined"
        ></v-text-field>
      </v-list>

      <v-text-field
      :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
      :type="visible ? 'text' : 'password'"
      density="compact"
      placeholder="Enter your password"
      variant="outlined"
      @click:append-inner="visible = !visible"
    ></v-text-field>


    </v-navigation-drawer>

    <v-app-bar title="Application bar"></v-app-bar>

    <v-main
      class="d-flex align-center justify-center"
      style="min-height: 300px"
    >
      Main Content
      
    </v-main>
  </v-layout>
</template>

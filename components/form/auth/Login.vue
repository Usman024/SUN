<script setup>
import { ref } from "vue";
import colors from "~/constants/Colors.ts";
import { USERS } from "@/constants/data";


const router = useRouter();

const email = ref("");
const password = ref("");
const selectedUser = ref("");
const visible = ref(false);
const ex4 = ref(false);
const snackbar = ref(false);
const snackbarMessage = ref("");

const Login = () => {
  if (!email.value || !password.value) {
    snackbarMessage.value = "All fields are required.";
    snackbar.value = true;
    return;
  }

  const obj = {
    user: selectedUser.value,
    email: email.value,
    password: password.value,
    ex4: ex4.value,
  };

  console.log("Logging in...", obj);

  router.push("/dashboard");
};
</script>

<template>
  <v-form @submit.prevent="Login">
    <p class="text-h5 text-center pb-10 pt-16">Log in</p>

    <div class="form-group">
      <label class="input-field-label" for="email">Select One</label>
      <v-select
        :items="USERS"
        v-model="selectedUser"
        variant="solo"
        placeholder="Admin"
        :bg-color="colors.light.background3"
      ></v-select>
    </div>

    <div class="form-group">
      <label class="input-field-label" for="email">Email Address</label>
      <v-text-field
        v-model="email"
        id="email"
        :bg-color="colors.light.background3"
        placeholder="example@gmail.com"
        variant="solo"
        type="email"
        required
      ></v-text-field>
    </div>

    <div class="form-group">
      <label class="input-field-label" for="password">Password</label>
      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye' : 'mdi-eye-off'"
        :type="visible ? 'text' : 'password'"
        v-model="password"
        id="password"
        :bg-color="colors.light.background3"
        placeholder="Enter your password"
        variant="solo"
        type="password"
        required
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <div
        class="text-medium-emphasis d-flex align-center justify-space-between"
      >
        <v-checkbox
          v-model="ex4"
          color="primary"
          label="Remember me"
          hide-details
        ></v-checkbox>

        <a
          class="text-caption text-decoration-none color-light-primary"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Reset password?</a
        >
      </div>
    </div>

    <v-btn
      type="submit"
      class="mt-4 text-capitalize py-7 text-subtitle-1 rounded-lg"
      :color="colors.light.primary"
      block
    >
      Log in
    </v-btn>

    <v-snackbar v-model="snackbar" :color="colors.danger" timeout="3000">
      {{ snackbarMessage }}
    </v-snackbar>
  </v-form>
</template>

<style scoped>
/* Add scoped styles if needed */
</style>

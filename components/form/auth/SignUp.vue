<script setup>
import colors from "~/constants/Colors.ts";
import { USERS } from "@/constants/data";

const router = useRouter();

const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const selectedUser = ref("");
const visible = ref(false);
const visible2 = ref(false);
const snackbar = ref(false);
const snackbarMessage = ref("");

const signup = () => {
  if (!email.value || !password.value || !confirmPassword.value) {
    snackbarMessage.value = "All fields are required.";
    snackbar.value = true;
    return;
  }

  if (password.value !== confirmPassword.value) {
    snackbarMessage.value = "Passwords do not match.";
    snackbar.value = true;
    return;
  }

  const obj = {
    user: selectedUser.value,
    email: email.value,
    password: password.value,
  };

  console.log("Signing up...", obj);
  router.push("/auth/login");
};
</script>

<template>
  <v-form @submit.prevent="signup">
    <p class="text-h5 text-center pb-10 pt-16">Sign up</p>

    <div class="form-group">
      <label class="input-field-label" for="userSelect">Select One</label>
      <v-select
        v-model="selectedUser"
        :items="USERS"
        variant="flat"
        rounded="lg"
        placeholder="Admin"
        :bg-color="colors.light.background3"
        id="userSelect"
      ></v-select>
    </div>

    <div class="form-group">
      <label class="input-field-label" for="email">Email Address</label>
      <v-text-field
        v-model="email"
        id="email"
        :bg-color="colors.light.background3"
        placeholder="example@gmail.com"
        variant="flat"
        rounded="lg"
        type="email"
        required
      ></v-text-field>
    </div>

    <div class="form-group">
      <label class="input-field-label" for="password">Password</label>
      <v-text-field
        :append-inner-icon="visible2 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="visible2 ? 'text' : 'password'"
        v-model="password"
        id="password"
        :bg-color="colors.light.background3"
        placeholder="Enter your password"
        variant="flat"
        rounded="lg"
        type="password"
        required
        @click:append-inner="visible2 = !visible2"
      ></v-text-field>
    </div>

    <div class="form-group">
      <label class="input-field-label" for="confirmPassword"
        >Confirm Password</label
      >
      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye' : 'mdi-eye-off'"
        :type="visible ? 'text' : 'password'"
        v-model="confirmPassword"
        id="confirmPassword"
        :bg-color="colors.light.background3"
        placeholder="Confirm your password"
        variant="flat"
        rounded="lg"
        type="password"
        required
        @click:append-inner="visible = !visible"
      ></v-text-field>
    </div>

    <v-btn
      type="submit"
      class="mt-4 text-capitalize py-7 text-subtitle-1 rounded-lg"
      :color="colors.light.primary"
      block
    >
      Sign up
    </v-btn>

    <v-snackbar v-model="snackbar" :color="colors.danger" timeout="3000">
      {{ snackbarMessage }}
    </v-snackbar>
  </v-form>
</template>

<style scoped>
/* Add scoped styles if needed */
</style>

// plugins/vuetify.js

import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    theme: {
      themes: {
        light: {
          colors: {
          },
        },
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});

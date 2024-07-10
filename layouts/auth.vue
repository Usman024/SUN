<script setup lang="ts"></script>

<template>
  <div class="layout-container">
    <aside class="sidebar custom-sidebar-width">
      <div class="d-flex justify-center mt-16">
        <SvgsLogo />
      </div>

      <slot></slot>
    </aside>
    <main
      class="main-content custom-main-content-width d-none d-md-flex justify-center align-center bg-light-2 overflow-y-auto"
    >
      <SvgsAuthSvgImage />
    </main>
  </div>
</template>

<style scoped>
.layout-container {
  display: flex;
  height: 100vh;
  overflow: hidden;
}
.sidebar {
  padding: 1.4rem;
}
.custom-sidebar-width {
  width: 25%;
}

.custom-main-content-width {
  width: 75%;
}

@media (max-width: 960px) {
  .layout-container {
    flex-direction: column;
  }

  .custom-sidebar-width {
    width: 100%;
  }

  .custom-main-content-width {
    display: none;
  }
}
</style>

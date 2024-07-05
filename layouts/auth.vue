<script setup lang="ts"></script>

<template>
  <div class="layout-container">
    <aside class="sidebar w-25">
      <div class="d-flex justify-center mt-16">
        <SvgsLogo />
      </div>

      <slot></slot>
    </aside>
    <main class="main-content w-75">
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
  background-color: #ffffff;
  padding: 1.4rem;
}
.main-content {
  background-color: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  overflow-y: auto;
}
</style>

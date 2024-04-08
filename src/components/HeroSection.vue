<script>
import AppHeader from "./AppHeader.vue";

export default {
  name: "HeroSection",
  components: {
    AppHeader,
  },
  data() {
    return {};
  },
};
</script>
<template>
  <!-- Hero section -->
  <div class="hero">
    <!-- Site Header -->
    <AppHeader />

    <!-- Jumbotron -->
    <div class="jumbotron">
      <!-- Side buttons -->
      <div class="hero-btns"></div>
    </div>
  </div>
</template>
<style scoped></style>

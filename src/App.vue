<script>
import HeroSection from "./components/HeroSection.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    HeroSection,
    AppMain,
    AppFooter,
  },
  data() {
    return {};
  },
};
</script>
<template>
  <!-- Hero section and header -->
  <HeroSection />

  <!-- Site Main -->
  <AppMain />

  <!-- Site Footer -->
  <AppFooter />
</template>
<style scoped></style>

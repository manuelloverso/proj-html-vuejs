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
    return {
      footerList1: [
        "Request a website",
        "Browse Themes",
        "Payment options",
        "Support System",
        "Checkout",
        "Purchase Theme",
      ],

      footerList2: [
        "Purchase Theme",
        "Our Benefits",
        "Our Team",
        "Our Services",
        "Other Products",
        "My account",
      ],

      footerCategories: [
        "economy",
        "design",
        "coaching",
        "business",
        "medicine",
        "law",
        "fitness",
      ],
    };
  },
};
</script>
<template>
  <a href="#header" class="btn-accent hover-primary back-to-top">
    <i class="fa-solid fa-chevron-up"></i>
  </a>

  <!-- Hero section and header -->
  <HeroSection />

  <!-- Site Main -->
  <AppMain />

  <!-- Site Footer -->
  <AppFooter
    :list1="footerList1"
    :list2="footerList2"
    :categories="footerCategories"
  />
</template>
<style scoped>
.back-to-top {
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  aspect-ratio: 1;
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 4;
  text-decoration: none;
}
</style>

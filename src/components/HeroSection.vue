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
      <h1 class="fs-8 mb-4">Key to your success</h1>
      <p class="mb-6 fs-4">
        EduPrime is the most versatile WordPress theme for educational purposes,
        showcasing universities, courses, secondary schools etc.
      </p>
      <div class="hero-btns d-flex justify-evenly">
        <button class="btn-accent">
          <i class="fa-solid fa-magnifying-glass fa-sm"></i> Search courses
        </button>
        <button class="btn-white-primary">
          <i class="fa-solid fa-user-plus fa-sm"></i> Apply for university
        </button>
      </div>
    </div>

    <!-- Side buttons -->
    <div class="hero-btns"></div>

    <!-- Wave Image -->
    <img class="wave w-100 d-block" src="/images/Wave-1.png" alt="" />
  </div>
</template>
<style scoped>
.hero {
  color: var(--text-white);
  background-image: url("/images/hero.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  .jumbotron {
    padding-bottom: 5rem;

    max-width: 800px;
    margin: auto;
    text-align: center;

    & h1 {
      font-weight: 900;
    }
  }
}
</style>

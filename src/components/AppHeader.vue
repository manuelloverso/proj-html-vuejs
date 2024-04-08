<script>
import { store } from "../store.js";

export default {
  name: "AppHeader",
  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <!-- Site Header -->
  <header class="container-xl d-flex justify-between align-center pt-5">
    <!-- Site Logo -->
    <div class="logo">
      <img width="300" src="/images/theme_eduprime_logo.png" alt="" />
    </div>

    <!-- Right Header -->
    <div class="right d-flex align-center">
      <!-- Navigation Bar -->
      <nav>
        <ul class="d-flex g-5 mr-5">
          <li v-for="link in store.navLinks">
            <a href="#">{{ link }}</a>
          </li>
        </ul>
      </nav>

      <!-- View courses button -->
      <button class="view-courses btn-accent">VIEW COURSES</button>
    </div>
  </header>
</template>
<style scoped>
header {
  margin-bottom: 5rem;
}
nav li a {
  color: white;
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: 600;
}
</style>

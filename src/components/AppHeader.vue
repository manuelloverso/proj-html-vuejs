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
  <header
    id="header"
    class="container-xl d-flex justify-between align-center pt-5"
  >
    <!-- Site Logo -->
    <div class="logo">
      <img class="w-100" src="/images/theme_eduprime_logo.png" alt="" />
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
      <button class="view-courses btn-accent hover-primary">
        VIEW COURSES
      </button>
    </div>
  </header>
</template>
<style scoped>
header {
  margin-bottom: 5rem;
  .logo {
    width: 300px;
    cursor: pointer;
  }

  nav li a {
    display: inline-block;
    color: white;
    text-decoration: none;
    font-size: 1.3rem;
    font-weight: 600;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.15);
    }
  }
  @media screen and (max-width: 1500px) {
    .logo {
      width: 200px;
    }

    button {
      display: none;
    }
  }
}
</style>

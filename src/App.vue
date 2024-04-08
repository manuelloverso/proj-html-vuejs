<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  data() {
    return {};
  },
};
</script>
<template>
  <h1>ciao</h1>
  <AppHeader />
</template>
<style scoped></style>

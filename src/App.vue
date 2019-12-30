<template>
  <div id="app">
    <Navbar />
    <Auth />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Auth from "./components/Auth";

export default {
  name: "App",
  components: {
    Navbar,
    Auth
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: #222;
  display: inline-block;
}
</style>

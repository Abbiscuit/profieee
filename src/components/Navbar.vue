<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar__logo">
        <router-link :to="{name: 'home'}">Profieee</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style lang="scss">
.navbar {
  background-color: #ff9b05;
  height: 72px;
  padding: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 4px rgba(black, 0.25);

  a {
    font-size: 24px;
    color: #fff;
  }
}
</style>
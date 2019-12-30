<template>
  <section class="auth">
    <h2 class="auth__heading">新規登録</h2>
    <form class="form">
      <input type="text" name="name" placeholder="Name" />
      <br />
      <input type="email" name="email" placeholder="Email" />
      <br />
      <input
        type="password"
        name="current-password"
        placeholder="Current Password"
      />
      <br />
      <div class="buttons">
        <button class="auth-button">登録</button>
        <button @click.prevent="googleSignIn" class="google-button">
          Google
        </button>
        <p class="auth-option">
          <router-link to="/">既にアカウントを持っている</router-link>
        </p>
      </div>
    </form>
  </section>
</template>

<script>
import { googleSignIn } from "../firebase/config";

export default {
  name: "Auth",
  data() {
    return {};
  },
  methods: {
    googleSignIn
  }
};
</script>

<style lang="scss" scoped>
.auth {
  max-width: 270px;
  background-color: #fff;
  margin: 60px auto 0;

  .auth__heading {
    text-align: center;
  }

  .form {
    margin-top: 15px;
    input {
      width: 100%;
      font-size: 24px;
      padding: 9px;
      margin-bottom: 15px;
    }

    .buttons {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .auth-button {
        color: #fff;
        font-size: 24px;
        margin-bottom: 15px;
        height: 40px;
        border: 1px solid transparent;

        background-color: #ff9b05;
      }

      .google-button {
        color: #fff;
        font-size: 24px;
        margin-bottom: 15px;
        height: 40px;
        border: 1px solid transparent;

        background-color: #4679fc;
      }

      .auth-option {
        text-align: center;
        font-size: 12px;
      }
    }
  }
}
</style>

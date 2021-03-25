<template>
  <BasicLayout>
    <div class="login">
      <h2>Sign in</h2>
      <form class="ui form">
        <div class="field">
          <input type="text" placeholder="username" />
        </div>
        <div class="field">
          <input type="password" placeholder="password" />
        </div>
        <button type="submit" class="ui button fluid primary">Sign in</button>
      </form>
      <router-link to="/register">Create account</router-link>
    </div>
  </BasicLayout>
</template>

<script>
import BasicLayout from "../layouts/BasicLayout";

export default {
  name: "Login",

  components: {
    BasicLayout,
  },
};
</script>

<style lang="scss" scoped>
.login {
  text-align: center;
  > h2 {
    margin: 50px 0 30px 0;
  }

  .ui.form {
    max-width: 300px !important;
    margin: 0 auto;
    margin-bottom: 10px;

    input.error {
      border-color: #faa;
      background-color: #ffeded;
    }
  }
}
</style>
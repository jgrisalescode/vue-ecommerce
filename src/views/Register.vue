<template>
  <BasicLayout>
    <div class="register">
      <h2>User register</h2>
      <form class="ui form">
        <div class="field">
          <input type="text" placeholder="John Doe" />
        </div>
        <div class="field">
          <input type="email" placeholder="john@example.com" />
        </div>
        <div class="field">
          <input type="password" placeholder="Password" />
        </div>
        <button type="submit" class="ui button fluid primary">
          Create account
        </button>
      </form>
      <router-link to="/login">Sign in</router-link>
    </div>
  </BasicLayout>
</template>

<script>
import BasicLayout from "../layouts/BasicLayout";

export default {
  name: "Register",

  components: {
    BasicLayout,
  },
};
</script>

<style lang="scss" scoped>
.register {
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
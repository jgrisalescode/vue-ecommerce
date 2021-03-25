<template>
  <BasicLayout>
    <div class="register">
      <h2>User register</h2>
      <form class="ui form" @submit.prevent="register">
        <div class="field">
          <input
            type="text"
            placeholder="John Doe"
            v-model="formData.username"
          />
        </div>
        <div class="field">
          <input
            type="email"
            placeholder="john@example.com"
            v-model="formData.email"
          />
        </div>
        <div class="field">
          <input
            type="password"
            placeholder="Password"
            v-model="formData.password"
          />
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
import { ref } from "vue";
import BasicLayout from "../layouts/BasicLayout";

export default {
  name: "Register",

  components: {
    BasicLayout,
  },

  setup(props) {
    let formData = ref({});

    const register = () => {
      console.log("Register user");
      console.log(formData.value);
    };

    return {
      formData,
      register,
    };
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
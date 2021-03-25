<template>
  <BasicLayout>
    <div class="login">
      <h2>Sign in</h2>
      <form class="ui form" @submit.prevent="login">
        <div class="field">
          <input
            type="text"
            placeholder="username"
            v-model="formData.username"
            :class="{ error: formError.identifier }"
          />
        </div>
        <div class="field">
          <input
            type="password"
            placeholder="password"
            v-model="formData.password"
            :class="{ error: formError.password }"
          />
        </div>
        <button
          type="submit"
          class="ui button fluid primary"
          :class="{ loading }"
        >
          Sign in
        </button>
      </form>
      <router-link to="/register">Create account</router-link>
    </div>
  </BasicLayout>
</template>

<script>
import { ref } from "vue";
import * as Yup from "yup";
import BasicLayout from "../layouts/BasicLayout";

export default {
  name: "Login",

  components: {
    BasicLayout,
  },

  setup(props) {
    let formData = ref({});
    let formError = ref({});
    let loading = ref(false);

    const schemaForm = Yup.object().shape({
      identifier: Yup.string().required(true), // Strapi requires the username like identifier
      password: Yup.string().required(true),
    });

    const login = async () => {
      formError.value = {};
      loading.value = true;

      try {
        await schemaForm.validate(formData.value, { abortEarly: false });
      } catch (error) {
        error.inner.forEach((err) => {
          formError.value[err.path] = err.message;
        });
      }

      loading.value = false;
    };

    return {
      formData,
      formError,
      loading,
      login,
    };
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
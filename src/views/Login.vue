<template>
  <BasicLayout>
    <div class="login">
      <h2>Sign in</h2>
      <form class="ui form" @submit.prevent="login">
        <div class="field">
          <input
            type="text"
            placeholder="username"
            v-model="formData.identifier"
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
      <p v-if="badCredentials" class="red">{{ badCredentials }}</p>
    </div>
  </BasicLayout>
</template>

<script>
import { ref, onMounted } from "vue";
import * as Yup from "yup";
import { useRouter } from "vue-router";
import BasicLayout from "../layouts/BasicLayout";
import { loginApi } from "../api/user";
import { setTokenApi, getTokenApi } from "../api/token";

export default {
  name: "Login",

  components: {
    BasicLayout,
  },

  setup(props) {
    let formData = ref({});
    let formError = ref({});
    let loading = ref(false);
    let badCredentials = ref("");
    const router = useRouter();
    const token = getTokenApi();

    onMounted(() => {
      if (token) return router.push("/");
    });

    const schemaForm = Yup.object().shape({
      identifier: Yup.string().required(true), // Strapi requires the username like identifier
      password: Yup.string().required(true),
    });

    const login = async () => {
      formError.value = {};
      loading.value = true;
      badCredentials.value = null;

      try {
        await schemaForm.validate(formData.value, { abortEarly: false });

        try {
          const response = await loginApi(formData.value);
          let errorMessage = "User or password are not valids";
          if (!response?.jwt) throw errorMessage;
          setTokenApi(response.jwt);
          router.push("/");
        } catch (error) {
          badCredentials.value = error;
        }
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
      badCredentials,
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
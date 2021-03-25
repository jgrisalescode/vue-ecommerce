<template>
  <BasicLayout>
    <h1>Sign in</h1>
    <router-link to="/register">Create account</router-link>
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
</style>
<template>
  <BasicLayout>
    <h1>Sign up</h1>
    <router-link to="/login">Sign in</router-link>
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
</style>
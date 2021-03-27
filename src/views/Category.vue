<template>
  <BasicLayout>
    <h1>We are in categories</h1>
  </BasicLayout>
</template>

<script>
import BasicLayout from "../layouts/BasicLayout";

export default {
  name: "Category",

  components: {
    BasicLayout,
  },

  // Which route am I?
  watch: {
    $route(to, from) {
      console.log(to);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
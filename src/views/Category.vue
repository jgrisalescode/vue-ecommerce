<template>
  <BasicLayout>
    <h1>We are in categories</h1>
  </BasicLayout>
</template>

<script>
import { onMounted } from "vue";
import BasicLayout from "../layouts/BasicLayout";
import { getProductsByCategory } from "../api/product";

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

  setup(props) {
    onMounted(async () => {
      const response = await getProductsByCategory("fo");
      console.log(response);
    });
  },
};
</script>

<style lang="scss" scoped>
</style>
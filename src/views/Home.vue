<template>
  <BasicLayout>
    <h2>We are at Home</h2>
  </BasicLayout>
</template>

<script>
// @ is an alias to /src
import { ref, onMounted } from "vue";
import BasicLayout from "../layouts/BasicLayout";
import { getProducts } from "../api/product";

export default {
  name: "Home",

  components: {
    BasicLayout,
  },

  setup(props) {
    let products = ref(null);

    onMounted(async () => {
      const response = await getProducts(20);
      products.value = response;
    });

    return {
      products,
    };
  },
};
</script>

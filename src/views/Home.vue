<template>
  <BasicLayout>
    <h1>Latest products</h1>
    <div class="ui grid">
      <div
        class="sixten wide mobile eight wide tablet four wide computer column"
        v-for="product in products"
        :key="product.id"
      >
        <Product :product="product" />
      </div>
    </div>
  </BasicLayout>
</template>

<script>
// @ is an alias to /src
import { ref, onMounted } from "vue";
import BasicLayout from "../layouts/BasicLayout";
import Product from "../components/Product";
import { getProducts } from "../api/product";

export default {
  name: "Home",

  components: {
    BasicLayout,
    Product,
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

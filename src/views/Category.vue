<template>
  <BasicLayout>
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
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import BasicLayout from "../layouts/BasicLayout";
import Product from "../components/Product";
import { getProductsByCategory } from "../api/product";

export default {
  name: "Category",

  components: {
    BasicLayout,
    Product,
  },

  // Which route am I? Stay alert if any route changes
  watch: {
    $route(to, from) {
      this.getProducts(to.params.category);
    },
  },

  setup(props) {
    const { params } = useRoute();
    let products = ref(null);

    onMounted(() => {
      getProducts(params.category);
    });

    const getProducts = async (category) => {
      const response = await getProductsByCategory(category);
      products.value = response;
    };

    return {
      getProducts,
      products,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
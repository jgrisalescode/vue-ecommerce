<template>
  <BasicLayout>
    <h1>Cart</h1>
    <table class="ui celled table" v-if="products">
      <thead>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.quantity }}</td>
          <td>{{ product.price }}</td>
          <td style="text-align: center">
            <i class="close icon"></i>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>Total</td>
          <td colspan="2">...</td>
        </tr>
      </tbody>
    </table>
    <button class="ui button primary fluid" v-if="products">Checkout</button>
    <h3 v-if="!products">There aren't products in the cart ☹</h3>
  </BasicLayout>
</template>

<script>
import { ref, onMounted } from "vue";
import BasicLayout from "../layouts/BasicLayout";
import { getProductsCartApi } from "../api/cart";
export default {
  name: "Cart",

  components: {
    BasicLayout,
  },

  setup(props) {
    let products = ref(null);

    onMounted(async () => {
      const response = await getProductsCartApi();
      products.value = response;
    });

    return {
      products,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
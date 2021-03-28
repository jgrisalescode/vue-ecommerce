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
            <i class="close icon" @click="deleteProductsCart(product.id)"></i>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>Total</td>
          <td colspan="2">{{ getTotal() }} €</td>
        </tr>
      </tbody>
    </table>
    <button
      class="ui button primary fluid"
      @click="createOrder"
      v-if="products"
    >
      Checkout
    </button>
    <h3 v-if="!products">There aren't products in the cart ☹</h3>
  </BasicLayout>
</template>

<script>
import { ref, onMounted, watchEffect } from "vue";
import { useRouter } from "vue-router";
import jwtDecode from "jwt-decode";
import BasicLayout from "../layouts/BasicLayout";
import {
  getProductsCartApi,
  deleteProductsCartApi,
  deleteCartApi,
} from "../api/cart";
import { createOrderApi } from "../api/order";
import { getTokenApi } from "../api/token";

export default {
  name: "Cart",

  components: {
    BasicLayout,
  },

  setup(props) {
    let products = ref(null);
    let reloadCart = ref(false);
    const router = useRouter();

    watchEffect(async () => {
      reloadCart.value;
      const response = await getProductsCartApi();
      products.value = response;
    });

    const getTotal = () => {
      let totalTemp = 0;
      products.value.forEach((product) => {
        totalTemp += product.price * product.quantity;
      });
      return totalTemp;
    };

    const deleteProductsCart = (id) => {
      deleteProductsCartApi(id);
      reloadCart.value = !reloadCart.value;
    };

    const createOrder = async () => {
      // getting the user id
      const token = getTokenApi();
      const { id } = jwtDecode(token);

      const data = {
        user: id,
        totalPayment: getTotal(),
        data: products.value,
      };

      try {
        const response = await createOrderApi(data);
        deleteCartApi();
        router.push("/orders");
      } catch (error) {
        console.log(error);
      }
    };

    return {
      products,
      getTotal,
      deleteProductsCart,
      createOrder,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
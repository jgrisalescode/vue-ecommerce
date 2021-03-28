<template>
  <BasicLayout>
    <h1>Orders</h1>
    <h3 v-if="!orders">There aren't orders 🙄</h3>
    <template v-if="orders">
      <div class="order" v-for="order in orders" :key="order.id">
        <div class="header">
          <span class="date">{{ formatDate(order.created_at) }}</span>
          <p>ID: {{ order.id }}</p>
          <p>Total: {{ order.totalPayment }} €</p>
        </div>
        <div class="products">
          <div class="product" v-for="product in order.data" :key="product.id">
            <img
              :src="API_URL + product.image.url"
              alt="product.name"
              class="ui image"
            />
            <p>{{ product.name }}</p>
            <p>{{ product.quantity }} x {{ product.price }} €</p>
          </div>
        </div>
      </div>
    </template>
  </BasicLayout>
</template>

<script>
import { ref, onMounted } from "vue";
import jwtDecode from "jwt-decode";
import moment from "moment";
import BasicLayout from "../layouts/BasicLayout";
import { getOrders } from "../api/order";
import { getTokenApi } from "../api/token";
import { API_URL } from "../utils/constants";

export default {
  name: "Orders",

  components: {
    BasicLayout,
  },

  setup(props) {
    let orders = ref(null);

    onMounted(async () => {
      const token = await getTokenApi();
      const { id } = jwtDecode(token);
      const response = await getOrders(id);
      orders.value = response;
    });

    const formatDate = (date) => {
      return moment(date).format("L [at] LT");
    };

    return {
      orders,
      formatDate,
      API_URL,
    };
  },
};
</script>

<style lang="scss" scoped>
.order {
  border: 1px solid black;
  margin-bottom: 20px;
  margin-top: 40px;

  .header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;

    p {
      margin: 0;
    }

    span {
      position: absolute;
      top: -20px;
      left: 0;
      font-size: 12px;
    }
  }

  .products {
    border-top: 1px solid black;

    .product {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px 30px;
      
      > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }

    .ui.image {
      width: 50px;
    }
  }
}
</style>
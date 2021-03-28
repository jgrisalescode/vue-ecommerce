<template>
  <BasicLayout>
    <h1>Orders</h1>
    {{ orders }}
  </BasicLayout>
</template>

<script>
import { ref, onMounted } from "vue";
import jwtDecode from "jwt-decode";
import BasicLayout from "../layouts/BasicLayout";
import { getOrders } from "../api/order";
import { getTokenApi } from "../api/token";

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

    return {
      orders,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
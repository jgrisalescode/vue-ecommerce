<template>
  <div class="ui secondary menu">
    <div class="ui container">
      <div class="left menu">
        <router-link class="item" to="/">
          <img
            src="../assets/images/logo.png"
            alt="Logo Ecommerce"
            class="ui small image"
          />
          <p>Categories...</p>
        </router-link>
      </div>
      <div class="right menu">
        <router-link class="item" to="/login" v-if="!token">
          Sign in
        </router-link>
        <template v-if="token">
          <router-link class="item" to="/orders">Orders</router-link>
          <span class="ui item cart">
            <i class="shopping cart icon"></i>
          </span>
          <span class="ui item logout">
            <i class="sign-out icon" @click="logout"></i>
          </span>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { getCategoriesApi } from "../api/category";
import { getTokenApi, deleteTokenApi } from "../api/token";
export default {
  name: "Menu",

  setup(props) {
    const token = getTokenApi();
    let categories = ref(null);

    onMounted(async () => {
      const response = await getCategoriesApi();
      categories.value = response;
    });

    const logout = () => {
      deleteTokenApi();
      // f5
      location.replace("/");
    };

    return {
      token,
      logout,
      categories,
    };
  },
};
</script>

<style lang="scss" scoped>
.ui.menu.secondary {
  background-color: #16202b;

  .item {
    color: white;
    &:hover {
      color: #1fa1f1;
    }
  }

  .menu.left {
    width: 50%;
    .ui.image {
      width: 40px;
    }
  }

  .menu.tight {
    width: 50%;
    justify-content: flex-end;

    .logout,
    .cart {
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
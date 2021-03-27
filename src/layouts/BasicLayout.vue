<template>
  <div class="basic-layout">
    <Menu />
    <div class="ui container">
      <slot></slot>
    </div>
  </div>
  <Cart />
</template>

<script>
import Menu from "../components/Menu";
import Cart from "../components/Cart/Cart";

export default {
  name: "BasicLayout",

  components: {
    Menu,
    Cart,
  },
};
</script>

<style lang="scss" scoped>
</style>
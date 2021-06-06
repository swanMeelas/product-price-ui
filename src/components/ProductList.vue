<template>
  <div>
    <h1>Product Price Calculator</h1>
    <ListProductPrices></ListProductPrices>
  </div>
</template>

<script>
import ListProductPrices from "./ListProductPrices";
export default {
  name: "ProductList",
  components: {
    ListProductPrices,
  },
};
</script>

<style scoped>
</style>
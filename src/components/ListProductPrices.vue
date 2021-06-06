<template>
  <div class="container">
    <h3>Product Details</h3>
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Description</th>
            <th>Carton Price</th>
            <th>Units</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" v-bind:key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.cartonPrice }}</td>
            <td>{{ product.units }}</td>
            <td>
              <button
                class="btn btn-warning"
                v-on:click="viewPriceClicked(product.id)"
              >
                View Price
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="message" class="alert alert-success" id="success-alert">
        <table class="table">
          <thead>
            <tr>
              <th>Units</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="price in prices" v-bind:key="price.id">
              <td>{{ price.id }}</td>
              <td>{{ price.price }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import ProductPriceDataService from "../service/ProductPriceDataService";
export default {
  name: "ProductPriceList",
  data() {
    return {
      products: [],
      message: false,
      prices: [],
    };
  },
  methods: {
    refreshProducts() {
      ProductPriceDataService.retrieveAllProducts() //HARDCODED
        .then((response) => {
          this.products = response.data;
          console.log(response.data);
        });
    },
    viewPriceClicked(id) {
      ProductPriceDataService.retrievePriceList(id).then((response) => {
        // this.message = `Delete of course ${id} Successful`;
        this.message = true;
        this.prices = response.data;
        this.refreshCourses();
        console.log(response.data);
      });
    },
  },
  created() {
    this.refreshProducts();
  },
};
</script>

<style>
</style>
<template>
  <div>
    <h3>Price Calculator</h3>
    <div class="container">
      <form @submit="calculatePrice">
        <fieldset class="form-group">
          <label>Products</label>
          <select v-model="price.id" class="form-control">
            <option
              v-for="product in products"
              v-bind:key="product.id"
              v-bind:value="product.id"
            >
              {{ product.name }}
            </option>
          </select>
        </fieldset>
        <fieldset class="form-group">
          <label>Quantity</label>
          <input type="text" class="form-control" v-model="price.quantity" />
        </fieldset>
        <button class="btn btn-success" type="submit">CalculatePrice</button>
      </form>
      <div v-if="submitted" class="alert alert-success" id="success-alert">
        <div v-if="total.isDiscounted" id="success-alert">
            Discount is Applied
        </div>
            Total Price : {{ total.totalPrice }}
        <div v-if="total.noOfCartons">
            No of Cartons : {{ total.noOfCartons }}
        </div>
        <div v-if="total.noOfUnits">No of Units : {{ total.noOfUnits }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductPriceDataService from "../service/ProductPriceDataService";
export default {
  name: "priceDetails",
  data() {
    return {
      products: [],
      price: {
        id: null,
        quantity: 0,
      },
      total: {
        totalPrice: 0.0,
        noOfCartons: 0,
        noOfUnits: 0,
        isDiscounted: false,
      },
      submitted: false,
    };
  },
  methods: {
    refreshProducts() {
      ProductPriceDataService.retrieveAllProducts().then((response) => {
        this.products = response.data;
        console.log(response.data);
      });
    },

    calculatePrice(e) {
      e.preventDefault();

      ProductPriceDataService.calculatePrice(this.price)
        .then((response) => {
          this.total = response.data;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
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
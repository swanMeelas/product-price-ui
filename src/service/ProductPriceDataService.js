import http from "../http-common";

class ProductPriceDataService {
  retrieveAllProducts() {
    return http.get();
  }
  retrievePriceList(id) {
    return http.get(`/price/${id}`);
  }

  calculatePrice(data) {
    return http.post("/price", data);
  }
}

export default new ProductPriceDataService();
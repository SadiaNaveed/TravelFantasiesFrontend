import GenericService from "./GenericService";
class PlaceService extends GenericService {
  constructor() {
    super();
  }
  // addProduct = (data) => this.post("products", data);
  //deleteProduct = (_id) => this.delete("products/" + _id);
  //updateProduct = (_id, data) => this.put("products/" + _id, data);
  getPlace = (page = 1, perPage = 10) =>
    this.get("places?page=" + page + "&perPage=" + perPage);
  // getSinglePlace = (id) => this.get("places/" + id);
}

let placeService = new PlaceService();
export default placeService;

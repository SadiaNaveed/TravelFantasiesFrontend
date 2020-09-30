import GenericService from "./GenericService";
class PlacesService extends GenericService {
  constructor() {
    super();
  }
  // addProduct = (data) => this.post("products", data);
  //deleteProduct = (_id) => this.delete("products/" + _id);
  //updateProduct = (_id, data) => this.put("products/" + _id, data);
  getPlace = (page = 1, perPage = 20) =>
    this.get("places?page=" + page + "&perPage=" + perPage).then();

  // getSinglePlace = (id) => this.get("places/" + id);
}

let placeService = new PlacesService();
export default placeService;

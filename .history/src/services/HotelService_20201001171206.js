import GenericService from "./GenericService";
class HotelsService extends GenericService {
  constructor() {
    super();
  }
  // addProduct = (data) => this.post("products", data);
  //deleteProduct = (_id) => this.delete("products/" + _id);
  //updateProduct = (_id, data) => this.put("products/" + _id, data);
  getHotels = (page = 1, perPage = 20) =>
    axios.get("hotels?page=" + page + "&perPage=" + perPage).then();

  // getSinglePlace = (id) => this.get("places/" + id);
}

let hotelService = new HotelsService();
export default hotelService;

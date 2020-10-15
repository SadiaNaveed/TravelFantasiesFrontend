import GenericService from "./GenericService";
class HotelsService extends GenericService {
  constructor() {
    super();
  }
  addHotel = (body, data) =>
    this.post("hotels", {
      body,
      data,
      headers: {
        ContentType: "multipart/form-data; ",
      },
    });
  //deleteProduct = (_id) => this.delete("products/" + _id);
  //updateProduct = (_id, data) => this.put("products/" + _id, data);
  getHotels = (page = 1, perPage = 20) =>
    this.get("hotels?page=" + page + "&perPage=" + perPage).then();

  // getSinglePlace = (id) => this.get("places/" + id);
}

let hotelService = new HotelsService();
export default hotelService;

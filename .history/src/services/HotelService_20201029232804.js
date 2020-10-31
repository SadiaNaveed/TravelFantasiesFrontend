import GenericService from "./GenericService";
class HotelsService extends GenericService {
  constructor() {
    super();
  }
  addHotel = (body) =>
    this.post("hotels", body 
      , {
      headers: {
        "Content-Type": "form-data ",
      },}

    );
 
 
  
  //deleteProduct = (_id) => this.delete("products/" + _id);
  //updateProduct = (_id, data) => this.put("products/" + _id, data);
  getHotels = (page = 1, perPage = 20) =>
    this.get("hotels?page=" + page + "&perPage=" + perPage).then();

   getSingleHotel = (id) => this.get("hotels/" + id);
}

let hotelService = new HotelsService();
export default hotelService;

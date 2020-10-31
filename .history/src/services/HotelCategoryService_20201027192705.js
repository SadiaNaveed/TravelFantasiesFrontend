import GenericService from "./GenericService";

class HotelCategoryService extends GenericService {
  constructor() {
    super();
  }

    addHotelCategory = (body) =>
    this.post("hotelCategory", body 
      , {
      headers: {
        "Content-Type": "form-data",
      },}

    );  
  //deleteProduct = (_id) => this.delete("products/" + _id);
  //updateProduct = (_id, data) => this.put("products/" + _id, data);
  getHotelCategory = (page = 1, perPage = 20) =>
    this.get("hotelCategory?page=" + page + "&perPage=" + perPage).then();

   getSingleHotelCategory = (id) => this.get("hotelCategory/" + id);
}

let hotelCategoryService = new HotelCategoryService();
export default hotelCategoryService;

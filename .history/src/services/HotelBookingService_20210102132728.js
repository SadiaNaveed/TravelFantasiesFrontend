import GenericService from "./GenericService";
class HotelsService extends GenericService {
  constructor() {
    super();
  }
  addHotelBooking = (body) =>
    this.post("hotelBookings", body, {
      headers: {
        "Content-Type": "form-data ",
      },
    });

  deleteHotelBooking = (_id) => this.delete("hotelBookings/" + _id);
  //updateProduct = (_id, data) => this.put("products/" + _id, data);
  getHotelBooking = (page = 1, perPage = 20) =>
    this.get("hotelBookings?page=" + page + "&perPage=" + perPage).then();

  getSingleHotelBooking = (id) => this.get("hotelBookings/" + id);
}

let hotelService = new HotelsService();
export default hotelService;

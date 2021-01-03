import GenericService from "./GenericService";
class hotelBookingService extends GenericService {
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
  getHotelBookings = (page = 1, perPage = 20) =>
    this.get("hotelBookings?page=" + page + "&perPage=" + perPage).then();

  getSingleHotelBooking = (id) => this.get("hotelBookings/" + id);
}

let HotelBookingService = new hotelBookingService();
export default HotelBookingService;

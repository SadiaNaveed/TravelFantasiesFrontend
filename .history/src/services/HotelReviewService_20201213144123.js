import GenericService from "./GenericService";
class HotelReviewService extends GenericService {
  constructor() {
    super();
  }
  addReview = (body) =>
    this.post("hotelReview", body, {
      headers: {
        "Content-Type": "form-data",
      },
    });
  deleteReview = (_id) => this.delete("hotelReview/" + _id);
  //updateProduct = (_id, data) => this.put("products/" + _id, data);
  getRooms = (page = 1, perPage = 20) =>
    this.get("hotelReview?page=" + page + "&perPage=" + perPage).then();
  getHotelRoom = (id) => this.get("hotelReview/Review/" + id);
  getSingleRoom = (id) => this.get("hotelReview/" + id);
}

let HotelReviewService = new HotelReviewService();
export default HotelReviewService;

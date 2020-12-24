import GenericService from "./GenericService";
class HotelReview extends GenericService {
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
  getReviews = (page = 1, perPage = 20) =>
    this.get("hotelReview?page=" + page + "&perPage=" + perPage).then();
  getHotelReview = (id) => this.get("hotelReview/Review/" + id);
  getHotelRatings = (id) => this.get("hotelReview/" + id);
}

let HotelReviewService = new HotelReview();
export default HotelReviewService;

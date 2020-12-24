import GenericService from "./GenericService";
class TourReview extends GenericService {
  constructor() {
    super();
  }
  addReview = (body) =>
    this.post("tourReview", body, {
      headers: {
        "Content-Type": "form-data",
      },
    });
  deleteReview = (_id) => this.delete("tourReview/" + _id);
  //updateProduct = (_id, data) => this.put("products/" + _id, data);
  getReviews = (page = 1, perPage = 20) =>
    this.get("tourReview?page=" + page + "&perPage=" + perPage).then();
  getTourReview = (id) => this.get("tourReview/Review/" + id);
  getSingleReview = (id) => this.get("tourReview/" + id);
}

let TourReviewService = new TourReview();
export default TourReviewService;

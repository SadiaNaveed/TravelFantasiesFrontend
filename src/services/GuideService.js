import GenericService from "./GenericService";
class GuideService extends GenericService {
  constructor() {
    super();
  }
  addGuide = (body) => {
    return this.post("/guide", body, {
      headers: {
        "Content-Type": "form-data ",
      },
    });
  };

  deleteGuide = (_id) => this.delete("guide/" + _id);
  //updateProduct = (_id, data) => this.put("products/" + _id, data);
  getGuide = (page = 1, perPage = 20) =>
    this.get("guide?page=" + page + "&perPage=" + perPage).then();

  getSingleGuide = (id) => this.get("guide/" + id);
}

let guideService = new GuideService();
export default guideService;

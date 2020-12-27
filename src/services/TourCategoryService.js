import GenericService from "./GenericService";

class TourCategoryService extends GenericService {
  constructor() {
    super();
  }

    addTourCategory = (body) =>
    this.post("tourCategory", body 
      , {
      headers: {
        "Content-Type": "form-data",
      },}

    );  
  //deleteProduct = (_id) => this.delete("products/" + _id);
  //updateProduct = (_id, data) => this.put("products/" + _id, data);
  getTourCategory = (page = 1, perPage = 20) =>
    this.get("tourCategory?page=" + page + "&perPage=" + perPage).then();

   getSingleTourCategory = (id) => this.get("tourCategory/" + id);
}

let tourCategoryService = new TourCategoryService();
export default tourCategoryService;
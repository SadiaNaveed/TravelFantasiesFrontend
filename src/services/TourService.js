import GenericService from "./GenericService";
class ToursService extends GenericService {
  constructor() {
    super();
  }
  addTour = (body) =>
    this.post("tours", body 
      , {
      headers: {
        "Content-Type": "form-data ",
      },}

    );
 
 
  
  deleteTour = (_id) => this.delete("tours/" + _id);
  //updateProduct = (_id, data) => this.put("products/" + _id, data);
  getTours = (page = 1, perPage = 20) =>
    this.get("tours?page=" + page + "&perPage=" + perPage).then();

   getSingleTour = (id) => this.get("tours/" + id);
}

let tourService = new ToursService();
export default tourService;

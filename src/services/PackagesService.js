import GenericService from "./GenericService";
class PackagesService extends GenericService {
  constructor() {
    super();
  }
  addPackages = (body) =>
    this.post("packages", body 
      , {
      headers: {
        "Content-Type": "form-data ",
      },}

    );
 
 
  
  deletePackages = (_id) => this.delete("packages/" + _id);
  //updateProduct = (_id, data) => this.put("products/" + _id, data);
  getPackages = (page = 1, perPage = 20) =>
    this.get("packages?page=" + page + "&perPage=" + perPage).then();

   getSinglePackages = (id) => this.get("packages/" + id);
}

let packagesService = new PackagesService();
export default packagesService;

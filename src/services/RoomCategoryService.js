import { Category } from "@material-ui/icons";
import GenericService from "./GenericService";

class RoomCategoryService extends GenericService {
  constructor() {
    super();
  }

    addRoomCategory = (body) =>
    this.post("roomCategory", body 
      , {
      headers: {
        "Content-Type": "form-data",
      },}

    );  
  //deleteProduct = (_id) => this.delete("products/" + _id);
  //updateProduct = (_id, data) => this.put("products/" + _id, data);
  getRoomCategory = (page = 1, perPage = 20) =>
    this.get("roomCategory?page=" + page + "&perPage=" + perPage).then();
  // getSpecificRoomCategory = (Category) => this.get("roomCategory/category/" + Category);
   getSingleRoomCategory = (id) => this.get("roomCategory/" + id);
}

let roomCategoryService = new RoomCategoryService();
export default roomCategoryService;

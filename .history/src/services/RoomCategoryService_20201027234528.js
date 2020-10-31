import GenericService from "./GenericService";

class RoomCategoryService extends GenericService {
  constructor() {
    super();
  }

    addRoomCategory = (body) =>
    this.post("RoomCategory", body 
      , {
      headers: {
        "Content-Type": "form-data",
      },}

    );  
  //deleteProduct = (_id) => this.delete("products/" + _id);
  //updateProduct = (_id, data) => this.put("products/" + _id, data);
  getRoomCategory = (page = 1, perPage = 20) =>
    this.get("RoomCategory?page=" + page + "&perPage=" + perPage).then();

   getSingleRoomCategory = (id) => this.get("RoomCategory/" + id);
}

let RoomCategoryService = new RoomCategoryService();
export default RoomCategoryService;

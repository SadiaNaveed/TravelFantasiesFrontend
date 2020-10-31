import GenericService from "./GenericService";
class RoomsService extends GenericService {
  constructor() {
    super();
  }
  addRoom = (body) =>(
    console.log("request")
    this.post("rooms", body 
      , {
      headers: {
        "Content-Type": "form-data; ",
      },}

    );
 
 
  
  //deleteProduct = (_id) => this.delete("products/" + _id);
  //updateProduct = (_id, data) => this.put("products/" + _id, data);
  getRooms = (page = 1, perPage = 20) =>
    this.get("rooms?page=" + page + "&perPage=" + perPage).then();

   getSingleRoom = (id) => this.get("rooms/" + id);
}

let roomService = new RoomsService();
export default roomService;

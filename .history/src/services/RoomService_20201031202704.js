import GenericService from "./GenericService";
class RoomsService extends GenericService {
  constructor() {
    super();
  }
  addRoom = (body) =>
    this.post("rooms", body 
      , {
      headers: {
        "Content-Type": "form-data",
      },}

    );
  deleteRoom = (_id) => this.delete("rooms/" + _id);
  //updateProduct = (_id, data) => this.put("products/" + _id, data);
  getRooms = (page = 1, perPage = 20) =>
    this.get("rooms?page=" + page + "&perPage=" + perPage).then();
  getHotelRoom = (id) => this.get("rooms/hotel/" + id);
   getSingleRoom = (id) => this.get("rooms/" + id);
}

let roomService = new RoomsService();
export default roomService;

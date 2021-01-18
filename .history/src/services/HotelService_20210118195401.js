import GenericService from "./GenericService";
class HotelsService extends GenericService {
  constructor() {
    super();
  }
  addHotel = (body) =>
    this.post("hotels", body, {
      headers: {
        "Content-Type": "form-data",
      },
    });

  deleteHotel = (_id) => this.delete("hotels/" + _id);
  updateHotel = (id, data) =>
    this.put(
      "hotels/" + id,
      data,
      (headers: {
        "Content-Type": "form-data",
      })
    );
  getHotels = (page = 1, perPage = 20) =>
    this.get("hotels?page=" + page + "&perPage=" + perPage).then();

  getSingleHotel = (id) => this.get("hotels/" + id);
}

let hotelService = new HotelsService();
export default hotelService;

import GenericService from "./GenericService";
class PlacesService extends GenericService {
  constructor() {
    super();
  }
  addPlace = (body) =>
  this.post("places", body 
    , {
    headers: {
      "Content-Type": "form-data ",
    },}

  );



deletePlace = (_id) => this.delete("places/" + _id);
getPlace = (page = 1, perPage = 20) =>
  this.get("places?page=" + page + "&perPage=" + perPage).then();

 getSinglePlace = (id) => this.get("places/" + id);
}

let placeService = new PlacesService();
export default placeService;

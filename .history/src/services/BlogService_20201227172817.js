import GenericService from "./GenericService";
class BlogService extends GenericService {
  constructor() {
    super();
  }
  addBlog = (body) =>
    this.post("Blog", body 
      , {
      headers: {
        "Content-Type": "form-data ",
      },}

    );
 
 
  
  deleteBlog = (_id) => this.delete("Blog/" + _id);
  //updateProduct = (_id, data) => this.put("products/" + _id, data);
  getBlog = (page = 1, perPage = 20) =>
    this.get("Blog?page=" + page + "&perPage=" + perPage).then();

   getSingleBlog = (id) => this.get("Blog/" + id);
}

let blogService = new BlogService();
export default blogService;

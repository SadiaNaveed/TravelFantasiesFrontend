import GenericService from "./GenericService";

class BlogCategoryService extends GenericService {
  constructor() {
    super();
  }

    addBlogCategory = (body) =>
    this.post("BlogCategory", body 
      , {
      headers: {
        "Content-Type": "form-data",
      },}

    );  
  //deleteProduct = (_id) => this.delete("products/" + _id);
  //updateProduct = (_id, data) => this.put("products/" + _id, data);
  getBlogCategory = (page = 1, perPage = 20) =>
    this.get("BlogCategory?page=" + page + "&perPage=" + perPage).then();

   getSingleBlogCategory = (id) => this.get("BlogCategory/" + id);
}

let blogCategoryService = new BlogCategoryService();
export default blogCategoryService;

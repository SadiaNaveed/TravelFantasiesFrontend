{
  userService.isAdmin() && (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={(e) => {
          console.log("navigate to update");
          history.push("/products/update/" + product._id);
        }}
      >
        Edit
      </Button>{" "}
      <Button
        variant="contained"
        color="secondary"
        onClick={(e) => {
          productService
            .deleteProduct(product._id)
            .then((data) => {
              console.log(data);
              onDelete();
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        Delete
      </Button>
    </>
  );
}

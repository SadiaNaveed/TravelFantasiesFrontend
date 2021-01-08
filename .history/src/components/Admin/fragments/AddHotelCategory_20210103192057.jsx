import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";
import hotelService from "../../../services/HotelService";
import ImageUploader from "react-images-upload";
import hotelCategoryService from "../../../services/HotelCategoryService";

const useStyles = makeStyles((theme) => ({
  name: {
    fontSize: 130,
    backgroundColor: "white",
  },
}));

class AddHotelCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CategoryName: "",
      Description: "",
    };
    this.handleCategoryNameChange = this.handleCategoryNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleCategoryNameChange(event) {
    this.setState({ CategoryName: event.target.value });
  }
  handleDescriptionChange(event) {
    this.setState({ Description: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("CategoryName", this.state.CategoryName);
    formData.append("Description", this.state.Description);
    console.log(formData.CategoryName);
    console.log(formData.Description);
    console.log(this.state);
    const data = this.state;
    console.log(data);
    hotelCategoryService
      .addHotelCategory(data)
      .then((response) => {
        alert(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      // <div style={{ marginTop: "100px", marginLeft:"300px", marginBottom:"100px"}}>
      //   <h1 style={{ position: "relative",marginLeft:"200px", fontSize: 50 }}>
      //     Add Hotel Category
      //   </h1>
      <div style={{ marginTop: "100px", marginLeft: "240px" }}>
        <Col sm="12">
          <Card>
            <CardHeader>Please Fill Out The Form to Add Hotel</CardHeader>
            <CardBody>
              <Form>
                <CardTitle tag="h3">Details About Hotel</CardTitle>
                <Row form>
                  <Col md={6} sm={12} lg={6}>
                    <FormGroup>
                      <Label for="Place">Hotel Category Name</Label>
                      <Input
                        type="text"
                        name="CategoryName"
                        id="exampleDate"
                        placeholder="Hotel Category Name"
                        value={this.state.CategoryName}
                        onChange={this.handleCategoryNameChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={6} sm={12} lg={6}>
                    <FormGroup>
                      <Label for="Place">Description</Label>
                      <Input
                        type="text"
                        name="Description"
                        id="exampleDate"
                        placeholder="Description"
                        value={this.state.Description}
                        onChange={this.handleDescriptionChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Button
                  style={{
                    marginTop: 30,
                    alignSelf: "center",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                  type="submit"
                  onClick={this.handleSubmit}
                >
                  Add Hotel
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </div>
    );
  }
}

export default AddHotelCategory;

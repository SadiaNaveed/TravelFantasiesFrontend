import React from "react";
import { Component } from "react";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Img: "",
      address: " ",
      hotels: [],
      compare: [],
      floors: [],
      value: "",
      inputValue: "",
      searchField: "",
      searchTerm: "",
      results: [],
      val: "",
      searchClicked: false,
    };
  }

  render() {
    return (
      <input
        type="search"
        className="search"
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    );
  }
}
export default SearchBox;

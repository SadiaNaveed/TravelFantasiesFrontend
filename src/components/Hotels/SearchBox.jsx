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
      <div style={{ float: "right" }}>
        <input
          type="search"
          className="search"
          placeholder={this.props.placeholder}
          onChange={(e) => {
            this.setState({ searchField: e.target.value });
          }}
          onKeyDown={this.props.onSearchClicked}
        />
      </div>
    );
  }
}
export default SearchBox;

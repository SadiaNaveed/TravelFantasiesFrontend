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
    this.handleCommentEdit = this.handleCommentEdit.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onCompareClick = this.onCompareClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    // this.keyPress = this.keyPress.bind(this);
    // this.onSearch = this.onSearch.bind(this);
    // this.updateHotels = this.updateHotels.bind(this);
    // this.renderMovieTitle = this.renderMovieTitle.bind(this);
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

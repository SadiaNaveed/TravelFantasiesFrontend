import React from "react";
import { Component } from "react";

class SearchBox extends Component {
  constructor(props) {
    super(props);
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

import React, { Component } from "react";
import starFull from "../../Asserts/star_full.png";
import starHalf from "../../Asserts/star_half.png";
import starEmpty from "../../Asserts/star_empty";

function StarReview({ rate }) {
  var starComponents = [];
  var fullStar = Math.floor(rate);
  var noStar = Math.floor(5 - rate);
  var halfStar = 5 - fullStar - noStar;

  // Full Star
  for (var i = 0; i < fullStar; i++) {
    starComponents.push(
      <img
        key={`full-${i}`}
        source={starFull}
        resizeMode="cover"
        style={{
          width: 20,
          height: 20,
        }}
      />
    );
  }

  // Half Star
  for (var i = 0; i < halfStar; i++) {
    starComponents.push(
      <Image
        key={`half-${i}`}
        source={starHalf}
        resizeMode="cover"
        style={{
          width: 20,
          height: 20,
        }}
      />
    );
  }

  // No Star
  for (var i = 0; i < noStar; i++) {
    starComponents.push(
      <Image
        key={`empty-${i}`}
        source={starEmpty}
        resizeMode="cover"
        style={{
          width: 20,
          height: 20,
        }}
      />
    );
  }
}
export default StarReview;

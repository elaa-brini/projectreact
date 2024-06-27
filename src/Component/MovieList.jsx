




import React, { useState } from "react";
import Card from "./Card";

const MovieList = ({ search,movies,genre }) => {

  return (
    <div className="list">
      {genre==="all"?movies
        .filter((el) => el.name.toLowerCase().includes(search.toLowerCase()) )
        .map((el) => (
          <Card el={el} />
        )):movies
        .filter((el) => el.genre==genre )
        .map((el) => (
          <Card el={el} />
        ))}
    </div>
  );
};

export default MovieList;

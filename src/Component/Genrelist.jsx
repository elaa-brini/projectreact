import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import "./Genrelist.css"
const genres = [
  { id: 1, name: 'All' },
  { id: 1, name: 'Action' },
  { id: 2, name: 'Comedy' },
  { id: 3, name: 'Drama' },
  { id: 4, name: 'Fantasy' },
  { id: 5, name: 'Horror' },
  { id: 6, name: 'Mystery' },
  { id: 7, name: 'Romance' },
  { id: 8, name: 'Thriller' },
  { id: 8, name: 'Rom-com' },

];

const GenreList = ({setgenre}) => {

  return (
    <div className="genre-list">
      <ul>
        <li onClick={()=>setgenre("all")}>All</li>
        <li onClick={()=>setgenre("action")}>Action</li>
        <li onClick={()=>setgenre("comedy")}>Comedy</li>
        <li onClick={()=>setgenre("drama")}>Drama</li>
        <li onClick={()=>setgenre("fantasy")}>Fantasy</li>
        <li onClick={()=>setgenre("horror")}>Horror</li>
        <li onClick={()=>setgenre("mystery")}>Mystery</li>
        <li onClick={()=>setgenre("romance")}>Romance</li>
        <li onClick={()=>setgenre("thriller")}>Thriller</li>
        <li onClick={()=>setgenre("rom-com")}>Rom-com</li>
      </ul>
    </div>
  );
};

export default GenreList;
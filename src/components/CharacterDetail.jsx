import React from "react";

import axios from "axios";

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import Character from "./Character";

const CharacterDetail = (props) => {
  const [characters, setCharacters] = useState([]);
  let { id } = useParams();

  return (
    <div>
      <div
        id="lista"
        class="grid gap-2 bg-gray-600 grid-cols-5 p-2 text-white m-auto justify-between"
      >
        <span>{id}</span>
      </div>
    </div>
  );
};

export default CharacterDetail;

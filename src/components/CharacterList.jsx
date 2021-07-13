import React from "react";

import axios from "axios";

import { useEffect, useState } from "react";

import Character from "./Character";

const CharacterList = (props) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then((res) => {
      setCharacters(res.data.results);
    });
  }, []);

  return (
    <ul
      id="lista"
      class="grid gap-2 grid-cols-5 p-2 text-white m-auto bg-gray-600 justify-between"
    >
      {characters.map((character, idx, arr) => (
        <Character
          id={character.id}
          image={character.image}
          name={character.name}
        />
      ))}
    </ul>
  );
};

export default CharacterList;

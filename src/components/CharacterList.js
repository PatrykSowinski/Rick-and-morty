import React from "react";

import axios from "axios";

import { useEffect, useState } from "react";

import Character from "./Character"

const CharacterList = (props) => {
  const [characters, setCharacters] = useState([]);
  const [first10, setFirst10] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => {setCharacters(res.data.results)});

      axios
      .get(`https://rickandmortyapi.com/api/character`)
      .then((res) => {
        // console.log(res.data[1].name);
        setFirst10(res.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <ul>
    {characters.map((character, idx, arr) => (
      <Character id={character.id} image={character.image}>
        {character.name}
        <button> BTYN</button>
      </Character>
    ))}

    {first10.map((character, idx, arr) => (
      <Character id={character.id} image={character.image}>
        {character.name}
        <button>drugie</button>
      </Character>
    ))}
​
    
  </ul>
  );
};

export default CharacterList;

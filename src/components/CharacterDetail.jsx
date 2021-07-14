import React from "react";

import axios from "axios";

import { useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";

import CharacterDR from "./CharacterDR";

const CharacterDetail = () => {
  const [character, setCharacter] = useState(undefined);
  let { id } = useParams();

  let url = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCharacter(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);
  if (!character) {
    return <span>Loading...</span>;
  }

  return (
    <div
      id="lista"
      class="flex flex-col bg-gray-600 p-2 text-white justify-center items-center"
    >
      <nav class="">
        <Link to="/characters">
          <span class="inline-block bg-gray-600 transition duration-1000 delay-50 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded mb-3 shadow-2xl ease-in-out">
            &#8592; GO BACK TO CHARACTER LIST
          </span>
        </Link>
      </nav>
      <CharacterDR
        id={character.id}
        image={character.image}
        name={character.name}
        status={character.status}
        species={character.species}
        location={character.location.name}
        origin={character.origin.name}
      />
    </div>
  );
};

export default CharacterDetail;

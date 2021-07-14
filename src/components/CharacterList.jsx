import React from "react";

import axios from "axios";

import { useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";

import Character from "./Character";

const CharacterList = (props) => {
  const [characters, setCharacters] = useState([]);
  const [pages, setPages] = useState();
  const [searchText, setSearchText] = useState();
  const [allChars, setAllChars] = useState();
  const list = [];
  let { page } = useParams();

  const handleClick = () => {
    if (searchText === "") {
      setCharacters(allChars);
    }
    if (searchText !== "") {
      setCharacters(
        characters.filter((character) => {
          return character.name === searchText;
        })
      );
    }
  };

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((res) => {
        setCharacters(res.data.results);
        setPages(res.data.info.pages);
        setAllChars(res.data.results);
      });
  }, [page]);

  for (let i = 1; i <= pages; i++) {
    if (i === parseInt(page)) {
      list.push(
        <span class="inline-block bg-gray-500 w-18 text-white font-bold py-4 px-6 rounded shadow-2xl">
          {i}
        </span>
      );
    } else {
      list.push(
        <Link to={`/characters/page/${i}`}>
          <span class="inline-block bg-gray-600 w-18 flex-grow transition duration-1000 delay-50 hover:bg-gray-500 text-white font-bold py-4 px-6 rounded shadow-2xl ease-in-out">
            {i}
          </span>
        </Link>
      );
    }
  }

  return (
    <div class="h-full w-full">
      <div class="flex p-3 flex-wrap bg-gray-600 text-white justify-center">
        <div class="p-8">
          <div class="bg-white flex items-center rounded-full shadow-xl">
            <input
              class="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
              id="search"
              type="text"
              placeholder="Search"
              onChange={handleChange}
            ></input>

            <div class="p-4">
              <button
                class="bg-gray-600 text-white rounded-full p-2 hover:bg-gray-500 focus:outline-none w-12 h-12 flex items-center justify-center"
                onClick={handleClick}
              >
                &#128269;
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        id="lista"
        class="grid gap-2 bg-gray-600 grid-cols-5 p-2 text-white m-auto justify-between"
      >
        {characters.map((character, idx, arr) => (
          <Link to={`/characters/${character.id}`}>
            <Character
              id={character.id}
              image={character.image}
              name={character.name}
              status={character.status}
            />
          </Link>
        ))}
      </div>
      <div class="flex p-3 flex-wrap bg-gray-600 text-white justify-center">
        {list}
      </div>
    </div>
  );
};

export default CharacterList;

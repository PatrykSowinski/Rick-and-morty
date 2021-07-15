import React from "react";

import axios from "axios";

import { useEffect, useState } from "react";

import { useParams, Link, useHistory } from "react-router-dom";

import Character from "./Character";

const CharacterList = (props) => {
  const [characters, setCharacters] = useState([]);
  const [pages, setPages] = useState();
  const [searchText, setSearchText] = useState("");
  let history = useHistory();
  const [timer, setTimer] = useState();
  const list = [];

  let { page } = useParams();

  const handleChange = (event) => {
    timer && clearTimeout(timer);
    let newTimer = setTimeout(() => {
      setSearchText(event.target.value);
      history.push("/characters/page/1");
    }, 500);
    setTimer(newTimer);
  };

  useEffect(() => {
    axios
      .get(
        `https://rickandmortyapi.com/api/character?page=${page}&name=${searchText}`
      )
      .then((res) => {
        setCharacters(res.data.results);
        setPages(res.data.info.pages);
      });
  }, [page, searchText]);

  for (let i = 1; i <= pages; i++) {
    if (i === parseInt(page)) {
      list.push(
        <span className="inline-block bg-gray-500 w-18 text-white font-bold py-4 px-6 rounded shadow-2xl">
          {i}
        </span>
      );
    } else {
      list.push(
        <Link to={`/characters/page/${i}`}>
          <span className="inline-block bg-gray-600 w-18 flex-grow transition duration-1000 delay-50 hover:bg-gray-500 text-white font-bold py-4 px-6 rounded shadow-2xl ease-in-out">
            {i}
          </span>
        </Link>
      );
    }
  }

  return (
    <div className="h-full w-full">
      <div className="flex p-3 flex-wrap bg-gray-600 text-white justify-center">
        <div className="p-8">
          <div className="bg-white flex items-center rounded-full shadow-xl focus:outline-none">
            <input
              className="rounded-l-full w-full py-6 px-10 text-gray-700 leading-tight focus:outline-none"
              id="search"
              type="text"
              placeholder="Search by name &#x1F50D;"
              onChange={handleChange}
            ></input>

            <div className="p-4"></div>
          </div>
        </div>
      </div>
      <div
        id="lista"
        className="grid gap-2 bg-gray-600 grid-cols-5 p-2 text-white m-auto justify-between"
      >
        {characters
          .filter(
            (character) =>
              character?.name.toUpperCase().includes(searchText.toUpperCase())
            // console.log(character.name)
          )
          .map((character, idx, arr) => (
            <Link to={`/characters/${character.id}/?page=${page}`}>
              <Character
                id={character.id}
                image={character.image}
                name={character.name}
                status={character.status}
              />
            </Link>
          ))}
      </div>
      <div className="flex p-3 flex-wrap bg-gray-600 text-white justify-center">
        {list}
      </div>
    </div>
  );
};

export default CharacterList;

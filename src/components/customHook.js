import { useState, useEffect } from "react";
import axios from "axios";

const useRickAndMortyAPI = (page, searchText, charGender, charStatus) => {
  const [data, setData] = useState([]);
  const [pages, setPages] = useState();
  useEffect(() => {
    axios
      .get(
        `https://rickandmortyapi.com/api/character?page=${page}&name=${searchText}&gender=${charGender}&status=${charStatus}`
      )
      .then((res) => {
        setData(res.data.results);
        setPages(res.data.info.pages);
      });
  }, [page, searchText, charGender, charStatus]);
  return [data, pages];
};

export default useRickAndMortyAPI;

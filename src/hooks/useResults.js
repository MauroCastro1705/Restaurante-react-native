import { useEffect, useState } from "react";
import yelp from "../api/yelp";

//se crea es hook para
//aligerar el codigo en
//SearchScreen.js
//se exportan estas funciones

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "Buenos Aires",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      //agarra el error
      setErrorMessage("Algo salio mal pá");
    }
  };

  useEffect(() => {
    //permite ejecutar la funcion una sola vez
    searchApi("pasta");
  }, []);

  return [searchApi, results, errorMessage];
};

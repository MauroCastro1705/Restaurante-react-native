import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../componentes/searchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      //agarra el error
      setErrorMessage("Algo salio mal pá");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return (
    <View style={estilos.fondo}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text style={estilos.error}>{errorMessage}</Text> : null}
      <Text>Search Screen</Text>
      <Text> se encontraron {results.length} resultados</Text>
    </View>
  );
};

const estilos = StyleSheet.create({
  fondo: {
    backgroundColor: "white",
    height: 800,
  },
  error: {
    color: "red",
    fontSize: 15,
  },
});

export default SearchScreen;

import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../componentes/searchBar";
import useResults from "../hooks/useResults";
import ResulstList from "../componentes/resultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    //price === '$'
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={estilos.fondo}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text style={estilos.error}>{errorMessage}</Text> : null}
      <Text>se encontraron {results.length} resultados</Text>
      <ResulstList results={filterResultsByPrice("$")} title="Baratito" />
      <ResulstList results={filterResultsByPrice("$$")} title="Moderado" />
      <ResulstList results={filterResultsByPrice("$$$")} title="Picantes" />
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

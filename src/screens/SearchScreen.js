import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
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
      <Text style={estilos.resultados}>
        se encontraron {results.length} resultados
      </Text>
      <ScrollView>
        <ResulstList results={filterResultsByPrice("$")} title="Baratito" />
        <ResulstList results={filterResultsByPrice("$$")} title="Moderado" />
        <ResulstList results={filterResultsByPrice("$$$")} title="Picantes" />
      </ScrollView>
    </View>
  );
};

const estilos = StyleSheet.create({
  fondo: {
    backgroundColor: "white",
    flex: 1,
  },
  resultados: {
    alignSelf: "center",
    marginVertical: 5,
  },
  error: {
    color: "red",
    fontSize: 15,
  },
});

export default SearchScreen;

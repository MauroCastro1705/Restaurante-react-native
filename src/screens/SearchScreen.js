import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../componentes/searchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");

  return (
    <View style={estilos.fondo}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => console.log("term submited")}
      />
    </View>
  );
};

const estilos = StyleSheet.create({
  fondo: {
    backgroundColor: "white",
    height: 800,
  },
});

export default SearchScreen;

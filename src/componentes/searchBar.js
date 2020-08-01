import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={estilos.fondo}>
      <Feather name="search" style={estilos.icono} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={estilos.inputStyle}
        placeholder="Buscar"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const estilos = StyleSheet.create({
  fondo: {
    backgroundColor: "#F0EEEE", //#F0EEEE
    marginTop: 15,
    height: 40,
    borderRadius: 5,
    marginHorizontal: 10,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  icono: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;

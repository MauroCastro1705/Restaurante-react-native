import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultDetail from "./ResultsDetail";

const ResultsList = ({ title, results }) => {
  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ResultDetail result={item} />;
        }}
      />
    </View>
  );
};

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 15,
    marginBottom: 5,
  },
  contenedor: {
    marginBottom: 10,
  },
});

export default ResultsList;

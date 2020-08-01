import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultDetail from "./ResultsDetail";

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={estilos.titulo}>{title}</Text>
      <FlatList
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
  },
});

export default ResultsList;

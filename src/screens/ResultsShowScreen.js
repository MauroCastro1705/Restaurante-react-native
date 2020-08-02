import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id"); //traemos id del restaurante

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View style={estilos.fondo}>
      <Text style={estilos.titulo}> {result.name} </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={estilos.imagenes} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const estilos = StyleSheet.create({
  imagenes: {
    height: 300,
    width: 300,
    borderRadius: 5,
    marginLeft: 10,
  },
  fondo: {
    backgroundColor: "#fff4e3",
    flex: 1,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    marginLeft: 15,
  },
});

export default ResultsShowScreen;

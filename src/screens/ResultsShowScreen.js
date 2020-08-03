import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, FlatList, Linking } from "react-native";
import yelp from "../api/yelp";
import { FontAwesome } from "@expo/vector-icons";

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
      <View style={estilos.fondoInfo}>
        <Text style={estilos.precio}>{result.price}</Text>
        <View style={estilos.reviewFondo}>
          <Text style={estilos.review}>{result.rating}</Text>
          <FontAwesome
            name="star"
            size={20}
            color="black"
            style={{ marginLeft: 5, marginTop: 1.5 }}
          />
          <Text style={estilos.review}> {result.review_count} Reseñas</Text>
        </View>

        <View
          style={{
            borderBottomColor: "lightgray",
            borderBottomWidth: 1,
            marginBottom: 5,
          }}
        />
        <Text style={estilos.ubicacion}>Ubicacion</Text>
        <Text style={estilos.ubicacionChild}>{result.location.address1}</Text>
        <Text style={estilos.ubicacionChild}>{result.location.city}</Text>
        <View
          style={{
            borderBottomColor: "lightgray",
            borderBottomWidth: 1,
            marginBottom: 5,
            marginTop: 5,
          }}
        />
        <Text style={estilos.ubicacion}>Comunicate al:</Text>
        <Text
          style={estilos.numero}
          onPress={() => {
            Linking.openURL(`tel:${result.phone}`);
          }}
        >
          {result.display_phone}
        </Text>
      </View>
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
    backgroundColor: "#f8f8f9",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    marginLeft: 15,
    marginTop: 15,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: "flex-start",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#ffdd33",
  },
  numero: {
    fontSize: 14,
  },
  fondoInfo: {
    padding: 15,
  },
  precio: {
    fontWeight: "bold",
    backgroundColor: "#aacf53",
    height: 30,
    width: "30%",
    alignSelf: "center",
    paddingTop: 3,
    textAlign: "center",
    borderRadius: 5,
    marginBottom: 15,
  },
  review: {
    fontSize: 16,
    marginBottom: 10,
  },
  reviewFondo: {
    flexDirection: "row",
    alignContent: "center",
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#f6d255",
    height: 35,
    borderRadius: 5,
    alignSelf: "center",
    paddingTop: 4,
    paddingHorizontal: 15,
    marginTop: -5,
    alignSelf: "center",
  },
  ubicacion: {
    fontWeight: "bold",
    fontSize: 18,
  },
  ubicacionChild: {
    marginLeft: 10,
    marginTop: 5,
  },
  numero: {
    fontWeight: "bold",
    color: "blue",
    textDecorationLine: "underline",
    marginLeft: 15,
  },
});

export default ResultsShowScreen;

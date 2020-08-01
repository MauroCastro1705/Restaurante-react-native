import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={estilos.contenedor}>
      <Image style={estilos.imagen} source={{ uri: result.image_url }} />
      <Text style={estilos.nombre}> {result.name}</Text>
      <Text style={estilos.review}>
        {" "}
        {result.rating} Estrellas, {result.review_count} Reseñas
      </Text>
    </View>
  );
};

const estilos = StyleSheet.create({
  contenedor: {
    marginLeft: 15,
  },
  imagen: {
    width: 220,
    height: 150,
    borderRadius: 4,
    marginBottom: 5,
  },
  nombre: {
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default ResultsDetail;

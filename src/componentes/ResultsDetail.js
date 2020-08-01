import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View>
      <Text> {result.name}</Text>
    </View>
  );
};

const estilos = StyleSheet.create({});

export default ResultsDetail;

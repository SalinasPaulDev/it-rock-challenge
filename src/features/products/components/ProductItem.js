import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Card } from "../../../components/card/Card";

export const ProductItem = ({ item, onImageLoad }) => {
  return (
    <Card>
      <View style={styles.content}>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          onLoad={onImageLoad}
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: "column",
    gap: 26,
  },
  image: {
    width: "100%",
    height: 280,
    borderRadius: 10,
    resizeMode: "contain",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1a1a1a",
  },
  price: {
    fontSize: 30,
    color: "#1a1a1a",
    fontWeight: "500",
    textAlign: "right",
  },
});

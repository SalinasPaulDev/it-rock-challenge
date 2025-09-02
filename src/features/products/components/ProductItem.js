import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Card } from "../../../components/card/Card";

export const ProductItem = ({ item, onImageLoad }) => {
  return (
    <Card>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: item.image }}
            style={styles.image}
            onLoad={onImageLoad}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
            {item.title}
          </Text>

          <Text style={styles.price}>${item.price}</Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    gap: 26,
    alignItems: "center",
  },
  infoContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 10,
    flex: 1,
  },
  imageContainer: {
    width: 64,
    height: 64,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 10,
    resizeMode: "contain",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1a1a1a",
    flexShrink: 1,
    flexWrap: "wrap",
  },
  price: {
    fontSize: 20,
    color: "#1a1a1a",
    fontWeight: "500",
    textAlign: "right",
  },
});

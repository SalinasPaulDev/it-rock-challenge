import React from "react";
import { View, StyleSheet, ActivityIndicator, Text } from "react-native";
import { ProductList } from "./components/ProductList";
import { useGetProducts } from "./queries/useGetProducts";

const Products = () => {
  const { data, isLoading, error, isRefetching, refetch, isFetching } =
    useGetProducts();

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>
          Error al cargar los productos: {error}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Productos</Text>
        <Text style={styles.description}>
          Selecciona un producto para comprar
        </Text>
      </View>
      <ProductList
        data={data}
        onRefresh={refetch}
        isRefreshing={isRefetching}
        isLoading={isLoading || isFetching}
      />
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
    color: "#6b7280",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: "#6b7280",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: "#ef4444",
    textAlign: "center",
  },
});

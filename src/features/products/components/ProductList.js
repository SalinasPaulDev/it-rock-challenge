import React from "react";
import { FlatList, View, StyleSheet, RefreshControl, Text } from "react-native";
import { ProductItem } from "./ProductItem";
import { ProductSkeleton } from "./ProductSkeleton";
import { TouchableOpacity } from "react-native";

export const ProductList = ({
  data,
  onRefresh,
  isRefreshing,
  onEndReached,
  isLoading,
}) => {
  const renderProductItem = ({ item }) => {
    return isLoading || isRefreshing ? (
      <View style={styles.skeletonContainer}>
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
      </View>
    ) : (
      <TouchableOpacity onPress={() => console.log(item)}>
        <ProductItem item={item} />
      </TouchableOpacity>
    );
  };

  const renderEmptyList = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No hay productos para mostrar</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderProductItem}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.listContainer}
      ItemSeparatorComponent={<View style={styles.separator} />}
      ListEmptyComponent={renderEmptyList}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}
          tintColor="#3b82f6"
        />
      }
      onEndReached={onEndReached}
      onEndReachedThreshold={0.1}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 20,
    flexGrow: 1,
  },
  separator: {
    height: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40,
  },
  emptyText: {
    fontSize: 16,
    color: "#6b7280",
    textAlign: "center",
  },
  skeletonContainer: {
    gap: 26,
  },
});

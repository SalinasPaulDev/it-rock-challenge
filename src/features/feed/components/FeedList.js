import React from "react";
import { FlatList, View, StyleSheet, RefreshControl, Text } from "react-native";
import { FeedItem } from "./FeedItem";

export const FeedList = ({ data, onRefresh, isRefreshing, onEndReached }) => {
  const renderFeedItem = ({ item }) => <FeedItem item={item} />;

  const renderEmptyList = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No hay publicaciones para mostrar</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderFeedItem}
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
});

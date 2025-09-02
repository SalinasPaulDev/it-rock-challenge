import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { FeedList } from "./components/FeedList";
import { useFeed } from "../../hooks/useFeed";
import { Loader } from "../../components/common/Loader";
import { ErrorMessage } from "../../components/common/ErrorMessage";

const FeedScreen = () => {
  const { feedData, isLoading, error, refreshFeed } = useFeed();

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error al cargar el feed: {error}</Text>
      </View>
    );
  }

  if (isLoading) {
    return <Loader text="Cargando publicaciones..." />;
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Comentarios</Text>
        <Text style={styles.description}>
          Aquí puedes ver los comentarios de los usuarios
        </Text>
      </View>
      <FeedList
        data={feedData}
        onRefresh={refreshFeed}
        isRefreshing={isLoading}
      />
    </View>
  );
};

export default FeedScreen;

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

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "../../../components/card/Card";
import { Avatar } from "../../../components/avatar/Avatar";
import { format } from "date-fns";

export const FeedItem = ({ item }) => {
  return (
    <Card>
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.infoHeader}>
            <Avatar avatar={item.avatarUrl} fullname={item.fullName} />
            <Text style={styles.fullname}>{item.fullName}</Text>
          </View>
          <Text style={styles.timestamp}>
            {format(new Date(item.timestamp), "MMM dd, yyyy: HH:mm")}
          </Text>
        </View>
        <Text style={styles.comment}>{item.comment}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: "column",
    gap: 26,
  },
  infoHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  fullname: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1a1a1a",
  },
  timestamp: {
    fontSize: 12,
    color: "#6b7280",
  },
  comment: {
    fontSize: 14,
    lineHeight: 20,
    color: "#374151",
  },
});

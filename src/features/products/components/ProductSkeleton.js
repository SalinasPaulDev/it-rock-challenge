import { useRef, useEffect } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { Card } from "../../../components/card/Card";

export const ProductSkeleton = () => {
  const fadeAnim = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    const startAnimation = () => {
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0.3,
          duration: 800,
          useNativeDriver: true,
        }),
      ]).start(() => startAnimation());
    };

    startAnimation();
  }, [fadeAnim]);

  return (
    <Card>
      <View style={styles.container}>
        <Animated.View
          style={[styles.skeleton, styles.imgSkeleton, { opacity: fadeAnim }]}
        />
        <View style={styles.infoContainer}>
          <Animated.View
            style={[
              styles.skeleton,
              styles.titleSkeleton,
              { opacity: fadeAnim },
            ]}
          />
          <Animated.View
            style={[
              styles.skeleton,
              styles.priceSkeleton,
              { opacity: fadeAnim },
            ]}
          />
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  infoContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 8,
  },
  skeleton: {
    backgroundColor: "#E1E9EE",
  },
  imgSkeleton: {
    width: 64,
    height: 64,
  },
  titleSkeleton: {
    width: "70%",
    height: 20,
  },
  priceSkeleton: {
    width: "40%",
    height: 20,
  },
});

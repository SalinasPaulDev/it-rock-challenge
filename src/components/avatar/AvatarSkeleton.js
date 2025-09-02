import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet } from "react-native";

export const AvatarSkeleton = ({ size = 50 }) => {
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

  const skeletonStyle = {
    width: size,
    height: size,
    borderRadius: size / 2,
  };

  return (
    <Animated.View
      style={[styles.skeleton, skeletonStyle, { opacity: fadeAnim }]}
    />
  );
};

const styles = StyleSheet.create({
  skeleton: {
    backgroundColor: "#E1E9EE",
  },
});

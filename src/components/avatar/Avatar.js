import { Image, Text, View, StyleSheet } from "react-native";
import { useState } from "react";
import { AvatarSkeleton } from "./AvatarSkeleton";
import { getInitials } from "../../utils/getInitials";
import { getNameColor } from "../../utils/getNameColor";

export const Avatar = ({ avatar, fullname }) => {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const initials = getInitials(fullname);
  const backgroundColor = getNameColor(fullname);

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  return (
    <View>
      {!!avatar && isImageLoading && (
        <View style={styles.skeletonContainer}>
          <AvatarSkeleton size={30} />
        </View>
      )}
      {avatar ? (
        <Image
          source={{ uri: avatar }}
          style={[styles.avatar, { backgroundColor }]}
          onLoad={() => handleImageLoad()}
        />
      ) : (
        <View style={[styles.initialsContainer, { backgroundColor }]}>
          <Text style={styles.initialsText}>{initials}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 25,
  },
  initialsContainer: {
    width: 30,
    height: 30,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  initialsText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
  skeletonContainer: {
    position: "absolute",
    zIndex: 1,
  },
});

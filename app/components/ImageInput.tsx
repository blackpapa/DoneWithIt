import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

interface ImageInputProps {
  imageUri?: string;
  onChangeImage: (uri: string) => void;
}

const ImageInput: React.FC<ImageInputProps> = ({ imageUri, onChangeImage }) => {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("You have to enable the permission to access");
  };

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        onChangeImage(result.uri);
      }
    } catch (error) {
      alert("Error loading image");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);
  return (
    <View style={styles.container}>
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      {!imageUri && (
        <TouchableWithoutFeedback
          onPress={() => {
            pickImage();
          }}
        >
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              color={colors.medium}
              name="camera"
              size={40}
            />
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 15,
    marginLeft: 10,
  },
  iconContainer: {
    width: 80,
    height: 80,
    backgroundColor: colors.light,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginLeft: 10,
  },
});

export default ImageInput;

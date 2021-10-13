import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ImageInput from "./ImageInput";

interface ImageInputListProps {
  imageUris: (string | null)[];
  onAddImage: (uri: string) => void;
  onRemoveImage: (uri: string) => void;
}

const ImageInputList: React.FC<ImageInputListProps> = ({
  imageUris,
  onAddImage,
  onRemoveImage,
}) => {
  return (
    <ScrollView horizontal>
      <View style={styles.container}>
        {imageUris.map((imageUri) => (
          <ImageInput
            key={imageUri}
            imageUri={imageUri}
            onChangeImage={onRemoveImage}
          />
        ))}
        <ImageInput onChangeImage={onAddImage} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

export default ImageInputList;

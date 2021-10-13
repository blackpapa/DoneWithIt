import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ImageInput from "./ImageInput";

interface ImageInputListProps {
  imageUris: string[];
  onAddImage: (uri: string) => void;
  onRemoveImage: (uri: string) => void;
}

const ImageInputList: React.FC<ImageInputListProps> = ({
  imageUris,
  onAddImage,
  onRemoveImage,
}) => {
  const scrollView = useRef<any>(null);
  return (
    <View>
      <ScrollView
        style={{ padding: 5 }}
        horizontal
        ref={scrollView}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

export default ImageInputList;

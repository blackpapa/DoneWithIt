import React from "react";
import { View, StyleSheet, Text, Modal } from "react-native";

interface UploadScreenProps {
  progress: number;
  visible: boolean;
}

const UploadScreen: React.FC<UploadScreenProps> = (progress, visible) => {
  return (
    <View style={styles.container}>
      <Modal visible={visible}>
        <Text>The progress: {progress}</Text>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default UploadScreen;

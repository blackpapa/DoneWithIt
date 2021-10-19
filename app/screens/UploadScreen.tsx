import React from "react";
import { View, StyleSheet, Text, Modal } from "react-native";

interface UploadScreenProps {
  progress: number;
  visible: boolean;
}

const UploadScreen: React.FC<UploadScreenProps> = ({
  progress = 0,
  visible = false,
}) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <Text>The progress: {progress * 100} %</Text>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default UploadScreen;

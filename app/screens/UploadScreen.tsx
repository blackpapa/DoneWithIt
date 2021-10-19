import React from "react";
import * as Progress from "react-native-progress";
import { View, StyleSheet, Text, Modal } from "react-native";
import colors from "../config/colors";

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
        <Progress.Bar
          progress={progress}
          color={colors.primaryColor}
          width={200}
        />
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

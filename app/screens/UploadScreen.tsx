import React from "react";
import * as Progress from "react-native-progress";
import { View, StyleSheet, Modal } from "react-native";
import LottieView from "lottie-react-native";

import colors from "../config/colors";
interface UploadScreenProps {
  progress: number;
  visible: boolean;
  onDone: ((isCancelled: boolean) => void) | undefined;
}

const UploadScreen: React.FC<UploadScreenProps> = ({
  progress = 0,
  visible = false,
  onDone,
}) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            progress={progress}
            color={colors.primaryColor}
            width={200}
          />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            source={require("../assets/animations/done.json")}
            style={styles.animation}
          />
        )}
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
  animation: {
    width: 150,
  },
});

export default UploadScreen;

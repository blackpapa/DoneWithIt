import * as React from "react";
import {
  Image,
  View,
  StyleSheet,
  GestureResponderEvent,
  TouchableHighlight,
  Animated,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import colors from "../../config/colors";
import AppText from "../AppText";

interface ListItemProps {
  title: string;
  subTitle?: string;
  style?: object;
  image?: any;
  IconComponent?: JSX.Element;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  renderRightActions?:
    | ((
        progressAnimatedValue: Animated.AnimatedInterpolation,
        dragAnimatedValue: Animated.AnimatedInterpolation
      ) => React.ReactNode)
    | undefined;
}

const ListItem: React.FC<ListItemProps> = ({
  image,
  title,
  subTitle,
  style,
  IconComponent,
  onPress,
  renderRightActions,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={[styles.container, style]}>
          {image && <Image style={styles.image} source={image} />}
          {IconComponent}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
  },
  subTitle: {
    color: colors.medium,
  },
});

export default ListItem;

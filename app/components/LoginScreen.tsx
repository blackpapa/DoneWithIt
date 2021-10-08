import * as React from "react";
import AppButton from "./AppButton";
import AppTextInput from "./AppTextInput";
import Screen from "./Screen";
import { Image, StyleSheet } from "react-native";
import { Formik } from "formik";

interface LoginScreenProps {}

const LoginScreen: React.FC<LoginScreenProps> = () => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.image} source={require("../assets/logo-red.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(value) => console.log(value)}
      >
        {({ handleChange, handleSubmit }) => (
          <React.Fragment>
            <AppTextInput
              icon="email"
              placeholder="Username"
              onChangeText={handleChange("email")}
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              secureTextEntry={false}
            />
            <AppTextInput
              icon="lock"
              placeholder="Password"
              onChangeText={handleChange("password")}
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="default"
              textContentType="password"
              secureTextEntry={true}
            />
            <AppButton title="Login" onPress={handleSubmit} />
          </React.Fragment>
        )}
      </Formik>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingTop: 80,
  },
  image: {
    width: 70,
    height: 70,
    alignSelf: "center",
    marginVertical: 20,
  },
});

export default LoginScreen;

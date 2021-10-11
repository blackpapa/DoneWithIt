import * as React from "react";
import * as Yup from "yup";
import { Image, StyleSheet } from "react-native";

import { AppForm, AppFormField, SubmitButton } from "../components/form";
import Screen from "../components/Screen";

interface LoginScreenProps {}

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

const LoginScreen: React.FC<LoginScreenProps> = () => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.image} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(value: any) => console.log(value)}
        validationSchema={validationSchema}
      >
        <AppFormField
          icon="email"
          name="email"
          placeholder="Username"
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          secureTextEntry={false}
        />
        <AppFormField
          icon="lock"
          name="password"
          placeholder="Password"
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="default"
          textContentType="password"
          secureTextEntry={true}
        />
        <SubmitButton title="login" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
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

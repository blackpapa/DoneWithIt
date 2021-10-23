import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  SubmitButton,
  ErrorMessage,
} from "../components/forms";
import authApi from "../api/auth";
import Screen from "../components/Screen";
import useAuth from "./../hooks/useAuth";

interface LoginScreenProps {}

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

const LoginScreen: React.FC<LoginScreenProps> = () => {
  const [authFailed, setAuthFailed] = useState<boolean>(false);
  const { login } = useAuth();

  const handleSubmit = async (value: any) => {
    const { email, password } = value;
    const response = await authApi.login(email, password);

    if (!response.ok) return setAuthFailed(true);

    login(response.data);

    setAuthFailed(false);
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.image} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(value: any) => handleSubmit(value)}
        validationSchema={validationSchema}
      >
        <ErrorMessage error="Invalid email or password" visible={authFailed} />
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

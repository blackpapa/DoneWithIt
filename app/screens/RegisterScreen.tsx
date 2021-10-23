import React, { useState } from "react";
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../components/forms";
import * as Yup from "yup";

import usersApi from "../api/users";
import authApi from "../api/auth";
import Screen from "../components/Screen";
import { StyleSheet } from "react-native";
import useAuth from "./../hooks/useAuth";

interface RegisterScreenProps {}

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

const RegisterScreen: React.FC<RegisterScreenProps> = () => {
  const [error, setError] = useState<string>();
  const [registerFailed, setRegisterFailed] = useState<boolean>(false);
  const { login } = useAuth();

  const handleSubmit = async (userInfo: any) => {
    const response = await usersApi.register(userInfo);

    if (!response.ok) {
      if (response.data) {
        setError(response.data.error);
        setRegisterFailed(true);
      } else {
        setError("An unexpected error occured");
        console.log(response);
      }

      return;
    }

    const { data: authToken } = await authApi.login(
      userInfo.email,
      userInfo.password
    );
    login(authToken);
  };

  return (
    <Screen style={styles.container}>
      <ErrorMessage error={error} visible={registerFailed} />
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormField
          icon="account"
          name="name"
          placeholder="Name"
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="default"
          textContentType="name"
          secureTextEntry={true}
        />
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
        <SubmitButton title="register" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;

import * as React from "react";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { StyleSheet } from "react-native";

interface RegisterScreenProps {}

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

const RegisterScreen: React.FC<RegisterScreenProps> = () => {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(value: any) => console.log(value)}
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

import * as React from "react";
import * as Yup from "yup";
import { Image, StyleSheet } from "react-native";
import { Formik } from "formik";

import AppButton from "./AppButton";
import AppTextInput from "./AppTextInput";
import Screen from "./Screen";
import ErrorMessage from "./ErrorMessage";
import AppFormField from "./AppFormField";

interface LoginScreenProps {}

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

const LoginScreen: React.FC<LoginScreenProps> = () => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.image} source={require("../assets/logo-red.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(value) => console.log(value)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <React.Fragment>
            <AppFormField
              icon="email"
              name="email"
              placeholder="Username"
              onChangeText={handleChange("email")}
              onBlur={() => setFieldTouched("email")}
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
              onChangeText={handleChange("password")}
              onBlur={() => setFieldTouched("password")}
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

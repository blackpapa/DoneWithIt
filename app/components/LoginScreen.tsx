import * as React from "react";
import * as Yup from "yup";
import { Image, StyleSheet } from "react-native";
import { Formik } from "formik";

import AppButton from "./AppButton";
import AppTextInput from "./AppTextInput";
import Screen from "./Screen";
import ErrorMessage from "./ErrorMessage";

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
            <AppTextInput
              icon="email"
              placeholder="Username"
              onChangeText={handleChange("email")}
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              secureTextEntry={false}
              onBlur={() => setFieldTouched("email")}
            />
            <ErrorMessage error={errors.email} visible={touched.email} />
            <AppTextInput
              icon="lock"
              placeholder="Password"
              onChangeText={handleChange("password")}
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="default"
              textContentType="password"
              secureTextEntry={true}
              onBlur={() => setFieldTouched("password")}
            />
            <ErrorMessage error={errors.password} visible={touched.password} />
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

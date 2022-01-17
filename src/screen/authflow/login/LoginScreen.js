import React, { useState, createRef } from "react";
import Loader from "../../../component/loder/Loder";
import {
  PlaceHolderString,
  ValidationString,
  checkEmailValid,
  AuthDetails,
  Routes,
} from "../../../utils/ConstantStrings";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import styles from "../login/styles";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

import icon from "../../../assets/images";
import Color from "../../../utils/Colors";
import auth from "@react-native-firebase/auth";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState("");

  const passwordInputRef = createRef();

  const callLoginAPI = async () => {
    console.log("credentail",userEmail, userPassword)
    setLoading(true);
    auth()
      .signInWithEmailAndPassword(userEmail, userPassword)
      .then(() => {
        setLoading(false);
        navigation.navigate(Routes.DrawerNavigationRoutes);
      })
      .catch((error) => {
        setLoading(false);
        alert(error);
      });
  };

  const handleSubmitPress = () => {
    setErrortext("");
    if (userEmail?.trim() == "") {
      alert(ValidationString.email_empty);
    } else if (checkEmailValid(userEmail) == false) {
      alert(ValidationString.email_valid);
    } else if (userPassword.trim() == "") {
      alert(ValidationString.password_empty);
    } else if (userPassword.trim() == "") {
      alert(ValidationString.password_valid);
    } else if (userPassword.length < 6 || userPassword.length > 12) {
      alert(ValidationString.password_valid);
    } else {
      callLoginAPI();
    }
  };
  return (
    <View style={styles.mainBody}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{ alignItems: "center" }}>
              <Image
                source={icon.logo}
                borderRadius={30}
                style={{
                  width: "60%",
                  height: 100,
                  resizeMode: "contain",
                  margin: 20,
                }}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserEmail) => setUserEmail(UserEmail)}
                underlineColorAndroid="#f000"
                placeholder={PlaceHolderString.EMAIL_ADDRESS}
                placeholderTextColor={Color.placeholderGray}
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current && passwordInputRef.current.focus()
                }
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserPassword) => setUserPassword(UserPassword)}
                underlineColorAndroid="#f000"
                placeholder={PlaceHolderString.PASSWORD}
                placeholderTextColor={Color.placeholderGray}
                ref={passwordInputRef}
                returnKeyType="done"
                secureTextEntry={true}
                blurOnSubmit={false}
                onSubmitEditing={Keyboard.dismiss}
              />
            </View>
            {errortext != "" ? (
              <Text style={styles.errorTextStyle}>{errortext}</Text>
            ) : null}
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}
            >
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
            </TouchableOpacity>
            <Text
              style={styles.registerTextStyle}
              onPress={() => navigation.navigate(Routes.RegisterScreen)}
            >
              New Here ? Register
            </Text>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;

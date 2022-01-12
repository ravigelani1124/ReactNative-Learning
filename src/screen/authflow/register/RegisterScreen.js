import React, { useState, createRef } from "react";
import {
  View,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Text,
  Keyboard,
  Button,
  Pressable,
} from "react-native";
import icon from "../../../assets/images";
import Loader from "../../../component/loder/Loder";
import Color from "../../../utils/Colors";
import {
  PlaceHolderString,
  ValidationString,
  checkEmailValid,
  AuthDetails,
  Routes,
} from "../../../utils/ConstantStrings";
import styles from "./styles";
import axios from "axios";
import { useNavigation } from "@react-navigation/core";
import auth from "@react-native-firebase/auth";

const RegisterScreen = () => {
  const navigation = useNavigation();

  const [userFName, setUserFName] = useState("");
  const [userLName, setUserLName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState("");
  const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);

  const userFNameInputRef = createRef();
  const userLNameInputRef = createRef();
  const emailInputRef = createRef();
  const passwordInputRef = createRef();

  const createUser = async (dataToSend) => {
    setLoading(true);
    try {
      let response = auth().createUserWithEmailAndPassword(
        dataToSend.email,
        dataToSend.password
      );
      if (response && response.user) {
        setIsRegistraionSuccess(true);
        setLoading(false);
      }
    } catch (error) {
      alert(error);
      setLoading(false);
    }
  };

  const handleSubmitButton = () => {
    setErrortext("");
    if (userFName.trim() == "") {
      alert(ValidationString.fname_empty);
    } else if (userLName.trim() == "") {
      alert(ValidationString.lname_empty);
    } else if (userEmail.trim() == "") {
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
      var dataToSend = {
        firstName: userFName,
        lastName: userLName,
        email: userEmail,
        password: userPassword,
      };
      createUser(dataToSend);
    }
  };

  if (isRegistraionSuccess) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#307ecc",
          justifyContent: "center",
        }}
      >
        <Image
          source={icon.success}
          style={{
            height: 150,
            resizeMode: "contain",
            alignSelf: "center",
          }}
        />
        <Text style={styles.successTextStyle}>Registration Successful</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate(Routes.LoginScreen)}
        >
          <Text style={styles.buttonTextStyle}>Login Now</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          navigation.pop();
        }}
      >
        <Image
          source={icon.back}
          style={{ width: 25, height: 25, margin: 20 }}
        />
      </Pressable>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: "center",
          alignContent: "center",
        }}
      >
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

        <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserFName) => setUserFName(UserFName)}
              underlineColorAndroid="#f000"
              placeholder={PlaceHolderString.FNAME}
              placeholderTextColor={Color.placeholderGray}
              autoCapitalize="sentences"
              returnKeyType="next"
              ref={userFNameInputRef}
              onSubmitEditing={() =>
                userLNameInputRef.current && userLNameInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserLName) => setUserLName(UserLName)}
              underlineColorAndroid="#f000"
              placeholder={PlaceHolderString.LNAME}
              placeholderTextColor={Color.placeholderGray}
              autoCapitalize="sentences"
              returnKeyType="next"
              ref={userLNameInputRef}
              onSubmitEditing={() =>
                emailInputRef.current && emailInputRef.current.focus()
              }
              blurOnSubmit={false}
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
              ref={emailInputRef}
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
            onPress={handleSubmitButton}
          >
            <Text style={styles.buttonTextStyle}>REGISTER</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default RegisterScreen;

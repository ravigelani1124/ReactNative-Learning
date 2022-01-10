import React, { useState, useEffect } from "react";
import { View, Image, ActivityIndicator } from "react-native";
import icon from "../../../assets/images";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "../../../utils/ConstantStrings";
import Color from "../../../utils/Colors";
import Loader from "../../../component/loder/Loder";

const SplashScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      navigation.navigate(Routes.Auth);
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Loader loading={loading} />
      <Image
        source={icon.logo}
        style={{
          width: "60%",
          height: "100%",
          resizeMode: "contain",
          margin: 30,
          borderRadius: 30,
        }}
      />
    </View>
  );
};

export default SplashScreen;

import React,{useState,useEffect} from "react";
// Import Navigators from React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Import Screens
import SplashScreen from "./src/screen/authflow/splash/SplashScreen";
import LoginScreen from "./src/screen/authflow/login/LoginScreen";
import RegisterScreen from "./src/screen/authflow/register/RegisterScreen";
import DrawerNavigationRoutes from "./src/screen/drawerflow/DrawerNavigationRoute";

//Import Constant Strings for Screen
import { Routes } from "./src/utils/ConstantStrings";

const Stack = createNativeStackNavigator();




const Auth = () => {


  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName={Routes.LoginScreen}>
      <Stack.Screen
        name={Routes.LoginScreen}
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.RegisterScreen}
        component={RegisterScreen}
       options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Routes.SplashScreen}>
        <Stack.Screen
          name={Routes.SplashScreen}
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={Routes.Auth}
          component={Auth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={Routes.DrawerNavigationRoutes}
          component={DrawerNavigationRoutes}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

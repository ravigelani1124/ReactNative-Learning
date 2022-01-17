import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "./home/HomeScreen";
import SettingsScreen from "./setting/SettingsScreen";
import CustomSidebarMenu from "../../component/customsidebar/CustomSidebarMenu";
import NavigationDrawerHeader from "../../component/navigationdrawer/NavigationDrawerHeader";
import { Routes } from "../../utils/ConstantStrings";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const homeScreenStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Home", //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#307ecc", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const settingScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.SettingsScreen}
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: "#307ecc", //Set Header color
        },
        headerTintColor: "#fff", //Set Header text color
        headerTitleStyle: {
          fontWeight: "bold", //Set Header text style
        },
      }}
    >
      <Stack.Screen
        name={Routes.SettingsScreen}
        component={SettingsScreen}
        options={{
          title: "Settings", //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigatorRoutes = (props) => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: "#cee1f2",
        color: "#cee1f2",
        itemStyle: { marginVertical: 5, color: "white" },
        labelStyle: {
          color: "#d8d8d8",
        },
      }}
      screenOptions={{ headerShown: false }}
      drawerContent={CustomSidebarMenu}
    >
      <Drawer.Screen
        name="homeScreenStack"
        options={{ drawerLabel: "Home Screen" }}
        component={homeScreenStack}
      />
      <Drawer.Screen
        name="settingScreenStack"
        options={{ drawerLabel: "Setting Screen" }}
        component={settingScreenStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View, SafeAreaView, StatusBar } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import FeedScreen from "../features/feed/Feed";
import { LogoutButton } from "../components/common/LogoutButton";
import Products from "../features/products/Products";
import Checkout from "../features/checkout/Checkout";
import { GoBackbutton } from "../components/common/GoBackbutton";

const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      screenLayout={({ children, ...props }) => (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
          <StatusBar barStyle="dark-content" backgroundColor="#fff" />
          <LogoutButton {...props} />
          <View style={{ flex: 1 }}>{children}</View>
        </SafeAreaView>
      )}
      safeAreaInsets={{ top: 0 }}
    >
      <Tab.Screen
        name="Feeds"
        component={FeedScreen}
        options={{
          tabBarLabel: "Feeds",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="chat" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Products"
        component={Products}
        options={{
          tabBarLabel: "Products",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="store" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="MainTabs" component={TabsNavigator} />

      <RootStack.Screen
        name="Checkout"
        component={Checkout}
        layout={({ children, ...props }) => (
          <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <GoBackbutton {...props} />
            <View style={{ flex: 1 }}>{children}</View>
          </SafeAreaView>
        )}
      />
    </RootStack.Navigator>
  );
};

export default AppNavigator;

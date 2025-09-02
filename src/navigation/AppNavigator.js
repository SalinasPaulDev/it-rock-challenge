import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import FeedScreen from "../features/feed/Feed";
import { LogoutHeader } from "../components/common/LogoutHeader";
import Products from "../features/products/Products";

const Tab = createBottomTabNavigator();
const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      screenLayout={({ children, ...props }) => (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
          <StatusBar barStyle="dark-content" backgroundColor="#fff" />
          <LogoutHeader {...props} />
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

export default AppNavigator;

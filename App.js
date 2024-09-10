import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

import { Colors } from "./constants/Colors";
import HomeScreen from "./screens/HomeScreen";
import ToolsScreen from "./screens/Tools Screens/ToolsScreen";
import GuideScreen from "./screens/GuideScreen";
import CommunityScreen from "./screens/CommunityScreen";
import ConnectScreen from "./screens/ConnectScreen";
import AIScreeningScreen from "./screens/Tools Screens/AIScreeningScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ToolsStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ToolsStart" component={ToolsScreen} />
      <Stack.Screen name="AIScreening" component={AIScreeningScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: Colors.bottomTabBg,
          },
          tabBarActiveTintColor: "white",
        }}
        initialRouteName="Home"
      >
        {/* Tools */}

        <Tab.Screen
          name="Tools"
          component={ToolsStackNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="magnify-scan"
                color={color}
                size={size}
              />
            ),
            tabBarActiveTintColor: "white",
          }}
        />

        {/* Guide */}

        <Tab.Screen
          name="Guide"
          component={GuideScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings" color={color} size={size} />
            ),
            tabBarActiveTintColor: "white",
          }}
        />

        {/* Home */}

        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />

        {/* Community */}

        <Tab.Screen
          name="Community"
          component={CommunityScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <FontAwesome name="group" color={color} size={size} />
            ),
          }}
        />

        {/* Connect */}

        <Tab.Screen
          name="Connect"
          component={ConnectScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <FontAwesome6 name="shuffle" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create();

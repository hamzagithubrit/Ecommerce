import React from "react";
import { Text, View, SafeAreaView, Image, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import Icon from "react-native-vector-icons/Ionicons";

import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import Username from "./Screens/Username";

import { Header } from "react-native/Libraries/NewAppScreen";
import Flatscreen from "./Screens/Flatscreen";
import Flatlistinside from "./Screens/Flatlistinside";
import Secondflatlist from "./Screens/Secondflatlist";

// import HomeScreen from "./Screens/HomeScreen";

// import ProfileScreen from "./Screens/ProfileScreen";

// import SettingsScreen from "./Screens/SettingsScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen
          name="Username"
          component={Username}
          options={{ title: null }}
        />

        {/* <Stack.Screen name="Flatscreen" component={Flatscreen} /> */}

        <Stack.Screen name="Flatscreen" component={Flatscreen} />
        <Stack.Screen name="Flatlistinside" component={Flatlistinside} />
        <Stack.Screen name="Secondflatlist" component={Secondflatlist} />

        {/* <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Profile") {
                iconName = focused ? "person" : "person-outline";
              } else if (route.name === "Settings") {
                iconName = focused ? "settings" : "settings-outline";
              }

              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "blue",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

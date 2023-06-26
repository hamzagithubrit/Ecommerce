import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Image,
  ImageBackgroundBase,
} from "react-native";

import React from "react";
const image = require("../assets/app.png");

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <></>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <TouchableOpacity
          style={{
            borderWidth: 10,
            borderColor: "blue",
            width: 400,
            alignItems: "center",
            marginLeft: 10,
            padding: 5,
            marginTop: 100,
            borderRadius: 30,
            marginTop: 550,
            backgroundColor: "blue",
          }}
          onPress={() => {
            console.log("Username");
            navigation.navigate("Username");
          }}
        >
          <Text style={{ fontSize: 30, color: "white" }}>login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            borderWidth: 10,
            borderColor: "red",
            width: 400,
            alignItems: "center",
            marginLeft: 10,
            padding: 5,
            marginTop: 20,
            borderRadius: 30,
            borderColor: "blue",
            backgroundColor: "blue",
          }}
          onPress={() => {
            console.log("signup");
            navigation.navigate("Signup");
          }}
        >
          <Text style={{ fontSize: 30, color: "white" }}>Sign up</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});

export default Login;

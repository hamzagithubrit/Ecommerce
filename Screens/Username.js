import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";

const Username = ({ navigation }) => {
  return (
    <View style={{ flex: 0.5 }}>
      <Text style={{ fontSize: 40, fontWeight: "bold", margintop: 40 }}>
        Welcome
      </Text>
      <View style={{ marginTop: 40, marginLeft: 16 }}>
        <Image
          style={{ height: 100, width: 300, marginLeft: 20 }}
          source={require("../assets/kchb.jpg")}
        />
      </View>
      <View>
        <TextInput
          placeholder="E-mail"
          style={{
            width: 370,
            height: 50,
            marginBottom: 10,
            fontSize: 20,
            marginLeft: 10,
            backgroundColor: "white",
            borderRadius: 10,
            padding: 3,
            marginTop: 80,
          }}
        />

        <TextInput
          placeholder="password"
          secureTextEntry={true}
          style={{
            width: 370,
            height: 50,
            marginBottom: 10,
            fontSize: 20,
            marginLeft: 10,
            backgroundColor: "white",
            borderRadius: 10,
            padding: 3,
            marginTop: 30,
          }}
        />
        <Text style={{ marginLeft: 280 }}>forgot password?</Text>
        <View style={{}}>
          <TouchableOpacity
            style={{
              borderWidth: 15,
              borderColor: "black",
              width: 400,
              alignItems: "center",
              marginLeft: 10,
              padding: 10,
              marginTop: 100,
              borderRadius: 30,
              marginTop: 10,
              backgroundColor: "black",
            }}
          >
            <Text style={{ fontSize: 20, color: "white" }}>login</Text>
          </TouchableOpacity>
          <Text style={{ marginLeft: 170, fontSize: 20 }}>Or login with</Text>
        </View>
        <View>
          <Text
            style={{ marginLeft: 100, marginTop: 220 }}
            onPress={() => {
              console.log("Signup");
              navigation.navigate("Signup");
            }}
          >
            New on shop ? Sign up
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Username;

import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
const Signup = ({ navigation }) => {
  return (
    <View style={{ marginTop: 50, marginLeft: 10 }}>
      <Text style={{ fontWeight: "bold", fontSize: 30 }}>Email</Text>
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
          marginTop: 30,
        }}
      />
      <Text style={{ fontWeight: "bold", fontSize: 30 }}>Name</Text>
      <TextInput
        placeholder="Full Name"
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
      <Text style={{ fontWeight: "bold", fontSize: 30 }}>Password</Text>
      <TextInput
        placeholder=" Create password"
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
      <Text style={{ fontWeight: "bold", fontSize: 30 }}>Confirm Password</Text>

      <TextInput
        placeholder="Confirm password"
        secureTextEntry={true}
        style={{
          //   borderWidth: 5,
          width: 370,
          height: 50,
          marginBottom: 10,
          fontSize: 20,
          marginLeft: 10,
          backgroundColor: "white",
          borderRadius: 10,
          padding: 3,
          marginTop: 30,
          //   borderColor: "white",
        }}
      />
      <Text style={{ fontSize: 20 }}>
        {" "}
        I accept the Terms of Use and Privacy Policy
      </Text>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{
            borderWidth: 15,
            borderColor: "black",
            width: 370,
            alignItems: "center",
            marginLeft: 10,
            padding: 10,
            marginTop: 100,
            borderRadius: 30,
            marginTop: 10,
            backgroundColor: "black",
          }}
          onPress={() => {
            console.log("Flatscreen");

            navigation.navigate("Flatscreen", { navigation: navigation });
          }}
        >
          <Text style={{ fontSize: 20, color: "white" }}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;

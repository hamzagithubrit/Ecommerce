import { View, Text, TextInput, Image } from "react-native";
import React from "react";
import Secondflatlist from "./Secondflatlist";

const Flatscreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: 10 }}>
        <Text
          style={{
            fontSize: 20,
            marginLeft: 10,
            fontWeight: "bold",
            marginTop: 20,
          }}
        >
          Hello Hamza!
        </Text>
        <Text
          style={{
            fontSize: 30,
            marginLeft: 10,
            fontWeight: "bold",
            marginTop: 15,
          }}
        >
          Select your favourite product
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
        }}
      >
        <TextInput
          placeholder="Search your favourite product"
          style={{
            width: 340,
            height: 50,
            marginBottom: 10,
            fontSize: 20,
            marginLeft: 10,
            backgroundColor: "white",
            borderRadius: 10,
            padding: 1,
          }}
        />
        <Image
          source={require("../assets/favicon.png")}
          style={{
            width: 50,
            height: 50,
            marginLeft: 10,
          }}
        />
      </View>
      <Secondflatlist navigation={navigation} />
    </View>
  );
};

export default Flatscreen;

import React from "react";
import {
  View,
  FlatList,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const { width } = Dimensions.get("window");

const data = [
  {
    id: "1",
    title: "shoes",
    price: "$9.99",
    image: require("../assets/1.1.jpg"),
  },
  {
    id: "2",
    title: "bags",
    price: "$19.99",
    image: require("../assets/1.2.jpg"),
  },
  {
    id: "3",
    title: "Shirts",
    price: "$14.99",
    image: require("../assets/1.3.png"),
  },
  {
    id: "4",
    title: "Watches",
    price: "$24.99",
    image: require("../assets/1.4.jpeg"),
  },
  {
    id: "5",
    title: "Airpods",
    price: "$29.99",
    image: require("../assets/1.5.jpeg"),
  },
  {
    id: "6",
    title: "Charger",
    price: "$12.99",
    image: require("../assets/1.6.jpeg"),
  },
];

const COLUMN_COUNT = 2;
const ITEM_WIDTH = width / COLUMN_COUNT;

const Secondflatlist = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => {
          console.log("Flatlistinside");
          navigation.navigate("Flatlistinside", { item: item });
        }}
      >
        <Image source={item.image} style={styles.itemImage} />
        <Text>{item.title}</Text>
        <Text>{item.price}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={COLUMN_COUNT}
        contentContainerStyle={styles.flatListContainer}
        columnWrapperStyle={styles.flatListColumn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContainer: {
    padding: 10,
  },
  flatListColumn: {
    flex: 1,
    justifyContent: "space-between",
  },
  itemContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 10,
    alignItems: "center",
    padding: 10,
  },
  itemImage: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
});

export default Secondflatlist;

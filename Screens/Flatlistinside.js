import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import StarRating from "react-native-star-rating";

const Flatlistinside = ({ navigation, route }) => {
  const { item } = route.params;
  const [quantity, setQuantity] = useState(0);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleRatingChange = (rating) => {
    setRating(rating);
  };

  const handleSubmit = () => {
    // Logic to handle submit button click
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.priceText}>${item.price}</Text>

        <Text style={styles.imageText}>{item.title}</Text>

        <StarRating
          disabled={false}
          maxStars={5}
          rating={rating}
          selectedStar={(rating) => handleRatingChange(rating)}
          starSize={20}
          starStyle={styles.starStyle}
          fullStarColor="yellow"
        />

        <View style={styles.inputContainer}>
          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.button} onPress={handleDecrement}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>

            <TextInput
              style={styles.input}
              placeholder="Quantity"
              keyboardType="numeric"
              value={quantity.toString()}
              onChangeText={(text) => setQuantity(parseInt(text))}
            />

            <TouchableOpacity style={styles.button} onPress={handleIncrement}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={[styles.button, styles.cartButton]}
            onPress={() => {
              /* Logic to handle add to cart button click */
            }}
          >
            <Text style={styles.buttonLabel}>Add to Cart</Text>
          </TouchableOpacity>

          <TextInput
            style={styles.reviewInput}
            placeholder="Write a review..."
            multiline
            value={review}
            onChangeText={(text) => setReview(text)}
          />

          <TouchableOpacity
            style={[styles.button, styles.submitButton]}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonLabel}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 50,
    backgroundColor: "white",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    width: 300,
    height: 300,
  },
  imageText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "white",
  },
  inputContainer: {
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "white",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  input: {
    width: 150,
    height: 50,
    fontSize: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  starStyle: {
    marginRight: 5,
  },
  priceText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 250,
    backgroundColor: "white",
  },
  cartButton: {
    width: 200,
    marginTop: 20,
  },
  submitButton: {
    width: 200,
    backgroundColor: "green",
    marginTop: 20,
  },
  buttonLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  reviewInput: {
    width: 300,
    height: 80,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 20,
    backgroundColor: "white",
  },
});

export default Flatlistinside;

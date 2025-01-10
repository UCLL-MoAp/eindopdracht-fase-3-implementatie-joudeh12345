import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Recipe {
  id: number;
  name: string;
  time: string;
  calories: string;
  image: any;
}

interface RecipeCardProps {
  recipe: Recipe;
  onPress: () => void;
}

export default function RecipeCard({ recipe, onPress }: RecipeCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={recipe.image} style={styles.image} />
      <View style={styles.details}>
        <View style={styles.info}>
          <MaterialCommunityIcons
            name="clock-outline"
            size={16}
            color="black"
          />
          <Text style={styles.text}>{recipe.time}</Text>
          <MaterialCommunityIcons name="fire" size={16} color="red" />
          <Text style={styles.text}>{recipe.calories}</Text>
        </View>
        <Text style={styles.name}>{recipe.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image: {
    width: "100%",
    height: 150,
  },
  details: {
    padding: 10,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    marginHorizontal: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

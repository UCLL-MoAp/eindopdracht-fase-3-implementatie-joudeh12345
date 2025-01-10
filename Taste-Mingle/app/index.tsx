import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Topbar */}
      <View style={styles.topBar}>
        <Ionicons name="restaurant-outline" size={24} color="black" />
        <Text style={styles.title}>TasteMingle</Text>
        <Ionicons name="restaurant-outline" size={24} color="black" />
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput placeholder="Search recipe" style={styles.searchInput} />
        <Ionicons
          name="close-circle"
          size={20}
          color="gray"
          style={styles.searchIcon}
        />
      </View>

      {/* Categories */}
      <ScrollView
        horizontal
        style={styles.categoriesContainer}
        showsHorizontalScrollIndicator={false}
      >
        {categories.map((category, index) => (
          <View key={index} style={styles.category}>
            <Ionicons name={category.icon} size={24} color="black" />
            <Text style={styles.categoryLabel}>{category.label}</Text>
          </View>
        ))}
      </ScrollView>

      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {recipes.map((recipe) => (
          <View key={recipe.id} style={styles.recipeCard}>
            <Image source={recipe.image} style={styles.recipeImage} />
            <View style={styles.recipeDetails}>
              <View style={styles.recipeInfo}>
                <MaterialCommunityIcons
                  name="clock-outline"
                  size={16}
                  color="black"
                />
                <Text style={styles.recipeText}>{recipe.time}</Text>
                <MaterialCommunityIcons name="fire" size={16} color="green" />
                <Text style={styles.recipeText}>{recipe.calories}</Text>
              </View>
              <Text style={styles.recipeName}>{recipe.name}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <Ionicons name="home-outline" size={24} color="black" />
        <Ionicons name="bookmark-outline" size={24} color="black" />
        <Ionicons name="heart-outline" size={24} color="black" />
      </View>
    </View>
  );
}

const categories = [
  { label: "Breakfast", icon: "fast-food-outline" },
  { label: "Dinner", icon: "pizza-outline" },
  { label: "Snacks", icon: "ice-cream-outline" },
  { label: "Vegan", icon: "leaf-outline" },
  { label: "Healthy", icon: "fitness-outline" },
  { label: "Smoothies", icon: "wine-outline" },
  { label: "Desserts", icon: "ice-cream-outline" },
] as const;

const recipes = [
  {
    id: 1,
    name: "Smash Burgers",
    time: "15 min",
    calories: "600kcal",
    image: require("../assets/smash-burgers.jpg"),
  },
  {
    id: 2,
    name: "Creamy Vegan One Pot Pasta",
    time: "18 min",
    calories: "529kcal",
    image: require("../assets/vegan-pasta.jpg"),
  },
  {
    id: 3,
    name: "Mango Lassi",
    time: "10 min",
    calories: "120kcal",
    image: require("../assets/mago-lassi.jpg"),
  },
];
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },

  footer: {
    backgroundColor: "#E6E3B3",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 15,
  },
  topBar: {
    flexDirection: "row",
    backgroundColor: "#E6E3B3",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 5,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  searchIcon: {
    marginRight: 5,
  },
  categoriesContainer: {
    flexDirection: "row",
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingBottom: 30,
  },
  category: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  categoryLabel: {
    fontSize: 12,
    marginTop: 5,
    textAlign: "center",
  },
  scrollViewContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20, // Ruimte aan de onderkant voor de laatste kaart
  },
  recipeCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  recipeImage: {
    width: "100%",
    height: 150,
  },
  recipeDetails: {
    padding: 10,
  },
  recipeInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  recipeText: {
    fontSize: 14,
    marginHorizontal: 5,
  },
  recipeName: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

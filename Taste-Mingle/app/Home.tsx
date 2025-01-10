import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import RecipeCard from "../components/RecipeCard";

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  // Filter de recepten op basis van de zoekopdracht
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
        <TextInput
          placeholder="Search recipe"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
          style={styles.searchInput}
        />
        {searchQuery ? (
          <TouchableOpacity onPress={() => setSearchQuery("")}>
            <Ionicons name="close-circle" size={20} color="gray" />
          </TouchableOpacity>
        ) : null}
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

      {/* Recipe Cards */}
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {filteredRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onPress={() =>
              router.push({
                pathname: "/RecipeDetail",
                params: {
                  id: recipe.id.toString(),
                },
              })
            }
          />
        ))}
      </ScrollView>
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
    padding: 10,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
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
    paddingBottom: 20,
  },
});

import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const recipes = [
  {
    id: 1,
    name: "Smash Burgers",
    time: "15 min",
    calories: "600kcal",
    image: require("../../assets/smash-burgers.jpg"),
    ingredients: "Beef, Cheese, Buns, Onions, Sauce",
    preparation: [
      "Verwarm een grillpan op middelhoog vuur.",
      "Vorm het gehakt tot burgers en breng op smaak met zout en peper.",
      "Grill de burgers 2-3 minuten aan elke kant.",
      "Leg kaas op de burgers en laat het smelten.",
      "Toast de broodjes en voeg toppings toe.",
    ],
  },
  {
    id: 2,
    name: "Creamy Vegan One Pot Pasta",
    time: "18 min",
    calories: "529kcal",
    image: require("../../assets/vegan-pasta.jpg"),
    ingredients: "Pasta, Tomatoes, Garlic, Cream",
    preparation: [
      "Kook de pasta volgens de instructies op de verpakking.",
      "Bak de knoflook en tomaten in een grote pan.",
      "Voeg de gekookte pasta en room toe aan de pan.",
      "Meng alles goed en laat het 2 minuten sudderen.",
      "Serveer warm met basilicum als garnering.",
    ],
  },
  {
    id: 3,
    name: "Mango Lassi",
    time: "10 min",
    calories: "120kcal",
    image: require("../../assets/mago-lassi.jpg"),
    ingredients: "Mango, Yogurt, Sugar, Cardamom",
    preparation: [
      "Schil en snijd de mango in stukjes.",
      "Doe de mango, yoghurt, suiker en kardemom in een blender.",
      "Mix tot een glad geheel.",
      "Serveer koud met een takje munt als garnering.",
    ],
  },
];

export default function RecipeDetail() {
  const params = useLocalSearchParams();

  const recipeId = Array.isArray(params.id) ? params.id[0] : params.id;
  const recipe = recipes.find((r) => r.id === parseInt(recipeId, 10));

  if (!recipe) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Recept niet gevonden</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>{recipe.name}</Text>
        <Image source={recipe.image} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.infoText}>
            {" "}
            <MaterialCommunityIcons
              name="clock-outline"
              size={16}
              color="black"
            />
            {recipe.time}
          </Text>

          <Text style={styles.infoText}>
            <MaterialCommunityIcons name="fire" size={16} color="red" />
            {recipe.calories}
          </Text>
        </View>
        <Text style={styles.sectionTitle}>Ingrediënten</Text>
        <Text style={styles.ingredients}>{recipe.ingredients}</Text>
        <Text style={styles.sectionTitle}>Bereiding</Text>
        {recipe.preparation.map((step, index) => (
          <Text key={index} style={styles.step}>
            {index + 1}. {step}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  ingredients: {
    fontSize: 16,
    marginTop: 10,
  },

  step: {
    fontSize: 16,
    marginTop: 5,
    lineHeight: 22,
  },
});

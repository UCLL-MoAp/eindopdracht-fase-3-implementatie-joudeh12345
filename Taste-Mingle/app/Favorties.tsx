import { View, Text, StyleSheet } from "react-native";

export default function Favorites() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your Favorite Recipes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

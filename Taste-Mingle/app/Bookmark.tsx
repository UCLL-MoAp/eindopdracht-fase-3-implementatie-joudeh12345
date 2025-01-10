import { View, Text, StyleSheet } from "react-native";

export default function Bookmark() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your Bookmarked Recipes</Text>
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

import { Text, View, StyleSheet } from "react-native";

export const Title = () => {
  return (
    < View style = { styles.titleContainer }>
      < Text style={styles.particule}> My</Text >
      < Text style={styles.body}> todo app</Text >
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection:"row",
  },
  particule: {
    color: "red",
    fontSize: 40,
    fontWeight: "bold",
  },
  body: {
    fontSize: 40,
    color: "black",
    fontWeight: "bold",
  }
});

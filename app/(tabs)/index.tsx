import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import MainResume from "@/components/MainResume";
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <MainResume path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(204, 221, 249 )",
    display: "flex",
    margin: 0,
    padding: 0,
  },
});

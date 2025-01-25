import { StyleSheet } from "react-native";

import Profile from "@/components/Profile";
import { View } from "@/components/Themed";

export default function PageAboutMe() {
  const profile = "ประวัติส่วนตัว";
  return (
    <View style={styles.container}>
      <Profile path="app/(tabs)/Profile.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(204, 221, 249 )",
    padding: 0,
    margin: 0,
  },
});

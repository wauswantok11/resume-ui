import React from "react";
import {
  StyleSheet,
  Platform,
  TouchableOpacity,
  Linking,
  Image,
  Alert,
} from "react-native";
import { Text, View } from "./Themed";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
const imgMe = "../assets/images/me.jpg";

interface ProfileProps {
  path: string;
}

export default function Profile({ path }: ProfileProps) {
  return (
    <View style={styles.container}>
      <SafeAreaProvider style={styles.mainBoxImages}>
        <SafeAreaView style={styles.boxImages}>
          <Image
            style={styles.imgMeStyle}
            source={require(imgMe)}
            alt="Me Image"
          />
        </SafeAreaView>
      </SafeAreaProvider>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>ประวัติส่วนตัว</Text>
      </View>

      <View style={styles.AboutMeContainer}>
        <View>
          <Text
            style={styles.getStartedText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)"
          >
            ชื่อ: นาย อดุล วสุวรรธก
          </Text>
        </View>
        <View>
          <Text
            style={styles.getStartedText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)"
          >
            ชื่อเล่น: บูม
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainBoxImages: {
    // flex: 'conter'
    display: "flex",
  },
  boxImages: {
    alignItems: "center",
    padding: 20,
  },
  imgMeStyle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: "#f6f0f0",
    shadowColor: "#edebeb",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 5,
  },
  container: {
    flex: 1,
    padding: Platform.select({ web: 20, default: 16 }),
    maxWidth: Platform.select({ web: 800, default: 100 }),
    marginHorizontal: Platform.select({ web: "auto" }),
  },
  titleContainer: {
    marginBottom: 24,
    borderBottomWidth: 2,
    borderBottomColor: "#e0e0e0",
    paddingBottom: 8,
  },
  AboutMeContainer: {
    marginBottom: 32,
    flexDirection: Platform.select({ web: "row", default: "column" }),
    gap: 16,
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
  },
  titleText: {
    fontSize: Platform.select({ web: 28, default: 24 }),
    fontWeight: "bold",
    color: "#333",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

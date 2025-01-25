

import { getBackgroundColorAsync } from "expo-system-ui";
import {
    StyleSheet,
    Platform,
    Dimensions,
} from "react-native";
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: Platform.select({
            android: 0,
            ios: 0,
            web: 0,
            default: 0,
        }),
        maxWidth: Platform.select({
            android: width,
            ios: width,
            web: width,
            default: width,
        }),
        maxHeight: Platform.select({
            android: height,
            ios: height,
            web: height,
            default: height,
        }), 
        marginHorizontal: "auto",
        backgroundColor: "rgb(204, 221, 249 )"

    },
    titleContainer: { 
        flex: 1,
        backgroundColor: "#fff",
        borderRadius: 10, 
        marginHorizontal: 16,
        margin: Platform.select({
            android: 15,
            ios: 15,
            web: 30,
            default: 15,
        }),
        padding: Platform.select({
            android: 5,
            ios: 5,
            web: 5,
            default: 5,
        }),
        maxWidth: Platform.select({
            android: width,
            ios: width,
            web: width,
            default: width,
        }),
        maxHeight: Platform.select({
            android: height,
            ios: height,
            web: height,
            default: height,
        }), 
    },
    titleText: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
    },
    jobContainer: {
        marginBottom: 32,
        flexDirection: "column",
        marginHorizontal: 16,
        padding: 20,
        borderRadius: 20,
    },
    dateContainer: {
        minWidth: 120,
        marginBottom: 8,
    },
    dateText: {
        // fontWeight: "bold",
        fontSize: 16,
        fontWeight: "bold",
    },
    dateTextMob: {
        fontSize: 14,
        fontWeight: "bold",
        color: "red",
    },
    jobContent: {
        flex: 1,
        paddingLeft: 20,
    },
    companyName: {
        // fontSize: 18,
        fontSize: Platform.select({
            android: 16,
            ios: 16,
            web: 18,
            default: 18,
        }),
        fontWeight: "bold",
        color: "#333",
        marginBottom: 8,
    },
    position: {
        fontSize: Platform.select({
            android: 14,
            ios: 14,
            web: 16,
            default: 16,
        }),
        marginBottom: 8,
        fontWeight: "bold",
    },
    sectionTitle: { 
        fontSize: Platform.select({
            android: 14,
            ios: 14,
            web: 16,
            default: 16,
        }),
        fontWeight: "bold",
        marginTop: 12,
        marginBottom: 8,
    },
    responsibility: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 8,
    },
    link: {
        color: Platform.select({
            web: "#0066cc",
            default: "#0096FF",
        }),
        textDecorationLine: "underline",
    },
    focusLink:{ 
        color: 'blue',
        fontSize: Platform.select({
            android: 14,
            ios: 14,
            web: 16,
            default: 16,
        }),
        fontWeight: 'bold',
    }
     
});

export default styles;

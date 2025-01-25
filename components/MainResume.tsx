import React, { useState } from "react";
import {
  Platform,
  Linking,
  Alert,
  ScrollView,
  GestureResponderEvent,
} from "react-native";
import { Text, View } from "./Themed";
import styles from "./mainResumeStyle";
interface MainResumeProps {
  path: string;
}
export default function MainResume({ path }: MainResumeProps) {
  const jobTwo = "บริษัท อินเทอร์เน็ตประเทศไทย จำกัด (มหาชน)";
  const role = "( Junior developer )";
  const urlEduManual = "https://edumanual.psu.ac.th/";
  const urlEkyc = "https://ekyc2.id.th/";
  const urlStateless = "https://fdh.moph.go.th/user-admin/login";
  const urlUm = "https://um.id.th/";
  const bizPSU = "https://eila.psu.ac.th/";
  const bizINET = "https://www.inet.co.th/th";

  const handleOpenLink = async (url: string) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert("Error", `Can't open this URL: ${url}`);
      }
    } catch (error) {
      Alert.alert("Error", "Failed to open the link.");
    }
  };

  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    console.log(' setIsPressed(true); ');
    setIsPressed(true);
  };

  const handlePressOut = () => {
    console.log(' setIsPressed(false); ');
    setIsPressed(false);
  };
  return (
    <React.Fragment>
      <ScrollView>
        <View style={styles.container}>
          {/* title */}
          <View style={styles.titleContainer}>
            <Text
              style={styles.titleText}
              lightColor="rgba(0,0,0,0.8)"
              darkColor="rgba(255,255,255,0.8)"
            >
              ประสบการณ์การทำงาน
            </Text>
          </View>

          {/* content one */}
          <View
            style={
              Platform.OS === "web" ? styles.jobContainer : styles.jobContainer
            }
          >
            <View style={
                Platform.OS === "web"
                  ? styles.dateContainer
                  : styles.dateContainer
              }
            >
              <Text
                style={
                  Platform.OS === "web" ? styles.dateText : styles.dateTextMob
                }
              >
                {"NOV. 2022 - JUN. 2023 (7 mos)"}
              </Text>
            </View>
            <View style={styles.jobContent}>
              <Text
                style={styles.companyName}
                onPress={() => {
                  handleOpenLink(bizPSU);
                }}
              >
                สำนักการศึกษาและนวัตกรรมการเรียนรู้ มหาวิทยาลัยสงขลานครินทร์
              </Text>
              <Text style={styles.position}>
                ตำแหน่ง : นักวิชาการคอมพิวเตอร์
              </Text>
              <Text style={styles.sectionTitle}>หน้าที่ที่รับผิดชอบ</Text>
              <Text style={styles.responsibility}>
                พัฒนาระบบ{" "}
                <Text
                  style={styles.link}
                  onPress={() => {
                    handleOpenLink(urlEduManual);
                  }}
                >
                  คู่มือการศึกษาสำหรับนักศึกษาของ
                </Text>{" "}
                มหาวิทยาลัยสงขลานครินทร์ ในทุกระดับการศึกษา พร้อมระบบ ADMIN
                สำหรับการเพิ่มหรือแก้ไขไฟล์คู่มือการศึกษา
              </Text>
              <Text style={styles.responsibility}>
                พัฒนาระบบ ระบบเก็บข้อมูลสำหรับนักศึกษาสหกิจศึกษา
                มหาวิทยาลัยสงขลานครินทร์
              </Text>
            </View>
          </View>

          {/* content two */}
          <View style={styles.jobContainer}>
            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>
                {" "}
                {Platform.OS === "web" ? "JUL. 2023 - Now" : "2023-Now"}
              </Text>
            </View>

            <View style={styles.jobContent}>
              <Text
                style={[styles.companyName, isPressed && styles.focusLink]}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                onPress={() => {
                  handleOpenLink(bizINET);
                }}
              >
                {" "}
                {jobTwo}
              </Text>
              <Text style={styles.position}>
                ตำแหน่ง : Software Engineer {role}
              </Text>
              <Text style={styles.sectionTitle}>
                หน้าที่ที่รับผิดชอบ Full Stack Developer
              </Text>
              <Text>
                พัฒนาและดูแลระบบที่เกี่ยวข้องกับการจัดการข้อมูลของลูกค้าทั้งในส่วนของข้อมูลบริษัทเอกชนและข้อมูลรัฐบาลได้แก่
              </Text>
              <Text>
                ระบบ{" "}
                <Text
                  style={styles.link}
                  onPress={() => {
                    handleOpenLink(urlEkyc);
                  }}
                >
                  ยืนยันตัวตนออนไลน์
                </Text>{" "}
                ด้วยบัตรประชาชน
              </Text>

              <Text>
                ระบบ{" "}
                <Text
                  style={styles.link}
                  onPress={() => {
                    handleOpenLink(urlStateless);
                  }}
                >
                  การสมัครข้อมูลและเก็บข้อมูลสิทธิการรักษาพยาบาล
                </Text>{" "}
                ของประชาชนในกลุ่มคนที่ไม่มีสถานะทางทะเบียนและบุคคลไร้รัฐ
              </Text>
              <Text>
                ระบบ{" "}
                <Text
                  style={styles.link}
                  onPress={() => {
                    handleOpenLink(urlUm);
                  }}
                >
                  สำหรับการเก็บข้อมูลและเพิ่มข้อมูลผู้ใช้งานเข้าองค์กรจำนวนมาก
                </Text>
              </Text>
            </View>
            <View></View>
          </View>
        </View>
      </ScrollView>
    </React.Fragment>
  );
}

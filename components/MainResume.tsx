import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "./Themed";

export default function MainResume({ path }: { path: string }) {
  const jobTow = "บริษัท อินเทอร์เน็ตประเทศไทย จำกัด (มหาชน)";
  const jobOne = "สำนักการศึกษาและนวัตกรรมการเรียนรู้ มหาวิทยาลัยสงขลานครินทร์";
  const jobTitle = "ประสบการณ์การทำงาน";
  return (
    <View>
      <View>
        <Text>
          {jobTitle}
        </Text>
      </View>

      <View>
        <Text>2022 - 2023</Text>
        <Text>{jobOne}</Text>
      </View>

      <View>
        <Text>2023 - now</Text>
        <Text>{jobTow}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  jobDetail: {
    alignItems: "center",
    marginHorizontal: 50,
  },
});

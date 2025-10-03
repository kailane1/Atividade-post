import { StyleSheet, View } from "react-native";
import Timeline from "@/components/Timeline";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Timeline />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 30
  }
});

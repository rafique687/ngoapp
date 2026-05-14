import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Footer() {
  const router = useRouter();

  return (
    <View style={styles.footer}>
      {/* Left - Home */}
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => router.push("/agent")}
      >
        <Ionicons name="home" size={26} color="#fff" />
      </TouchableOpacity>

      {/* Center - Payment Status */}
      <TouchableOpacity
        style={styles.centerButton}
        onPress={() => router.push("/agent/paymentStatus")}
      >
        <Text style={styles.buttonText}>Payment Status</Text>
      </TouchableOpacity>

      {/* Right - Menu */}
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => console.log("Menu clicked")}
      >
        <Ionicons name="menu" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#dbd6d6",
    paddingHorizontal: 20,
    paddingVertical: 12,
    position: "absolute",
    bottom: 0,
  },

  iconButton: {
    backgroundColor: "#f01343",
    padding: 12,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
  },

  centerButton: {
    backgroundColor: "#f01343",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

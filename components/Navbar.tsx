import { useRouter } from "expo-router";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function TopMenu() {
  const router = useRouter();

  const screenWidth = Dimensions.get("window").width;
  const isMobile = screenWidth < 768;

  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => router.push("/main/Login")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.applyButton}
        onPress={() => router.push("/main/Apply")}
      >
        <Text style={styles.buttonText}>Apply</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#dbd6d6",
    paddingHorizontal: 15,
    paddingVertical: 12,
  },

  logo: {
    color: "#000",
    fontWeight: "700",
    marginBottom: 5,
  },

  menu: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },

  link: {
    color: "#000",
    marginHorizontal: 10,
    marginVertical: 5,
    fontWeight: "500",
  },

  loginButton: {
    backgroundColor: "#444",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 6,
    marginRight: 10,
  },

  applyButton: {
    backgroundColor: "#e21d1d",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 6,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
});

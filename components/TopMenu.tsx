import { FontAwesome } from "@expo/vector-icons";
import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function TopMenu() {
  return (
    <View style={styles.container}>
      {/* 📍 Address */}
      <Text style={styles.text}>📍 Balotra, Rajsthan</Text>

      {/* 📧 Email */}
      <Text style={styles.text}>📧 info@malisainisamajseva.com</Text>

      {/* 📱 Phone */}
      <Text style={styles.text}>📱 +91 9530303820</Text>

      {/* 🌐 Social Icons */}
      <View style={styles.social}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => Linking.openURL("https://facebook.com")}
        >
          <FontAwesome name="facebook" size={15} padding={5} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => Linking.openURL("https://instagram.com")}
        >
          <FontAwesome name="instagram" size={15} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => Linking.openURL("https://twitter.com")}
        >
          <FontAwesome name="twitter" size={15} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => Linking.openURL("https://linkedin.com")}
        >
          <FontAwesome name="comment" size={15} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e21d1d",
    flexDirection: "row", // ✅ EVERYTHING IN ONE ROW
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexWrap: "wrap", // ✅ allows small screen wrap
  },

  text: {
    color: "white",
    fontSize: 12,
    marginHorizontal: 5,
  },

  social: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },

  icon: {
    fontSize: 18,
    marginHorizontal: 5,
  },
  iconButton: {
    marginHorizontal: 8,
  },
});

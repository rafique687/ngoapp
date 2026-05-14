import React from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Setting() {
  const settingsData = [
    { title: "👤 Profile" },
    { title: "🔒 Change Password" },
    { title: "🌐 Select Language" },
    { title: "ℹ️ About" },
    { title: "📞 Contact Us" },
    { title: "📜 Rules & Policy" },
    { title: "📄 Terms of Service" },
    { title: "🚪 Sign Out" },
  ];

  const handlePress = (title: string) => {
    Alert.alert(title);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <View style={styles.list}>
        {settingsData.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.box}
            onPress={() => handlePress(item.title)}
          >
            <Text style={styles.boxText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },

  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 25,
    color: "#222",
  },

  list: {
    width: "100%",
  },

  box: {
    width: "100%",
    backgroundColor: "#fff",

    borderRadius: 15,
    paddingVertical: 18,
    paddingHorizontal: 20,

    marginBottom: 15,

    borderWidth: 2,
    borderColor: "#ce0c0c",

    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },

  boxText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },
});

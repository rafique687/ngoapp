import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Profile() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <View>
      {/* 👤 USER + SCHEME DROPDOWN */}
      <View style={styles.userRow}>
        {/* User Info */}
        <View style={styles.userBox}>
          <Ionicons name="person-circle" size={30} color="#dacccc" />
          <Text style={styles.userName}>Rahul Kumar</Text>
        </View>

        {/* Dropdown Button */}
        <TouchableOpacity onPress={() => setOpen(!open)}>
          <Ionicons name="chevron-down" size={22} color="#e6c9c9" />
        </TouchableOpacity>
      </View>

      {/* 📜 DROPDOWN MENU */}
      {open && (
        <View style={styles.dropdown}>
          <Text style={styles.schemeItem}>📌 Health Scheme</Text>
          <Text style={styles.schemeItem}>📌 Education Scheme</Text>
          <Text style={styles.schemeItem}>📌 Housing Scheme</Text>
          <Text style={styles.schemeItem}>📌 Skill Scheme</Text>
        </View>
      )}

      {/* 📊 TOTAL USER ROW */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => router.push("/")}
        >
          <Text style={styles.buttonText}>Total User: 10000</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.applyButton}
          onPress={() => router.push("/")}
        >
          <Text style={styles.buttonText}>My User: 8000</Text>
        </TouchableOpacity>
      </View>
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
    backgroundColor: "#be0b0b",
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
    backgroundColor: "#e21d1d",
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
  userRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#e21d1d",
  },

  userBox: {
    flexDirection: "row",
    alignItems: "center",
  },

  userName: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "60",
    color: "#fff",
  },

  dropdown: {
    backgroundColor: "#f5f5f5",
    padding: 10,
    marginHorizontal: 15,
    borderRadius: 8,
  },

  schemeItem: {
    paddingVertical: 6,
    fontSize: 14,
  },
});

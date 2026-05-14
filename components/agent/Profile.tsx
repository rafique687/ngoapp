import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useContext, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SchemeContext } from "../../context/SchemeContext";

export default function Profile() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { selectedScheme, setSelectedScheme } = useContext(SchemeContext);

  return (
    <View style={styles.container}>
      {/* USER SECTION */}
      <View style={styles.userRow}>
        {/* User Info */}
        <TouchableOpacity
          style={styles.userBox}
          onPress={() => router.push("/agent/setting")}
        >
          <Ionicons name="person-circle" size={34} color="#fff" />

          <Text style={styles.userName}>Dalpat</Text>
        </TouchableOpacity>

        {/* Dropdown Button */}
        <TouchableOpacity onPress={() => setOpen(!open)}>
          <Ionicons
            name={open ? "chevron-up" : "chevron-down"}
            size={24}
            color="#fff"
          />
        </TouchableOpacity>
      </View>

      {/* DROPDOWN */}
      {open && (
        <View style={styles.dropdown}>
          <TouchableOpacity
            onPress={() => {
              setSelectedScheme("Sukanya Yogna");
              setOpen(false);
            }}
          >
            <Text style={styles.schemeItem}>📌 Sukanya Yogna</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setSelectedScheme("NGO");
              setOpen(false);
            }}
          >
            <Text style={styles.schemeItem}>📌 NGO</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setSelectedScheme("Social Support");
              setOpen(false);
            }}
          >
            <Text style={styles.schemeItem}>📌 Social Support</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* TOTAL MEMBERS ROW */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.memberBox}
          onPress={() => router.push("//")}
        >
          <Text style={styles.memberTitle}>Total Members</Text>
          <Text style={styles.memberValue}>10000</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.memberBox}
          onPress={() => router.push("//")}
        >
          <Text style={styles.memberTitle}>My Members</Text>
          <Text style={styles.memberValue}>8000</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
  },

  /* USER ROW */

  userRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    backgroundColor: "#e21d1d",

    paddingHorizontal: 15,
    paddingVertical: 14,
  },

  userBox: {
    flexDirection: "row",
    alignItems: "center",
  },

  userName: {
    marginLeft: 10,
    fontSize: 17,
    fontWeight: "700",
    color: "#fff",
  },

  /* DROPDOWN */

  dropdown: {
    backgroundColor: "#fff",

    marginHorizontal: 15,
    marginTop: 10,

    borderRadius: 12,
    padding: 12,

    borderWidth: 1,
    borderColor: "#ddd",

    elevation: 3,
  },

  schemeItem: {
    fontSize: 15,
    paddingVertical: 10,
    color: "#333",

    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },

  /* MEMBERS SECTION */

  header: {
    flexDirection: "row",
    justifyContent: "space-between",

    paddingHorizontal: 15,
    marginTop: 15,
  },

  memberBox: {
    width: "48%",

    backgroundColor: "#e8f5e9",

    borderWidth: 2,
    borderColor: "green",

    borderRadius: 15,

    paddingVertical: 20,
    alignItems: "center",

    elevation: 3,
  },

  memberTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "green",
    marginBottom: 8,
  },

  memberValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "green",
  },
});

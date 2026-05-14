import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function PaymentStatus() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("All");

  const data = [
    {
      name: "Anita",
      date: "13 May 2026",
      amount: 200,
      status: "completed",
      image:
        "https://i.pinimg.com/736x/3a/84/43/3a84438c147f5cc10f1453a3b1b05090.jpg",
    },
    {
      name: "Arzu",
      date: "13 May 2026",
      amount: 200,
      status: "pending",
      image:
        "https://i.pinimg.com/736x/3a/84/43/3a84438c147f5cc10f1453a3b1b05090.jpg",
    },
  ];

  // FILTER LOGIC (TAB + SEARCH)
  const filteredData = data.filter((item) => {
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());

    const matchTab =
      activeTab === "All" || item.status === activeTab.toLowerCase();

    return matchSearch && matchTab;
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🏠 Marriage Payment</Text>

      {/* SEARCH BAR */}
      <TextInput
        placeholder="Search name..."
        value={search}
        onChangeText={setSearch}
        style={styles.searchBar}
      />

      {/* TABS */}
      <View style={styles.tabContainer}>
        {["All", "Completed", "Pending"].map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* LIST */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <View key={index} style={styles.card}>
              <View style={styles.topRow}>
                <Image source={{ uri: item.image }} style={styles.dp} />

                <View style={{ marginLeft: 10 }}>
                  <Text style={styles.title}>{item.name}</Text>

                  <View style={styles.row}>
                    <Text style={styles.date}>Date: {item.date}</Text>

                    <Text style={styles.amount}>₹{item.amount}</Text>
                  </View>
                </View>
              </View>

              <Text
                style={{
                  marginTop: 10,
                  fontWeight: "bold",
                  color: item.status === "completed" ? "green" : "#b59b00",
                }}
              >
                {item.status.toUpperCase()}
              </Text>
            </View>
          ))
        ) : (
          <Text style={{ textAlign: "center", marginTop: 20 }}>
            No Data Found
          </Text>
        )}
      </ScrollView>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },

  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },

  searchBar: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 15,
  },

  /* ===== TABS ===== */
  tabContainer: {
    flexDirection: "row",
    marginBottom: 15,
    gap: 10,
  },

  tab: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: "#e0e0e0",
  },

  activeTab: {
    backgroundColor: "green",
  },

  tabText: {
    color: "#333",
    fontWeight: "600",
  },

  activeTabText: {
    color: "#fff",
  },

  /* ===== CARD ===== */
  card: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "green",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,

    // shadow (Android + iOS)
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },

  topRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  dp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "green",
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },

  date: {
    fontSize: 12,
    color: "gray",
    marginTop: 3,
  },

  status: {
    marginTop: 10,
    fontWeight: "bold",
  },

  /* OPTIONAL if you later add progress */
  progressContainer: {
    marginTop: 20,
  },

  progressText: {
    marginBottom: 8,
    fontWeight: "600",
  },

  barBackground: {
    flexDirection: "row",
    height: 12,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#eee",
  },

  completeBar: {
    backgroundColor: "green",
    height: "100%",
  },

  pendingBar: {
    backgroundColor: "#f1c40f",
    height: "100%",
  },

  labelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },

  label: {
    fontSize: 12,
    fontWeight: "600",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 3,
  },

  amount: {
    color: "red",
    fontWeight: "bold",
    fontSize: 13,
    marginLeft: 20,
  },
});

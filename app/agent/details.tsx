import { Image, StyleSheet, Text, View } from "react-native";

export default function Details() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>🏠 Marriage Details</Text>

      {/* Profile Card */}
      <View style={styles.card}>
        <View style={styles.topRow}>
          <Image
            source={{
              uri: "https://i.pinimg.com/736x/3a/84/43/3a84438c147f5cc10f1453a3b1b05090.jpg",
            }}
            style={styles.dp}
          />

          <View style={{ marginLeft: 10 }}>
            <Text style={styles.title}>Anita</Text>
            <Text style={styles.date}>Registration No : 10001</Text>
          </View>
        </View>
      </View>

      {/* Details Box */}
      <View style={styles.detailsCard}>
        {/* Red Title Header */}
        <View style={styles.detailsHeader}>
          <Text style={styles.detailsHeaderText}>Details</Text>
        </View>

        {/* Details Content */}
        <View style={styles.detailsBody}>
          <Text style={styles.detailText}>📅 Date : 15 May 2026</Text>

          <Text style={styles.detailText}>📍 Location : Jaipur, Rajasthan</Text>

          <Text style={styles.detailText}>
            📝 Notes : Marriage ceremony arranged under Surksha scheme.
          </Text>
        </View>
      </View>

      <View style={styles.rowContainer}>
        {/* Box 1 */}
        <View style={styles.smallBox}>
          <Text style={styles.smallBoxTitle}>Completed</Text>
          <Text style={styles.smallBoxValue}>20</Text>
        </View>

        {/* Box 2 */}
        <View style={styles.smallBox}>
          <Text style={styles.smallBoxTitle}>Pendding</Text>
          <Text style={styles.smallBoxValue}>30</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },

  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "green",
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
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
    borderColor: "#797373cc",
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
  },

  date: {
    fontSize: 12,
    color: "gray",
    marginTop: 3,
  },

  /* DETAILS CARD */

  detailsCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#ddd",
  },

  detailsHeader: {
    backgroundColor: "#d43434",
    paddingVertical: 12,
    paddingHorizontal: 15,
  },

  detailsHeaderText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  detailsBody: {
    padding: 15,
  },

  detailText: {
    fontSize: 15,
    color: "#333",
    marginBottom: 12,
    lineHeight: 22,
  },

  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  smallBox: {
    width: "48%",
    backgroundColor: "#e8f5e9",
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: "center",

    borderWidth: 2,
    borderColor: "green",

    elevation: 3,
  },

  smallBoxTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "green",
  },

  smallBoxValue: {
    fontSize: 18,
    color: "#d43434",
    fontWeight: "700",
  },
});

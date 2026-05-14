import { Image, StyleSheet, Text, View } from "react-native";

export default function index() {
  const complete = 70; // percentage

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        🏠 Upcoming Marriage <button style={styles.button}>All Merriage</button>
      </Text>

      {/* CARD 1 */}
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
            <Text style={styles.date}>Date: 13 May 2026</Text>
          </View>
        </View>

        {/* Progress */}
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>Progress</Text>

          <View style={styles.barBackground}>
            <View style={[styles.completeBar, { width: `${complete}%` }]} />
            <View
              style={[styles.pendingBar, { width: `${100 - complete}%` }]}
            />
          </View>

          {/* Labels under each side */}
          <View style={styles.labelRow}>
            <Text style={[styles.label, { color: "green" }]}>
              Completed {complete}%
            </Text>

            <Text style={[styles.label, { color: "#b59b00" }]}>
              Pending {100 - complete}%
            </Text>
          </View>
        </View>
      </View>

      {/* CARD 2 */}
      <View style={styles.card}>
        <View style={styles.topRow}>
          <Image
            source={{
              uri: "https://i.pinimg.com/736x/3a/84/43/3a84438c147f5cc10f1453a3b1b05090.jpg",
            }}
            style={styles.dp}
          />

          <View style={{ marginLeft: 10 }}>
            <Text style={styles.title}>Arzu</Text>
            <Text style={styles.date}>Date: 13 May 2026</Text>
          </View>
        </View>

        {/* Progress */}
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>Progress</Text>

          <View style={styles.barBackground}>
            <View style={[styles.completeBar, { width: `${complete}%` }]} />
            <View
              style={[styles.pendingBar, { width: `${100 - complete}%` }]}
            />
          </View>

          <View style={styles.labelRow}>
            <Text style={[styles.label, { color: "green" }]}>
              Completed {complete}%
            </Text>

            <Text style={[styles.label, { color: "#b59b00" }]}>
              Pending {100 - complete}%
            </Text>
          </View>
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
    marginBottom: 15,
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
  },

  date: {
    fontSize: 12,
    color: "gray",
    marginTop: 3,
  },

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
    backgroundColor: "yellow",
    height: "100%",
  },

  labelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  label: {
    fontSize: 12,
    fontWeight: "600",
  },
  button: {
    fontSize: 12,
    fontWeight: "600",
    backgroundColor: "#d43434",
    color: "#ffff",
  },
});

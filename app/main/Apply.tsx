import React, { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ApplyForm() {
  const [form, setForm] = useState({
    fullName: "",
    fatherName: "",
    motherName: "",
    dob: "",
    gender: "",
    scheme: "",
    primaryMobile: "",
    secondaryMobile: "",
    aadhar: "",
    state: "",
    district: "",
    village: "",
    address: "",
    message: "",
  });

  const handleChange = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = () => {
    Alert.alert("Form Submitted", `Name: ${form.fullName}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Apply for Welfare Scheme</Text>

        <TextInput
          style={styles.input}
          placeholder="Full Name"
          onChangeText={(v) => handleChange("fullName", v)}
        />

        <TextInput
          style={styles.input}
          placeholder="Father Name"
          onChangeText={(v) => handleChange("fatherName", v)}
        />

        <TextInput
          style={styles.input}
          placeholder="Mother Name"
          onChangeText={(v) => handleChange("motherName", v)}
        />

        <TextInput
          style={styles.input}
          placeholder="Date of Birth (DD/MM/YYYY)"
          onChangeText={(v) => handleChange("dob", v)}
        />

        <TextInput
          style={styles.input}
          placeholder="Gender (Male/Female/Other)"
          onChangeText={(v) => handleChange("gender", v)}
        />

        <TextInput
          style={styles.input}
          placeholder="Select Welfare Scheme"
          onChangeText={(v) => handleChange("scheme", v)}
        />

        <TextInput
          style={styles.input}
          placeholder="Primary Mobile"
          keyboardType="phone-pad"
          onChangeText={(v) => handleChange("primaryMobile", v)}
        />

        <TextInput
          style={styles.input}
          placeholder="Secondary Mobile"
          keyboardType="phone-pad"
          onChangeText={(v) => handleChange("secondaryMobile", v)}
        />

        <TextInput
          style={styles.input}
          placeholder="Aadhaar Number"
          keyboardType="numeric"
          onChangeText={(v) => handleChange("aadhar", v)}
        />

        <TextInput
          style={styles.input}
          placeholder="State"
          onChangeText={(v) => handleChange("state", v)}
        />

        <TextInput
          style={styles.input}
          placeholder="District"
          onChangeText={(v) => handleChange("district", v)}
        />

        <TextInput
          style={styles.input}
          placeholder="Village / City"
          onChangeText={(v) => handleChange("village", v)}
        />

        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Full Address"
          multiline
          numberOfLines={4}
          onChangeText={(v) => handleChange("address", v)}
        />

        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Message"
          multiline
          numberOfLines={4}
          onChangeText={(v) => handleChange("message", v)}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit Application</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
    justifyContent: "center",
  },

  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    width: "100%",
    maxWidth: 600,
    alignSelf: "center",
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    fontSize: 14,
    backgroundColor: "#fff",
  },

  textArea: {
    height: 90,
    textAlignVertical: "top",
  },

  button: {
    backgroundColor: "#e21d1d",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

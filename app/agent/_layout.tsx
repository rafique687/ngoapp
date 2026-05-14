import { Stack } from "expo-router";
import Footer from "../../components/agent/Footer";
import Profile from "../../components/agent/Profile";
import { SchemeProvider } from "../../context/SchemeContext";

export default function Agent() {
  return (
    <>
      <SchemeProvider>
        <Profile />

        <Stack screenOptions={{ headerShown: false }} />
      </SchemeProvider>
      <Footer />
    </>
  );
}

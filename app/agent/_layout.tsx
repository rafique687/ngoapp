import { Stack } from "expo-router";
import Footer from "../../components/Footer";
import Profile from "../../components/agent/Profile";

export default function Agent() {
  return (
    <>
      <Profile />

      <Stack screenOptions={{ headerShown: false }} />

      <Footer />
    </>
  );
}

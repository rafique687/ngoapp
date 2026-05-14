import { Stack } from "expo-router";
import Footer from "../../components/Footer";
import Profile from "../../components/dashboard/Profile";

export default function DashboardLayout() {
  return (
    <>
      <Profile />

      <Stack screenOptions={{ headerShown: false }} />

      <Footer />
    </>
  );
}

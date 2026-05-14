import { Stack } from "expo-router";

import Footer from "../../components/Footer"; // ✅ FIXED
import Navbar from "../../components/Navbar";
import TopMenu from "../../components/TopMenu";

export default function Layout() {
  return (
    <>
      <TopMenu />
      <Navbar />

      <Stack screenOptions={{ headerShown: false }} />

      <Footer />
    </>
  );
}

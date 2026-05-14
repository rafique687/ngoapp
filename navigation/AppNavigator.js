import { createStackNavigator } from "@react-navigation/stack";

import TopMenu from "../components/TopMenu";
import ContactScreen from "../screens/ContactScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => <TopMenu {...props} />,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Contact" component={ContactScreen} />
    </Stack.Navigator>
  );
}

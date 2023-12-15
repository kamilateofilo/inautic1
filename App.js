import * as SplashScreen from "expo-splash-screen";
import { FONTS } from "./constants/fonts";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/auth/login";
import BottomTabNavigation from "./src/navigations/BottomTabNavigation";

const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts(FONTS);
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            initialRouteName="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={BottomTabNavigation}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Customize"
            component={BottomTabNavigation}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Contratos"
            component={BottomTabNavigation}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Graficos"
            component={BottomTabNavigation}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

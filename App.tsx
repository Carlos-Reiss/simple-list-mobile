import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, StatusBar, Text } from "native-base";
import React from "react";
import { Loading } from "./src/components/Loading";
import { Welcome } from "./src/screens/Welcome";
import { THEME } from "./src/styles/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? (
        <NavigationContainer>
          <Welcome />
        </NavigationContainer>
      ) : (
        <LoadingGlobal />
      )}
    </NativeBaseProvider>
  );
}

const LoadingGlobal = () => {
  return <>
  {/* {isLoading && <Loading translucent={isTranslucent} />} */}
  </>;
};

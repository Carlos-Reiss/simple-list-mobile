import { Poppins_400Regular, Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins';
import { AppRoutes } from '@routes/app-routes';
import { observer } from 'mobx-react-lite';
import { NativeBaseProvider, StatusBar } from 'native-base';
import React from 'react';

import { Loading } from './src/components/Loading';
import { loadingStore } from './src/stores/loading.store';
import { THEME } from './src/styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <LoadingGlobal />
      {fontsLoaded ? <AppRoutes /> : <Loading />}
    </NativeBaseProvider>
  );
}

const LoadingGlobal = observer(() => {
  if (loadingStore.isLoading) {
    return <Loading translucent={loadingStore.isTranslucent} />;
  }

  return null;
});

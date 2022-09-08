import { Loading } from '@components/Loading';
import { NavigationContainer } from '@react-navigation/native';
import { loadingStore } from '@stores/loading.store';
import { useEffect, useState } from 'react';

import { AppRoutes } from './app-routes';

export function Routes() {
  const [user] = useState(null);

  useEffect(() => {
    //TODO: verificar se o cara tá logado
  }, []);

  if (loadingStore.isLoading) {
    return <Loading />;
  }

  return <NavigationContainer>{user ? null : <AppRoutes />}</NavigationContainer>;
}

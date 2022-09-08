import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginRegister } from '@screens/LogUp';
import { Welcome } from '@screens/Welcome';

export const AppRoutes = () => {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Screen name="welcome" component={Welcome} />
        <Screen name="logup" component={LoginRegister} />
      </Navigator>
    </NavigationContainer>
  );
};

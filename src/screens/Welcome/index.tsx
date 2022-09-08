import Logo from '@assets/logo.svg';
import { LoginButton } from '@components/LoginButton';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { Text, VStack } from 'native-base';
import { useRef } from 'react';

const Welcome = () => {
  const navigation = useNavigation();

  const animation = useRef(null);

  function handleSignIn() {
    navigation.navigate('logup');
  }

  return (
    <VStack bg="gray.100" flex={1} alignItems="center" p={8} pt={24}>
      <LottieView
        ref={animation}
        style={{
          width: 200,
          height: 300,
        }}
        source={require('../../assets/bag.json')}
        autoPlay
        resizeMode="cover"
      />

      <Logo width={120} height={40} />

      <VStack flex={1} justifyContent="space-around" alignItems="center">
        <Text textAlign="center">
          Bem vindo ao
          <Text fontWeight="bold"> Simple List,</Text> um aplicativo para planejar, compartilhar e
          entender todas as suas despesas detalhadamente, economizando seu suado dinheirinho. 💰
        </Text>
      </VStack>
      <LoginButton onPress={handleSignIn} />
    </VStack>
  );
};

export { Welcome };

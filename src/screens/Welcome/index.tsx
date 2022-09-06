import Logo from '@assets/logo.svg';
import LottieView from 'lottie-react-native';
import { Text, VStack } from 'native-base';
import { useRef } from 'react';

import { LoginButton } from '../../components/LoginButton';
import { loadingStore } from '../../stores/loading.store';

const Welcome = () => {
  const animation = useRef(null);

  function handleLoading() {
    loadingStore.setLoading({
      loading: true,
    });
    setTimeout(() => {
      loadingStore.setLoading({
        loading: false,
      });
    }, 5000);
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
          entender todas as suas despesas detalhadamente assim economizando seu suado dinheirinho.
        </Text>
      </VStack>
      <LoginButton onPress={handleLoading} />
    </VStack>
  );
};

export { Welcome };

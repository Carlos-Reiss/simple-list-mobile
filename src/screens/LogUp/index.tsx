import Logo from '@assets/logo.svg';
import { Heading, ScrollView, VStack } from 'native-base';

import { SignIn } from './components/SignIn';

function LoginRegister() {
  return (
    <VStack bg="gray.100" flex={1} px={8} pt={20} justifyContent="space-around">
      <VStack alignItems="center" mb={6}>
        <Logo width={120} height={40} />
      </VStack>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack>
          <Heading letterSpacing={1.8} fontSize="3xl" mb={12}>
            Estamos
            {'\n'}
            quase lá.
          </Heading>

          <SignIn />
        </VStack>
      </ScrollView>
    </VStack>
  );
}

export { LoginRegister };

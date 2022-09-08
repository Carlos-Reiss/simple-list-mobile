import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { loadingStore } from '@stores/loading.store';
import { Divider, HStack, Icon, IconButton, Text, useTheme, VStack } from 'native-base';
import { EnvelopeSimple, Eye, EyeClosed, GoogleLogo, Key } from 'phosphor-react-native';
import { useState } from 'react';

function SignIn() {
  const [showPassword, setShowPassword] = useState(true);
  const { colors } = useTheme();

  function handleShowPassword() {
    setShowPassword((prev) => !prev);
  }

  function handleLogin() {
    loadingStore.setLoading({
      loading: true,
    });
    setTimeout(() => {
      loadingStore.setLoading({
        loading: false,
      });
    }, 1000);
  }

  return (
    <>
      <VStack>
        <Text color="gray.300" mb={6}>
          Faça seu Login para começar
          {'\n'}uma experiência incrível.
        </Text>
      </VStack>

      <VStack w="full" h={380}>
        <Input
          autoCapitalize="none"
          keyboardType="email-address"
          mb={4}
          placeholder="E-mail"
          InputLeftElement={<Icon as={<EnvelopeSimple color={colors.gray[300]} />} ml={4} />}
        />
        <Input
          mb={2}
          placeholder="Senha"
          secureTextEntry={showPassword}
          InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
          InputRightElement={
            <IconButton
              borderRadius="full"
              onPress={handleShowPassword}
              icon={
                <Icon
                  as={
                    showPassword ? (
                      <EyeClosed color={colors.secondary[700]} />
                    ) : (
                      <Eye color={colors.secondary[700]} />
                    )
                  }
                />
              }
            />
          }
        />

        <VStack mb={6} alignItems="flex-end">
          <Text onPress={handleLogin} color="gray.300">
            Esqueceu sua senha?{' '}
          </Text>
        </VStack>

        <Button mb={4} title="Entrar" onPress={handleLogin} />

        <Button
          variant="outline"
          bg="gray.300"
          title="Continuar com o Google"
          _pressed={{
            bg: 'gray.200',
          }}
          onPress={handleLogin}
          leftIcon={<Icon as={<GoogleLogo color={colors.gray[100]} />} ml={1} />}
        />

        <HStack alignItems="center" justifyContent="center" mt={8}>
          <Divider bg="gray.200" w={100} />
          <Text onPress={handleLogin} fontSize="xs" px={2} color="gray.300">
            Ainda não tem conta?{' '}
            <Text fontSize="xs" fontWeight="bold">
              vamos criar!
            </Text>
          </Text>
          <Divider bg="gray.200" w={100} />
        </HStack>
      </VStack>
    </>
  );
}

export { SignIn };

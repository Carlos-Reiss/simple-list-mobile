import LottieView from "lottie-react-native";
import { Text, VStack } from "native-base";
import { useRef, useState } from "react";
import Logo from "../../assets/logo.svg";
import { Button } from "../../components/Button";
import { Loading } from "../../components/Loading";
import { LoginButton } from "../../components/LoginButton";

function Welcome() {
  const animation = useRef(null);
  const [loading, setLoading] = useState(false);

  function handleLoading() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }

  return (
    <VStack bg="gray.100" flex={1} alignItems="center" p={8} pt={24}>
      {loading && <Loading translucent />}
      <LottieView
        ref={animation}
        style={{
          width: 200,
          height: 300,
        }}
        source={require("../../assets/bag.json")}
        autoPlay
        resizeMode="cover"
      />

      <Logo width={120} height={40} />

      <VStack flex={1} justifyContent="space-around" alignItems="center">
        <Text textAlign="center">
          <Text fontWeight="bold">Simple List,</Text> Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Amet in, quaerat quis nulla, dolorem
          repellat error cum sequi veniam sapiente sit impedit esse quos non
          facere iste, excepturi blanditiis repellendus.
        </Text>
      </VStack>
      <LoginButton onPress={handleLoading} />
    </VStack>
  );
}

export { Welcome };

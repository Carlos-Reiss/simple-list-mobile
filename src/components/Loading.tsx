import { Center, Spinner } from "native-base";
import { StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { useRef } from "react";

interface Props {
  translucent?: boolean;
}

export function Loading({ translucent = false }: Props) {
  const animation = useRef(null);
  const isTranslucent = translucent ? "rgba(0,0,0,0.8)" : 'gray.100';
  return (
    <Center
      style={StyleSheet.absoluteFillObject}
      flex={1}
      zIndex={1}
      bg={isTranslucent}
    >
      <LottieView
        ref={animation}
        style={{
          width: 120,
          height: 120,
        }}
        source={require("../assets/loading.json")}
        autoPlay
        resizeMode="cover"
      />
    </Center>
  );
}

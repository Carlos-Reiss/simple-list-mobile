import { IButtonProps, Button as NativeBaseButton, Text } from 'native-base';

type ButtonProps = {
  title: string;
} & IButtonProps;

function Button(props: ButtonProps) {
  return (
    <NativeBaseButton
      w="full"
      h={13}
      bg="primary.700"
      rounded="xl"
      _pressed={{
        bg: 'secondary.700',
      }}
      {...props}>
      <Text fontSize="md" color="white">
        {props.title}
      </Text>
    </NativeBaseButton>
  );
}

export { Button };

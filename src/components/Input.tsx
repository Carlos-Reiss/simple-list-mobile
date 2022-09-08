import { Input as NativeBaseInput, IInputProps } from 'native-base';

export function Input({ ...rest }: IInputProps) {
  return (
    <NativeBaseInput
      bg="gray.100"
      h={13}
      size="md"
      fontSize="md"
      fontFamily="body"
      color="gray.700"
      borderRadius="lg"
      placeholderTextColor="gray.300"
      _focus={{
        borderWidth: 1,
        borderColor: 'primary.700',
        bg: 'gray.100',
      }}
      {...rest}
    />
  );
}

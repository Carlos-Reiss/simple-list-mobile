import { Box, Icon, IconButton, IIconButtonProps, useTheme } from 'native-base';
import { ArrowRight } from 'phosphor-react-native';

function LoginButton(props: IIconButtonProps) {
  const { colors } = useTheme();
  return (
    <Box borderWidth={2} borderColor="gray.300" borderRadius="full" p={1} borderLeftWidth="0">
      <IconButton
        w={16}
        h={16}
        icon={<Icon as={<ArrowRight color={colors.gray[100]} weight="bold" />} />}
        size="lg"
        bg="primary.700"
        fontWeight="bold"
        borderRadius="full"
        _pressed={{
          bg: 'secondary.700',
        }}
        {...props}
      />
    </Box>
  );
}

export { LoginButton };

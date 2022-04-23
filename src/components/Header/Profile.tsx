import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align='center'>
      <Box mr='4' textAlign='right'>
        <Text>Diego Fernandes</Text>
        <Text color='gray.300' fontSize='small'>
          diego.schell.f@gmail.com
        </Text>
      </Box>

      <Avatar
        size='md'
        name='Diego Fernandes'
        src='https://avatars.githubusercontent.com/u/64265817?v=4'
      />
    </Flex>
  );
}

import { Avatar, Box, Text, useColorModeValue } from '@chakra-ui/react';

export const UserProfile: React.FC = () => {
    return (
        <Box textAlign={'center'}>
            <Avatar
            src={
                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
            }
            alt={'Jenny Wilson'}
            mb={2}
            />

            <Text fontWeight={600}>Jenny Wilson</Text>
            <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
            Vice President
            </Text>
      </Box>
    )
}
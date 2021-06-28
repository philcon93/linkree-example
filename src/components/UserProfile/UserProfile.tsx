import { Avatar, Box, Text } from '@chakra-ui/react';

type Props = {
    profileImage: string,
    name: string,
    username: string
}

export const UserProfile: React.FC<Props> = ({ profileImage, name, username } : Props) => {
    return (
        <Box textAlign={'center'}>
            <Avatar mb={2} src={profileImage} alt={name} />
            <Text fontWeight={600} color={'#263238'}>@{username}</Text>
      </Box>
    )
}
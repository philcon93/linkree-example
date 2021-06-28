import { Avatar, Box, Stack, Skeleton} from '@chakra-ui/react';

export const SkeletalPage: React.FC = () => (
    <Stack>
        <Box textAlign={'center'}><Avatar/></Box>
        {  [ ...Array(4) ].map((_, index) => <Skeleton key={index} height="48px" />) }
    </Stack>
)
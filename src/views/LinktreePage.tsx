import { Box, Container, SimpleGrid } from '@chakra-ui/react';
import { UserProfile } from '../components';

export const LinktreePage: React.FC = () => {

  return (
    <Container py={10}>
        <SimpleGrid columns={1} spacing={2}>
        <UserProfile />
        <Box bg="#39E09B" borderRadius={4} height="80px"></Box>
        <Box bg="#39E09B" borderRadius={4} height="80px"></Box>
        <Box bg="#39E09B" borderRadius={4} height="80px"></Box>
        <Box bg="#39E09B" borderRadius={4} height="80px"></Box>
        <Box textAlign={'center'}>Linktree</Box>
      </SimpleGrid>
    </Container>
  );
}
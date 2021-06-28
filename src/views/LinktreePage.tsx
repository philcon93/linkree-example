import { Box, Container, SimpleGrid } from '@chakra-ui/react';
import { ClassicLink, Footer, MusicLink, ShowLink, UserProfile } from '../components';

export const LinktreePage: React.FC = () => {

  return (
    <Container py={10}>
      <Box height={'85vh'}>
        <SimpleGrid columns={1} spacing={4} paddingTop={10}>
        <UserProfile profileImage={'https://avatars.githubusercontent.com/u/13529653?v=4'} name={'Phil Connah'} username={'philcon93'}/>
        <ClassicLink title={'Instagram'} url={'https://www.instagram.com/phillycheese93'}/>
        <ClassicLink title={'Github'} url={'https://github.com/philcon93'}/>
        <ShowLink title={'Shows'} url={'www.google.com'}/>
        <MusicLink title={'Music'} url={'www.google.com'}/>
      </SimpleGrid>
      </Box>
      <Footer />
    </Container>
  );
}
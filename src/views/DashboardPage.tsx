import { Box, Container, SimpleGrid} from '@chakra-ui/react';
import { ClassicLink, PageFooter } from '../components';


export const DashboardPage: React.FC = () => {

  return (
    <Container py={10}>
      <Box>
        <SimpleGrid columns={1} spacing={4} paddingTop={10}>
            <ClassicLink title={'Default theme'} url={'/goat'} isExternal={false}/>
            <ClassicLink title={'Another theme'} url={'/garyvee'} isExternal={false} />
        </SimpleGrid>
      </Box>
      <PageFooter />
    </Container>
  );
}
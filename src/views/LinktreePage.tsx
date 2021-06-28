import { Box, Container, SimpleGrid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ClassicLink, CollapseLink, PageFooter, SkeletalPage, UserProfile } from '../components';
import { LinkTypes, ResponseData } from '../store/interfaces';
import { responseData } from '../store/data';

export const LinktreePage: React.FC = () => {
  const [ data, setData ] = useState<ResponseData>();

  useEffect(() => {
    setData(responseData);
  }, []);

  return (
    <Container py={10}>
      <Box>
        {
          data ? 
          <SimpleGrid columns={1} spacing={4} paddingTop={10}>
          <UserProfile
            profileImage={data.user.profileImage}
            name={data.user.name}
            username={data.user.username} />
            {
              data.links.map((link, index) => {
                if (link.type === LinkTypes.Classic) {
                  return <ClassicLink key={index} title={link.title} url={link.classicDetails?.url} />
                } else if (link.type === LinkTypes.Event) {
                  return <CollapseLink key={index} title={link.title} eventsDetails={link.eventsDetails}/>
                } else if (link.type === LinkTypes.Music) {
                  return <CollapseLink key={index} title={link.title} musicDetails={link.musicDetails} />
                }
              })
            }
          </SimpleGrid> : <SkeletalPage />
        }
      </Box>
      <PageFooter />
    </Container>
  );
}
import { Box, Container, SimpleGrid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ClassicLink, CollapseLink, PageFooter, SkeletalPage, UserProfile } from '../components';
import { LinkTypes, PageStatus, ResponseData } from '../store/interfaces';
import { fakeFetchData } from '../store/utilities';


export const LinktreePage: React.FC = () => {
  const [ pageStatus, setPageStatus ] = useState<PageStatus>(PageStatus.Loading);
  const [ data, setData ] = useState<ResponseData>();

  useEffect(() => {
    fakeFetchData()
    .then((result: ResponseData) => {
      setData(result);
      setPageStatus(PageStatus.Success);
    }).catch(() => {
      setPageStatus(PageStatus.Error)
    });
  }, []);

  // @todo: Create error state page to get user to reload the page
  if (pageStatus === PageStatus.Error) {
    return (
        <span>Error error</span>
    )
  }

  return (
    <Container py={10}>
      <Box>
        {
          pageStatus === PageStatus.Success && data ? 
          <SimpleGrid columns={1} spacing={4} paddingTop={10}>
          <UserProfile
            profileImage={data.user.profileImage}
            name={data.user.name}
            username={data.user.username} />
            {
              data.links.map(link => {
                if (link.type === LinkTypes.Classic) {
                  return <ClassicLink key={link.id} title={link.title} url={link.classicDetails?.url} />
                } else if (link.type === LinkTypes.Event) {
                  return <CollapseLink key={link.id} id={link.id} title={link.title} eventsDetails={link.eventsDetails}/>
                } else if (link.type === LinkTypes.Music) {
                  return <CollapseLink key={link.id} id={link.id} title={link.title} musicDetails={link.musicDetails} />
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
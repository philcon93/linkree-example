import { Box, Container, SimpleGrid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ClassicLink, CollapseLink, PageFooter, SkeletalPage, UserProfile } from '../components';
import { LinkTypes, PageStatus, ResponseData } from '../store/interfaces';
import { responseData } from '../store/data';


const fakeFetchData = (): Promise<ResponseData> => {
  return new Promise(resolve => { 
      setTimeout(() => resolve(responseData), 1000);
  });
}

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

  if (pageStatus === PageStatus.Error) {
    return (
        <span>Error error</span>
        // <PageEmptyState
        //     action={{ content: 'Reload page', onAction: () => window.location.reload() }}
        //     text='There seems to be something off with this page, try reloading the page :)' />
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
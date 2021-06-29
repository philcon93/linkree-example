import { Collapse, Box, Flex } from '@chakra-ui/react';
import { useStore } from '../../store/store';
import { EventsDetails, MusicDetails } from '../index';
import { EventLink, MusicLinkDetails, Theme } from '../../store/interfaces';

type Props = {
  id: string,
  theme?: Theme,
  title: string,
  eventsDetails?: EventLink[],
  musicDetails?: MusicLinkDetails
}

// @todo: Make component keyboard accessible
export const CollapseLink: React.FC<Props> = ({ theme, id, title, eventsDetails, musicDetails } : Props) => {
  const collapseId = useStore((state) => state.collapseId);
  const setCollapseId = useStore((state) => state.setCollapseId);

  const updateCollapse = () => {
    if (collapseId === id) {
      setCollapseId('')
    } else {
      setCollapseId(id)
    }
  }

  return (
    <Box>
      <Flex
        bg={theme?.backgroundColour}
        border={`1px solid ${theme?.backgroundColour}`}
        _hover={{ cursor: 'pointer', backgroundColor: theme?.textColour, color: theme?.backgroundColour }}
        _focus={{ backgroundColor: theme?.textColour, color: theme?.backgroundColour }}
        color={theme?.textColour}
        borderRadius={theme?.borderRadius}
        height="48px"
        alignItems={'center'}
        justifyContent={'center'}
        data-testid={'CollapseLink'}
        onClick={updateCollapse}>
        <span>{title}</span>
      </Flex>
      <Collapse in={collapseId === id} animateOpacity unmountOnExit>
        <Box px={5} color="#263238" bg="#F5F7F8">
          {
            eventsDetails && <EventsDetails events={eventsDetails}/>
          }
          {
            musicDetails && <MusicDetails musicDetails={musicDetails} />
          }
        </Box>
      </Collapse>
    </Box>
  );
};

CollapseLink.defaultProps = {
  theme: {
    backgroundColour: '#39E09B',
    textColour: '#263238',
    borderRadius: 4
  }
}
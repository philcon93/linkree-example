import { Collapse, Box, Flex } from '@chakra-ui/react';
import { useStore } from '../../store/store';
import { EventsDetails, MusicDetails } from '../index';
import { EventLink, MusicLinkDetails } from '../../store/interfaces'

type Props = {
  backgroundColour?: string,
  textColour?: string,
  borderRadius?: number,
  id: string,
  title: string,
  eventsDetails?: EventLink[],
  musicDetails?: MusicLinkDetails
}

// @todo: Make component keyboard accessible
export const CollapseLink: React.FC<Props> = ({
  backgroundColour, textColour, borderRadius, id, title, eventsDetails, musicDetails
} : Props) => {
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
        bg={backgroundColour}
        _hover={{ cursor: 'pointer', backgroundColor: textColour, color: backgroundColour }}
        _focus={{ backgroundColor: textColour, color: backgroundColour }}
        color={textColour}
        borderRadius={borderRadius}
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
  backgroundColour: '#39E09B',
  textColour: '#263238',
  borderRadius: 4
}
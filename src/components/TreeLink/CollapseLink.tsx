import { Collapse, Box, Flex, useDisclosure } from '@chakra-ui/react';
import { EventsDetails, MusicDetails } from '../index';
import { EventLink, MusicLinkDetails } from '../../store/interfaces'

type Props = {
  backgroundColour?: string,
  textColour?: string,
  borderRadius?: number,
  title: string,
  eventsDetails?: EventLink[],
  musicDetails?: MusicLinkDetails
}

export const CollapseLink: React.FC<Props> = ({
  backgroundColour, textColour, borderRadius, title, eventsDetails, musicDetails
} : Props) => {
  const { isOpen, onToggle } = useDisclosure();

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
        onClick={onToggle}>
        <span>{title}</span>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
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
import { Collapse, Box, Flex, useDisclosure } from '@chakra-ui/react';
import { ListItem, MusicPlayer, LinkFooter } from '../index';

// - show link
//     - title
//     - event
//         - date
//         - location
//         - url
//         - remaining tickets

type Event = {
  date: string,
  location: string,
  url: string,
  remainingTickets: number
}

type Props = {
  backgroundColour?: string,
  textColour?: string,
  borderRadius?: number,
  title: string,
  events?: Event[]
}

export const CollapseLink: React.FC<Props> = ({ backgroundColour, textColour, borderRadius, title }: Props) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={backgroundColour}
        _hover={{ cursor: 'pointer', backgroundColor: textColour, color: backgroundColour }}
        _focus={{ cursor: 'pointer', backgroundColor: textColour, color: backgroundColour }}
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
            <MusicPlayer title={'Siona Records: 2nd Anniversary'} band={'Miss Monique'} progress={20} />
            <ListItem title={'Apr 02 2019'} subtitle={'The Forum, Melbourne'} url={'http://google.com/'} />
            <ListItem title={'Apr 02 2019'} subtitle={'Venue Name, Canberra'} rightAlignText={'Sold out'} url={'http://google.com/'} />
            <ListItem title={'Spotify'} image={'spotify'} url={'http://google.com/'} />
            <ListItem title={'Apple Music'} image={'apple-music'} url={'http://google.com/'} />
            <LinkFooter />
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
import { Flex } from '@chakra-ui/react';

// - music link
//     - title
//     - song
//         - title
//         - band
//     - platforms

type Props = {
  backgroundColour?: string,
  textColour?: string,
  borderRadius?: number,
  title: string,
  url: string
}

export const MusicLink: React.FC<Props> = ({ backgroundColour, textColour, borderRadius, title, url}: Props) => (
    <Flex
      bg={backgroundColour}
      _hover={{ cursor: 'pointer', backgroundColor: textColour, color: backgroundColour }}
      _focus={{ cursor: 'pointer', backgroundColor: textColour, color: backgroundColour }}
      color={textColour}
      borderRadius={borderRadius}
      height="48px"
      alignItems={'center'}
      justifyContent={'center'}
      onClick={() => window.location.assign(url)}>
      <span>{title}</span>
    </Flex>
);

MusicLink.defaultProps = {
  backgroundColour: '#39E09B',
  textColour: '#263238',
  borderRadius: 4
}
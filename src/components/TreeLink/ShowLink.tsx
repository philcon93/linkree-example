import { Flex } from '@chakra-ui/react';

// - show link
//     - title
//     - event
//         - date
//         - location
//         - url
//         - remaining tickets

type Props = {
  backgroundColour?: string,
  textColour?: string,
  borderRadius?: number,
  title: string,
  url: string
}

export const ShowLink: React.FC<Props> = ({ backgroundColour, textColour, borderRadius, title, url}: Props) => (
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

ShowLink.defaultProps = {
  backgroundColour: '#39E09B',
  textColour: '#263238',
  borderRadius: 4
}
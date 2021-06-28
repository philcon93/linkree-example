import { Flex } from '@chakra-ui/react';

type Props = {
  backgroundColour?: string,
  textColour?: string,
  borderRadius?: number,
  title: string,
  url: string
}

export const ClassicLink: React.FC<Props> = ({ backgroundColour, textColour, borderRadius, title, url}: Props) => (
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

ClassicLink.defaultProps = {
  backgroundColour: '#39E09B',
  textColour: '#263238',
  borderRadius: 4
}
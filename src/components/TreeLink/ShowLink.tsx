import { Collapse, Box, Flex, useDisclosure } from '@chakra-ui/react';

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

export const ShowLink: React.FC<Props> = ({ backgroundColour, textColour, borderRadius, title, url }: Props) => {
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
        <Box
          p="40px"
          color="#263238"
          bg="#F5F7F8" >
          Content
        </Box>
      </Collapse>
    </Box>
  );
};

ShowLink.defaultProps = {
  backgroundColour: '#39E09B',
  textColour: '#263238',
  borderRadius: 4
}
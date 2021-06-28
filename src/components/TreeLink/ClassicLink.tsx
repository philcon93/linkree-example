import { Link } from '@chakra-ui/react';

type Props = {
  backgroundColour?: string,
  textColour?: string,
  borderRadius?: number,
  title: string,
  url?: string
}

export const ClassicLink: React.FC<Props> = ({ backgroundColour, textColour, borderRadius, title, url}: Props) => (
    <Link
      display={'flex'}
      bg={backgroundColour}
      _hover={{ backgroundColor: textColour, color: backgroundColour }}
      _focus={{ backgroundColor: textColour, color: backgroundColour }}
      color={textColour}
      borderRadius={borderRadius}
      height="48px"
      alignItems={'center'}
      justifyContent={'center'}
      href={url}
      isExternal>
      <span>{title}</span>
    </Link>
);

ClassicLink.defaultProps = {
  backgroundColour: '#39E09B',
  textColour: '#263238',
  borderRadius: 4
}